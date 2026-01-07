// app/[locale]/get-started/page.tsx
import Link from "next/link";
import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

/** 微弱奶白底纹（与首页同气质） */
function SoftBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-44 left-1/2 h-[560px] w-[980px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 35%, rgba(186,127,73,.14), transparent 58%), radial-gradient(circle at 70% 60%, rgba(236,210,170,.22), transparent 56%)",
        }}
      />
      <div
        className="absolute bottom-[-220px] left-1/2 h-[520px] w-[1100px] -translate-x-1/2 opacity-55"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,.65) 34%, rgba(0,0,0,0) 70%)",
        }}
      />
    </div>
  );
}

/** 页面内右上角 CTA（保留你截图那两个按钮） */
function CornerActions({
  locale,
  aVerify,
  aDocs,
}: {
  locale: string;
  aVerify: string;
  aDocs: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <Link
        href={`/${locale}/verify`}
        className="inline-flex items-center justify-center rounded-full border border-border bg-panel px-5 py-2 text-sm font-semibold text-text shadow-soft hover:bg-white/60"
      >
        {aVerify}
      </Link>
      <Link
        href={`/${locale}/docs`}
        className="group inline-flex items-center justify-center rounded-full bg-text px-5 py-2 text-sm font-semibold text-bg shadow-soft hover:opacity-90"
      >
        {aDocs}
        <span aria-hidden className="ml-2 transition group-hover:translate-x-0.5">
          →
        </span>
      </Link>
    </div>
  );
}

/** 入口卡：整卡可点，按钮为主 CTA */
function EntryCard({
  title,
  desc,
  href,
  cta,
  note,
  badge,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
  note?: string;
  badge?: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "group block rounded-2xl border border-border bg-panel p-7 shadow-soft",
        "transition-all duration-200",
        "hover:bg-white/60 hover:shadow-[0_16px_46px_rgba(0,0,0,0.08)]",
        "hover:-translate-y-0.5",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(182,129,78,0.45)]",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold text-text">{title}</div>
          <p className="mt-2 text-sm leading-6 text-muted">{desc}</p>
        </div>

        {badge ? (
          <span className="shrink-0 rounded-full border border-border bg-bg/60 px-3 py-1 text-[11px] font-semibold text-muted shadow-soft">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="mt-4 text-xs font-medium text-muted">{note ?? " "}</div>

      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-bg shadow-soft transition group-hover:opacity-95">
        {cta}
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </Link>
  );
}

function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-7">
      <h2 className="text-xl font-semibold text-text">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm text-muted">{subtitle}</p> : null}
    </div>
  );
}

export default async function GetStartedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";
  const L = (path: string) => `/${locale}${path}`;

  const copy = {
    title: isZh ? "开始了解 WAOC" : "Get started with WAOC",
    sub: isZh
      ? "一个入口，快速理解参与方式、Genesis NFT、Practice、Token 与 Whitepaper。"
      : "A single place to understand participation, Genesis NFT, practice, token, and the whitepaper.",

    aVerify: isZh ? "前往核验" : "Go to Verify",
    aDocs: isZh ? "阅读文档" : "Read Docs",

    pathKicker: isZh ? "推荐路径" : "Recommended path",
    path: isZh ? "核验 → 了解 → 参与" : "Verify → Learn → Participate",

    c1t: "Genesis NFT",
    c1d: isZh
      ? "起源与身份层：777 设定、价值、Mint 与持有者权益。"
      : "Origin & identity layer: 777, value, minting, and holder rights.",
    c1cta: isZh ? "打开 Genesis 页面" : "Open NFT page",
    c1note: isZh ? "适合：首次了解与收藏" : "Best for: first-time overview & collectors",
    c1badge: isZh ? "Live" : "Live",

    c2t: isZh ? "Practice & Mindfulness" : "Practice & Mindfulness",
    c2d: isZh
      ? "反思与觉察工具：冥想应用与长期对齐。"
      : "Tools for reflection: the meditation app and long-term alignment.",
    c2cta: isZh ? "打开 Practice 页面" : "Open practice page",
    c2note: isZh ? "适合：每天 5 分钟" : "Best for: daily 5-minute practice",
    c2badge: isZh ? "Planned" : "Planned",

    c3t: isZh ? "WAOC Token" : "WAOC Token",
    c3d: isZh
      ? "链上参与与协作：合约、流动性、分配与注意事项。"
      : "On-chain participation: contracts, liquidity, allocation, and notices.",
    c3cta: isZh ? "打开 Token 页面" : "Open token page",
    c3note: isZh ? "适合：交易前必读" : "Best for: read before trading",
    c3badge: isZh ? "Info" : "Info",

    c4t: "Whitepaper",
    c4d: isZh
      ? "愿景与路线图：最清晰的一版 WAOC 正在构建什么。"
      : "Vision & roadmap: the clearest version of what WAOC is building.",
    c4cta: isZh ? "阅读 Whitepaper" : "Read whitepaper",
    c4note: isZh ? "适合：理解叙事与长期目标" : "Best for: narrative & long-term goals",
    c4badge: isZh ? "Core" : "Core",

    safeTitle: isZh ? "参与前请先核验" : "Verify before you participate",
    safeDesc: isZh
      ? "采取任何操作前，请务必核验官方合约与链接。WAOC 不会私信你，也不会索要助记词或私钥。"
      : "Always verify official contracts and links before taking action. WAOC will never DM you for seed phrases or private keys.",
    safeBtn: isZh ? "打开验证中心" : "Open Verify Center",

    nextTitle: isZh ? "下一步会发生什么" : "What happens next",
    nextSub: isZh
      ? "让路径更简单：你不需要一次搞懂所有东西。"
      : "Keep it simple: you don’t need to understand everything at once.",
    s1: isZh ? "1) 先核验" : "1) Verify first",
    s1d: isZh
      ? "确认合约地址、官方链接与生态入口。"
      : "Confirm contracts, official links, and ecosystem entry points.",
    s2: isZh ? "2) 选择入口" : "2) Pick an entry",
    s2d: isZh
      ? "Genesis / Practice / Token / Whitepaper 任选其一开始。"
      : "Start with Genesis / Practice / Token / Whitepaper.",
    s3: isZh ? "3) 加入连接" : "3) Join & connect",
    s3d: isZh
      ? "进入社区，参与贡献与协作，形成可验证的长期影响。"
      : "Join the community, contribute, and build verifiable long-term impact.",

    faqTitle: isZh ? "常见问题" : "FAQ",
    q1: isZh ? "这是官方入口吗？" : "Is this an official entry?",
    a1: isZh
      ? "是的，这是 WAOC 的官方信息入口，用于核验、文档与生态导航。"
      : "Yes. This is the official information entry for verification, docs, and ecosystem navigation.",
    q2: isZh ? "WAOC 会私信我吗？" : "Will WAOC DM me?",
    a2: isZh
      ? "不会。任何索要助记词/私钥的都属于诈骗。"
      : "No. Anyone asking for seed phrases/private keys is a scam.",
    q3: isZh ? "我应该从哪里开始？" : "Where should I start?",
    a3: isZh
      ? "先 Verify，再从 Whitepaper 或 Genesis 入手，最后再看 Token 与 Practice。"
      : "Verify first, then start with Whitepaper or Genesis, and later explore Token and Practice.",
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="relative">
        <SoftBackdrop />

        <Container>
          <div className="relative py-12 md:py-16">
            {/* ✅ 注意：这里没有 Home / Back 任何东西了，只保留右上角两个按钮 */}
            <div className="flex justify-end">
              <CornerActions
                locale={locale}
                aVerify={copy.aVerify}
                aDocs={copy.aDocs}
              />
            </div>

            <h1 className="mt-10 max-w-4xl text-4xl font-semibold leading-[1.12] tracking-[-0.02em] md:text-6xl">
              {copy.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-7 text-muted md:text-lg">
              {copy.sub}
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-panel/70 px-4 py-2 text-sm font-semibold text-text shadow-soft backdrop-blur">
              <span className="text-muted">{copy.pathKicker}:</span>
              <span>{copy.path}</span>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <EntryCard
                title={copy.c1t}
                desc={copy.c1d}
                href={L("/genesis")}
                cta={copy.c1cta}
                note={copy.c1note}
                badge={copy.c1badge}
              />
              <EntryCard
                title={copy.c2t}
                desc={copy.c2d}
                href={L("/practice")}
                cta={copy.c2cta}
                note={copy.c2note}
                badge={copy.c2badge}
              />
              <EntryCard
                title={copy.c3t}
                desc={copy.c3d}
                href={L("/get-started/token")}
                cta={copy.c3cta}
                note={copy.c3note}
                badge={copy.c3badge}
              />
              <EntryCard
                title={copy.c4t}
                desc={copy.c4d}
                href={L("/get-started/whitepaper")}
                cta={copy.c4cta}
                note={copy.c4note}
                badge={copy.c4badge}
              />
            </div>

            <div className="mt-12 rounded-2xl border border-border bg-panel p-7 shadow-soft">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-base font-semibold text-text">
                    {copy.safeTitle}
                  </div>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
                    {copy.safeDesc}
                  </p>
                </div>
                <Link
                  href={L("/verify")}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:bg-white/60"
                >
                  {copy.safeBtn}
                </Link>
              </div>
            </div>

            <div className="mt-12">
              <SectionTitle title={copy.nextTitle} subtitle={copy.nextSub} />
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-border bg-panel p-6 shadow-soft">
                  <div className="text-sm font-semibold text-text">{copy.s1}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{copy.s1d}</p>
                </div>
                <div className="rounded-2xl border border-border bg-panel p-6 shadow-soft">
                  <div className="text-sm font-semibold text-text">{copy.s2}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{copy.s2d}</p>
                </div>
                <div className="rounded-2xl border border-border bg-panel p-6 shadow-soft">
                  <div className="text-sm font-semibold text-text">{copy.s3}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{copy.s3d}</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <SectionTitle title={copy.faqTitle} />
              <div className="grid gap-4">
                <details className="rounded-2xl border border-border bg-panel p-6 shadow-soft">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-text">
                    {copy.q1}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted">{copy.a1}</p>
                </details>

                <details className="rounded-2xl border border-border bg-panel p-6 shadow-soft">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-text">
                    {copy.q2}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted">{copy.a2}</p>
                </details>

                <details className="rounded-2xl border border-border bg-panel p-6 shadow-soft">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-text">
                    {copy.q3}
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-muted">{copy.a3}</p>
                </details>
              </div>
            </div>

            <div className="h-16" />
          </div>
        </Container>
      </div>
    </div>
  );
}
