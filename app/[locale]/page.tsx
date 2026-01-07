// app/[locale]/page.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

/** 微弱的“bitcoin.org 同类气质”底纹：奶白 + 极浅线条 */
function SoftNetworkBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-40 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(186,127,73,.14), transparent 55%), radial-gradient(circle at 70% 60%, rgba(236,210,170,.20), transparent 52%)",
        }}
      />
      <div
        className="absolute bottom-[-220px] left-1/2 h-[520px] w-[1100px] -translate-x-1/2 opacity-60"
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

function TopBar({ locale }: { locale: string }) {
  const isZh = locale === "zh";

  const nav = [
    { label: isZh ? "核验" : "Verify", href: `/${locale}/verify` },
    { label: isZh ? "文档" : "Docs", href: `/${locale}/docs` },
    { label: isZh ? "社区" : "Community", href: `/${locale}/community` },
    { label: isZh ? "连接" : "Connect", href: `/${locale}/connect` },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/80 bg-bg/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <Link href={`/${locale}`} className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-xl border border-border bg-panel shadow-soft">
              <Image
                src="/logo/waoc-logo.svg"
                alt="WAOC Logo"
                fill
                priority
                className="object-contain p-1"
              />
            </div>

            <div className="leading-tight">
              <div className="text-[11px] tracking-[0.28em] text-muted">
                WAOC
              </div>
              <div className="text-[15px] font-semibold text-text">
                We Are One Connection
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "group relative inline-flex items-center rounded-full px-4 py-2 text-[15px] font-medium",
                  "text-neutral-700 hover:text-neutral-900",
                  "transition-all duration-200",
                  "hover:bg-white/60 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(182,129,78,0.45)]",
                ].join(" ")}
              >
                <span className="relative">
                  {item.label}
                  <span
                    className={[
                      "pointer-events-none absolute -bottom-2 left-0 h-[2px] w-0",
                      "bg-[linear-gradient(90deg,rgba(182,129,78,0.0),rgba(182,129,78,0.85),rgba(182,129,78,0.0))]",
                      "transition-all duration-200 group-hover:w-full",
                    ].join(" ")}
                  />
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="flex items-center gap-3">
            {/* Language toggle */}
            <div className="hidden sm:inline-flex items-center rounded-full border border-border bg-panel p-1 shadow-soft">
              <Link
                href="/en"
                className={[
                  "rounded-full px-3 py-1.5 text-sm font-semibold transition",
                  locale === "en"
                    ? "bg-text text-bg shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
                    : "text-muted hover:text-text",
                ].join(" ")}
              >
                EN
              </Link>
              <Link
                href="/zh"
                className={[
                  "rounded-full px-3 py-1.5 text-sm font-semibold transition",
                  locale === "zh"
                    ? "bg-text text-bg shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
                    : "text-muted hover:text-text",
                ].join(" ")}
              >
                中文
              </Link>
            </div>

            {/* Mobile menu: simple dropdown */}
            <details className="relative md:hidden">
              <summary className="list-none cursor-pointer rounded-full border border-border bg-panel px-4 py-2 text-sm font-semibold text-text shadow-soft hover:shadow">
                Menu
              </summary>
              <div className="absolute right-0 mt-2 w-44 rounded-2xl border border-border bg-bg/90 p-2 shadow-soft backdrop-blur">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-white/60 hover:text-neutral-900"
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="mt-2 border-t border-border/70 pt-2">
                  <Link
                    href="/en"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-white/60"
                  >
                    EN
                  </Link>
                  <Link
                    href="/zh"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold hover:bg-white/60"
                  >
                    中文
                  </Link>
                </div>
              </div>
            </details>
          </div>
        </div>
      </Container>
    </header>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-text">{title}</h2>
      {subtitle ? <p className="mt-2 text-sm text-muted">{subtitle}</p> : null}
    </div>
  );
}

/** ✅ 升级版 Card：整卡可点 + 更精致 hover + 右上角徽章块 */
function Card({
  title,
  desc,
  href,
  learnMore,
}: {
  title: string;
  desc: string;
  href: string;
  learnMore: string;
}) {
  return (
    <Link
      href={href}
      className={[
        "group block rounded-2xl border border-border bg-panel p-6 shadow-soft",
        "transition-all duration-200",
        "hover:bg-white/60 hover:shadow-[0_16px_46px_rgba(0,0,0,0.08)]",
        "hover:-translate-y-0.5",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(182,129,78,0.45)]",
      ].join(" ")}
    >
     <div className="text-base font-semibold text-text">{title}</div>


      <p className="mt-3 text-sm leading-6 text-muted">{desc}</p>

      <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-text">
        {learnMore}
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </Link>
  );
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";
  const L = (path: string) => `/${locale}${path}`;

  const copy = {
    heroTitle: isZh
      ? "WAOC 是一项长期努力，用透明可验证的链上系统，重建信任、协作与人与人的连接。"
      : "WAOC is a long-term effort to restore trust, coordination, and human connection.",
    heroSub: isZh
      ? "通过透明且可验证的链上系统。"
      : "Through transparent and verifiable on-chain systems.",

    cta1: isZh ? "开始了解 WAOC" : "Get started with WAOC",
    cta2: isZh ? "核验官方链接" : "Verify official links",
    cta3: isZh ? "探索生态体系" : "Explore the ecosystem",

    quickTitle: isZh ? "快速了解" : "Get a quick overview",
    learnMore: isZh ? "了解更多" : "Learn more",

    pTitle: isZh ? "参与者" : "Participants",
    pDesc: isZh
      ? "了解个人如何参与并为 WAOC 网络贡献力量。"
      : "Learn how individuals can participate in and contribute to the WAOC network.",

    bTitle: isZh ? "建设者" : "Builders",
    bDesc: isZh
      ? "了解开发者与协作者如何基于 WAOC 的开放基础设施进行构建。"
      : "Explore how developers and collaborators can build with WAOC’s open infrastructure.",

    cTitle: isZh ? "社区" : "Community",
    cDesc: isZh
      ? "了解 WAOC 中的集体治理与协作如何形成与运转。"
      : "Discover how collective governance and coordination take shape within WAOC.",

    whyTitle: isZh ? "为什么需要 WAOC" : "Why WAOC exists",
    whyP1: isZh
      ? "WAOC 并不由某一种资产或某个应用来定义。它代表一种长期努力：在日益碎片化的世界里，修复信任、协作与连接。"
      : "WAOC is not defined by a single asset or application. It represents a long-term effort to restore trust, coordination, and connection in an increasingly fragmented world.",
    whyP2: isZh
      ? "以透明可验证的链上系统为基础，WAOC 试图让技术与人类价值对齐——让合作、相互理解与长期共同责任成为可能。"
      : "By using transparent and verifiable on-chain systems as a foundation, WAOC seeks to align technology with human values — enabling cooperation, mutual understanding, and a shared sense of responsibility over time.",

    ecoTitle: isZh ? "WAOC 生态体系" : "The WAOC ecosystem",
    nTitle: isZh ? "WAOC 网络" : "WAOC Network",
    nDesc: isZh
      ? "用于支撑信任、协作与集体参与的公共链上层。"
      : "A public on-chain layer designed to support trust, coordination, and collective participation.",
    gTitle: isZh ? "起源与身份" : "Genesis & Identity",
    gDesc: isZh
      ? "象征性的起源层：代表参与、归属与延续。"
      : "A historical and symbolic layer representing origin, participation, and continuity.",
    mTitle: isZh ? "练习与觉察" : "Practice & Mindfulness",
    mDesc: isZh
      ? "支持反思、觉察与长期对齐的工具与实践。"
      : "Tools and practices that support reflection, awareness, and long-term alignment.",

    verifyTitle: isZh ? "参与前请先核验" : "Verify before you participate",
    verifyDesc: isZh
      ? "采取任何操作前，请务必核验官方合约与链接。\nWAOC 不会私信你，也不会索要助记词或私钥。"
      : "Always verify official contracts and links before taking action.\nWAOC will never contact you privately or ask for seed phrases or private keys.",
    verifyBtn: isZh ? "前往验证中心" : "Go to Verification Center",
    docsBtn: isZh ? "阅读文档 →" : "Read Documentation →",

    footerL: isZh ? "© 2026 WAOC. 保留所有权利。" : "© 2026 WAOC. All rights reserved.",
    footerR: isZh ? "本站内容不构成任何投资建议。" : "This site does not constitute financial advice.",
  };

  return (
    <div className="min-h-screen bg-bg">
      <TopBar locale={locale} />

      {/* HERO */}
      <div className="relative">
        <SoftNetworkBackdrop />
        <Container>
          <div className="relative py-16 md:py-24">
            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-[-0.02em] md:text-6xl">
              {copy.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
              {copy.heroSub}
            </p>

            {/* ✅ Hero CTA 升级：官方入口模块 + Explore 指向 #ecosystem */}
            <div className="mt-10 rounded-2xl border border-border bg-panel/70 p-4 shadow-soft backdrop-blur">
              <div className="px-2 pb-3 text-xs font-medium text-muted">
                {isZh ? "推荐路径：" : "Recommended path:"}{" "}
                <span className="text-text/80">
                  {isZh ? "核验 → 了解 → 参与" : "Verify → Learn → Participate"}
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                <Link
                  href={L("/get-started")}
                  className="group inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-bg shadow-soft transition hover:opacity-95"
                >
                  {copy.cta1}
                  <span className="ml-2 inline-block transition group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>

                <Link
                  href={L("/verify")}
                  className="group inline-flex items-center justify-center rounded-xl border border-border bg-panel px-6 py-3 text-sm font-semibold text-text shadow-soft transition hover:bg-white/60 hover:shadow"
                >
                  {copy.cta2}
                  <span className="ml-2 inline-block transition group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>

                <Link
                  href={`${L("")}#ecosystem`}
                  className="group inline-flex items-center justify-center rounded-xl border border-border bg-panel px-6 py-3 text-sm font-semibold text-text shadow-soft transition hover:bg-white/60 hover:shadow"
                >
                  {copy.cta3}
                  <span className="ml-2 inline-block transition group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>

              <div className="mt-3 px-2 text-xs text-muted">
                {isZh
                  ? "WAOC 不会私信索取助记词或私钥。请以 Verify 为准。"
                  : "WAOC will never DM you for seed phrases or private keys. Treat Verify as source of truth."}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* QUICK OVERVIEW */}
      <div className="py-14 md:py-18">
        <Container>
          <SectionTitle title={copy.quickTitle} />
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              title={copy.pTitle}
              desc={copy.pDesc}
              href={L("/participants")}
              learnMore={copy.learnMore}
            />
            <Card
              title={copy.bTitle}
              desc={copy.bDesc}
              href={L("/builders")}
              learnMore={copy.learnMore}
            />
            <Card
              title={copy.cTitle}
              desc={copy.cDesc}
              href={L("/community")}
              learnMore={copy.learnMore}
            />
          </div>
        </Container>
      </div>

      {/* WHY */}
      <div className="py-14">
        <Container>
          <SectionTitle title={copy.whyTitle} />
          <div className="max-w-4xl space-y-5 text-[15px] leading-7 text-muted">
            <p>{copy.whyP1}</p>
            <p>{copy.whyP2}</p>
          </div>
        </Container>
      </div>

      {/* ECOSYSTEM */}
      <div id="ecosystem" className="py-14 scroll-mt-24">
        <Container>
          <SectionTitle title={copy.ecoTitle} />
          <div className="grid gap-6 md:grid-cols-3">
            <Card
              title={copy.nTitle}
              desc={copy.nDesc}
              href={L("/network")}
              learnMore={copy.learnMore}
            />
            <Card
              title={copy.gTitle}
              desc={copy.gDesc}
              href={L("/genesis")}
              learnMore={copy.learnMore}
            />
            <Card
              title={copy.mTitle}
              desc={copy.mDesc}
              href={L("/practice")}
              learnMore={copy.learnMore}
            />
          </div>
        </Container>
      </div>

      {/* VERIFY STRIP */}
      <div className="py-14">
        <Container>
          <div className="flex flex-col gap-4 rounded-2xl border border-border bg-panel p-8 shadow-soft md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-base font-semibold">{copy.verifyTitle}</div>
              <p className="mt-2 max-w-2xl whitespace-pre-line text-sm leading-6 text-muted">
                {copy.verifyDesc}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={L("/verify")}
                className="inline-flex justify-center rounded-md border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:shadow"
              >
                {copy.verifyBtn}
              </Link>
              <Link
                href={L("/docs")}
                className="inline-flex justify-center rounded-md bg-text px-5 py-2.5 text-sm font-semibold text-bg shadow-soft hover:opacity-90"
              >
                {copy.docsBtn}
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* FOOTER */}
      <div className="border-t border-border/80 py-10">
        <Container>
          <div className="flex flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
            <div>{copy.footerL}</div>
            <div>{copy.footerR}</div>
          </div>
        </Container>
      </div>
    </div>
  );
}
