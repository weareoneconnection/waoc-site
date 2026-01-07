#!/usr/bin/env bash
set -euo pipefail

ROOT="app"
echo "🔎 Scanning for Next 15 params typing issues under: $ROOT"

# 1) 找出所有包含旧签名的文件
FILES=$(grep -RIl --include="page.tsx" --include="layout.tsx" \
  -e "params }: { params: { locale: string }" \
  -e "params }: { params: Params }" \
  -e "type Params = { locale: string }" \
  "$ROOT" || true)

if [ -z "${FILES}" ]; then
  echo "✅ No matching files found. Nothing to fix."
  exit 0
fi

echo "🧾 Files to patch:"
echo "$FILES" | sed 's/^/ - /'

echo ""
echo "🛠  Patching..."

while IFS= read -r f; do
  [ -z "$f" ] && continue

  # A) 把 function 改成 async，并把 params 类型改成 Promise<{ locale: string }>
  # 适配两种常见写法：
  #   export default function X({ params }: { params: { locale: string } }) {
  #   export default function X({ params }: { params: Params }) {  (并且有 type Params = { locale: string })
  perl -0777 -i -pe '
    s/export\s+default\s+function\s+(\w+)\s*\(\s*\{\s*params\s*\}\s*:\s*\{\s*params\s*:\s*\{\s*locale\s*:\s*string\s*\}\s*\}\s*\)\s*\{/export default async function $1({ params }: { params: Promise<{ locale: string }> }) {/g;

    s/export\s+default\s+function\s+(\w+)\s*\(\s*\{\s*params\s*\}\s*:\s*\{\s*params\s*:\s*Params\s*\}\s*\)\s*\{/export default async function $1({ params }: { params: Promise<{ locale: string }> }) {/g;

    # 如果文件里有 type Params = { locale: string }，可以保留也可以删，这里选择删掉避免混淆
    s/\ntype\s+Params\s*=\s*\{\s*locale\s*:\s*string\s*;\s*\}\s*;?\n/\n/g;
  ' "$f"

  # B) 在函数体开头插入：const { locale } = await params;
  # 仅在文件内出现 "({ params }" 且尚未出现 "await params" 时插入
  if grep -q "({ params }" "$f" && ! grep -q "await params" "$f"; then
    perl -0777 -i -pe '
      # 找到 export default async function ... { 的第一个 { 后插入一行
      s/(export\s+default\s+async\s+function\s+\w+\s*\([^\)]*\)\s*\{\s*\n)/$1  const { locale } = await params;\n/g
    ' "$f"
  fi

done <<< "$FILES"

echo "✅ Patch complete."
echo ""
echo "🔁 Now run: npm run build"
