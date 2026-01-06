// app/[locale]/verify/page.tsx
import Link from "next/link";
import React from "react";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SoftBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-44 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(186,127,73,.14), transparent 55%), radial-gradient(circle at 70% 60%, rgba(236,210,170,.22), transparent 52%)",
        }}
      />
      <div
        className="absolute bottom-[-220px] left-1/2 h-[540px] w-[1160px] -translate-x-1/2 opacity-60"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.04) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at center, rgba(0,0,0,1) 0%, rgba(0,0,0,.6) 35%, rgba(0,0,0,0) 70%)",
        }}
      />
    </div>
  );
}

function Field({
  label,
  value,
  href,
  mono,
}: {
  label: string;
  value: string;
  href?: string;
  mono?: boolean;
}) {
  const isNA = value.trim().toLowerCase() === "n/a";
  const display = value;

  return (
    <div className="rounded-2xl border border-border bg-panel p-5 shadow-soft">
      <div className="text-xs font-semibold tracking-wide text-muted">{label}</div>

      <div className={cx("mt-2 break-all text-sm leading-6", mono && "font-mono")}>
        {isNA ? (
          <span className="text-muted">{display}</span>
        ) : href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-text underline decoration-border/70 underline-offset-4 hover:opacity-80"
          >
            {display}
          </a>
        ) : (
          <span className="text-text">{display}</span>
        )}
      </div>

      {href && !isNA ? (
        <div className="mt-3">
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-text hover:shadow"
          >
            Open <span aria-hidden>↗</span>
          </a>
        </div>
      ) : null}
    </div>
  );
}

function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-border bg-panel p-7 shadow-soft">
      <div className="text-lg font-semibold text-text">{title}</div>
      {subtitle ? <div className="mt-2 text-sm text-muted">{subtitle}</div> : null}
      <div className="mt-6 grid gap-4">{children}</div>
    </div>
  );
}

export default async function VerifyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  // ✅ 你提供的所有信息（已全部填入）
  const data = {
    official: {
      website: "https://weareoneconnection.carrd.co/",
      x: "https://x.com/waoconnectone?s=21",
      telegram: "https://t.me/WAOCGlobalCommunity",
    },
    sol: {
      tokenMint: "82gi7mybA1yHi56FcCC9wvTPzew5hsxP2wdHv4nYpump",
      solscan: "https://solscan.io/token/82gi7mybA1yHi56FcCC9wvTPzew5hsxP2wdHv4nYpump",
      dexscreener: "https://dexscreener.com/solana/3mjvsq4kg51kfsczcafshfhjfs5st361a55ipyderdw9",
    },
    bsc: {
      ca: "0x4f0b6d521e3929b240e265fac2155d4341abede7",
      bscscan: "https://bscscan.com/address/0x4f0b6d521e3929b240e265fac2155d4341abede7",
      dex: "https://bscscan.com/address/0x4f0b6d521e3929b240e265fac2155d4341abede7",
    },
  };

  const t = {
    title: isZh ? "Verify（核验中心）" : "Verification Center",
    subtitle: isZh
      ? "这里是唯一可信的官方入口集合。参与前请先核验合约与链接。"
      : "These are the only official links you should trust. Verify before you participate.",
    noticeTitle: isZh ? "安全提示" : "Security notice",
    noticeText: isZh
      ? "WAOC 不会私信你索要助记词 / 私钥，也不会让你转账到“客服钱包”。发现仿冒请在社区举报。"
      : "WAOC will never DM you asking for seed phrases/private keys or ask you to send funds to a “support wallet”. Report impersonators in the community.",
    back: isZh ? "← 返回首页" : "← Back to Home",
    officialTitle: isZh ? "官方渠道" : "Official channels",
    officialSub: isZh ? "以下是唯一可信入口。" : "These are the only channels you should trust.",
    solTitle: "Solana (mainnet)",
    solSub: isZh ? "Solana 生态合约与浏览器。" : "Contracts and explorers for Solana ecosystem.",
    bscTitle: "BSC (optional)",
    bscSub: isZh ? "如果你也部署在 BSC，这里是核验入口。" : "If you also deploy on BSC, verify details here.",
    footerLeft: isZh ? "© 2026 WAOC. 保留所有权利。" : "© 2026 WAOC. All rights reserved.",
    footerRight: isZh ? "本站不构成任何投资建议。" : "This site does not constitute financial advice.",
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="relative">
        <SoftBackdrop />
        <div className="relative border-b border-border/80 bg-bg/60 backdrop-blur">
          <Container>
            <div className="flex h-16 items-center justify-between">
              <Link href={`/${locale}`} className="text-sm font-semibold text-muted hover:text-text">
                {t.back}
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1.5 text-xs font-semibold text-muted shadow-soft">
                {t.noticeTitle}: <span className="text-text">{isZh ? "先核验再参与" : "Verify first"}</span>
              </div>
            </div>
          </Container>
        </div>

        <Container>
          <div className="py-12 md:py-14">
            <h1 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
              {t.title}
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-muted md:text-base">
              {t.subtitle}
            </p>

            <div className="mt-8 rounded-3xl border border-border bg-panel p-6 shadow-soft">
              <div className="text-sm font-semibold text-text">{t.noticeTitle}</div>
              <p className="mt-2 text-sm leading-6 text-muted">{t.noticeText}</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card title={t.officialTitle} subtitle={t.officialSub}>
                <Field label="Website" value={data.official.website} href={data.official.website} />
                <Field label="X / Twitter" value={data.official.x} href={data.official.x} />
                <Field label="Telegram" value={data.official.telegram} href={data.official.telegram} />
              </Card>

              <Card title={t.solTitle} subtitle={t.solSub}>
                <Field
                  label="Token Mint"
                  value={data.sol.tokenMint}
                  href={`https://solscan.io/token/${data.sol.tokenMint}`}
                  mono
                />
                <Field label="Solscan" value={data.sol.solscan} href={data.sol.solscan} />
                <Field label="DexScreener" value={data.sol.dexscreener} href={data.sol.dexscreener} />
              </Card>

              <Card title={t.bscTitle} subtitle={t.bscSub}>
                <Field
                  label="Token Contract (CA)"
                  value={data.bsc.ca}
                  href={data.bsc.bscscan}
                  mono
                />
                <Field label="BscScan" value={data.bsc.bscscan} href={data.bsc.bscscan} />
                <Field label="DEX" value={data.bsc.dex} href={data.bsc.dex} />
              </Card>

              <div className="rounded-3xl border border-border bg-panel p-7 shadow-soft">
                <div className="text-lg font-semibold text-text">{isZh ? "快速操作" : "Quick actions"}</div>
                <p className="mt-2 text-sm text-muted">
                  {isZh ? "参与前先核验，再阅读文档。" : "Verify first, then read docs before participating."}
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/${locale}/docs`}
                    className="inline-flex justify-center rounded-xl bg-text px-5 py-2.5 text-sm font-semibold text-bg shadow-soft hover:opacity-90"
                  >
                    {isZh ? "阅读 Docs →" : "Read Docs →"}
                  </Link>

                  <Link
                    href={`/${locale}/get-started`}
                    className="inline-flex justify-center rounded-xl border border-border bg-bg px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:shadow"
                  >
                    {isZh ? "Get Started" : "Get Started"}
                  </Link>
                </div>

                <div className="mt-8 text-xs text-muted">
                  {/* ✅ 避免 hydration：不在服务端动态渲染年份 */}
                  <span suppressHydrationWarning>{t.footerLeft}</span>
                  <span className="mx-2">•</span>
                  {t.footerRight}
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-border/80 pt-8 text-sm text-muted">
              {isZh ? (
                <div>
                  <div className="font-semibold text-text">反假冒提醒</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>只相信本页链接；其它“同名”链接一律当作仿冒。</li>
                    <li>不要给任何人助记词/私钥；不要给“客服钱包”转账。</li>
                    <li>加入 TG 群后，先看置顶信息与公告。</li>
                  </ul>
                </div>
              ) : (
                <div>
                  <div className="font-semibold text-text">Anti-impersonation</div>
                  <ul className="mt-2 list-disc space-y-1 pl-5">
                    <li>Trust only the links on this page. Same-name links elsewhere are likely fake.</li>
                    <li>Never share seed phrases/private keys. Never send funds to “support wallets”.</li>
                    <li>In Telegram, always check pinned posts and announcements first.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
