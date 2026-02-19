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

function normalizeBaseUrl(u: string, fallback: string) {
  const s = String(u || "").trim().replace(/\/$/, "");
  if (!s) return fallback;
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  return `https://${s}`;
}

/** 页面内右上角 CTA（保留你要求的两个按钮） */
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1.5 text-xs font-semibold text-neutral-700 shadow-soft">
      {children}
    </span>
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

/** 入口卡：整卡可点 */
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

function ExternalCard({
  title,
  desc,
  href,
  cta,
  badge,
  note,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
  badge?: string;
  note?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
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

      <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-semibold text-bg shadow-soft transition group-hover:opacity-95">
        {cta}
        <span aria-hidden className="transition group-hover:translate-x-0.5">
          →
        </span>
      </div>
    </a>
  );
}

export default async function GetStartedPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = String(locale || "en").toLowerCase().startsWith("zh");
  const L = (path: string) => `/${locale}${path}`;

  // External systems (safe normalize)
  const oneMissionBase = normalizeBaseUrl(
    process.env.ONE_MISSION_BASE_URL || "https://one-mission.vercel.app",
    "https://one-mission.vercel.app"
  );
  const oneFieldBase = normalizeBaseUrl(
    process.env.ONE_FIELD_BASE_URL || "https://one-field.vercel.app",
    "https://one-field.vercel.app"
  );
  const oneMissionUniversalBase = normalizeBaseUrl(
    process.env.ONE_MISSION_UNIVERSAL_BASE_URL || "https://one-mission-universal.vercel.app",
    "https://one-mission-universal.vercel.app"
  );

  const copy = {
    title: isZh ? "开始：进入文明层协作" : "Get Started: Enter the Civilization Layer",
    sub: isZh
      ? "你不需要一次搞懂所有东西。按路径行动：先核验，再学习，再参与。参与会沉淀为声誉，声誉会沉淀为身份。"
      : "You don’t need to understand everything at once. Follow the path: verify, learn, participate. Participation becomes reputation. Reputation becomes identity.",

    aVerify: isZh ? "前往核验" : "Go to Verify",
    aDocs: isZh ? "阅读文档" : "Read Docs",

    pathKicker: isZh ? "推荐路径" : "Recommended path",
    path: isZh ? "核验 → 学习 → 参与 → 声誉 → 身份" : "Verify → Learn → Participate → Reputation → Identity",

    quickTitle: isZh ? "选择你的第一条路径" : "Pick your first path",
    quickSub: isZh
      ? "不同的人从不同入口进入，但都会在 One Mission 汇合（可验证贡献）。"
      : "Different people start differently — but everyone converges in One Mission (verifiable contribution).",

    track1t: isZh ? "建设者（Builder）" : "Builder track",
    track1d: isZh
      ? "你会写代码、做产品、做设计或做增长。选择一个可交付任务，沉淀你的身份。"
      : "You ship code, product, design, or growth. Pick a shippable task and build identity over time.",
    track1cta: isZh ? "进入 Builders" : "Enter Builders",
    track1note: isZh ? "适合：开发 / 设计 / 运营 / BD" : "Best for: dev / design / ops / BD",
    track1badge: isZh ? "Core" : "Core",

    track2t: isZh ? "贡献者（Contributor）" : "Contributor track",
    track2d: isZh
      ? "你愿意完成任务、传播、协作、复盘。你的稳定参与就是文明层的燃料。"
      : "You complete missions, coordinate, share, and review. Consistency is the fuel of civilization.",
    track2cta: isZh ? "进入 Community" : "Enter Community",
    track2note: isZh ? "适合：社区参与 / 传播 / 组织活动" : "Best for: community / outreach / events",
    track2badge: isZh ? "Open" : "Open",

    track3t: isZh ? "练习者（Practice）" : "Practice track",
    track3d: isZh
      ? "文明层不是只有代码。练习与觉察让长期对齐成为可能。"
      : "Civilization isn’t only code. Practice and awareness make long-term alignment possible.",
    track3cta: isZh ? "进入 Practice" : "Enter Practice",
    track3note: isZh ? "适合：日常练习 / 冥想 / 对齐" : "Best for: daily practice / mindfulness",
    track3badge: isZh ? "Mind" : "Mind",

    modulesTitle: isZh ? "核心模块（你会用到的 4 个）" : "Core modules (4 you’ll use)",
    c1t: "Genesis NFT",
    c1d: isZh
      ? "起源与身份层：777 设定、价值、Mint 与持有者权益。"
      : "Origin & identity layer: 777, value, minting, and holder rights.",
    c1cta: isZh ? "打开 Genesis 页面" : "Open Genesis page",
    c1note: isZh ? "适合：首次了解与收藏" : "Best for: first-time overview & collectors",
    c1badge: isZh ? "Live" : "Live",

    c2t: "Whitepaper",
    c2d: isZh
      ? "愿景与路线图：最清晰的一版 WAOC 正在构建什么。"
      : "Vision & roadmap: the clearest version of what WAOC is building.",
    c2cta: isZh ? "阅读 Whitepaper" : "Read whitepaper",
    c2note: isZh ? "适合：理解叙事与长期目标" : "Best for: narrative & long-term goals",
    c2badge: isZh ? "Core" : "Core",

    c3t: isZh ? "WAOC Token" : "WAOC Token",
    c3d: isZh
      ? "链上参与与协作：合约、流动性、分配与注意事项。"
      : "On-chain participation: contracts, liquidity, allocation, and notices.",
    c3cta: isZh ? "打开 Token 页面" : "Open token page",
    c3note: isZh ? "适合：交易前必读" : "Best for: read before trading",
    c3badge: isZh ? "Info" : "Info",

    c4t: isZh ? "Practice & Mindfulness" : "Practice & Mindfulness",
    c4d: isZh
      ? "反思与觉察工具：冥想应用与长期对齐。"
      : "Tools for reflection: practice and long-term alignment.",
    c4cta: isZh ? "打开 Practice 页面" : "Open practice page",
    c4note: isZh ? "适合：每天 5 分钟" : "Best for: daily 5-minute practice",
    c4badge: isZh ? "Planned" : "Planned",

    systemsTitle: isZh ? "参与入口（可验证行动）" : "Participation entry points (verifiable action)",
    systemsSub: isZh
      ? "参与不是口号：从任务与 Presence 开始，结果会回到社区形成协作。"
      : "Participation is not a slogan: start with missions and presence, then bring results back to the community.",

    omTitle: "One Mission",
    omDesc: isZh ? "完成任务 → 积分/声誉 → 身份沉淀（全量排行榜对齐）。" : "Complete missions → points/reputation → identity (aligned all-time board).",
    omCta: isZh ? "进入 One Mission（外链）" : "Enter One Mission (external)",
    omNote: isZh ? "建议：只从官网入口跳转；先 Verify。" : "Tip: jump from official site only; verify first.",
    omBadge: isZh ? "Live" : "Live",

    ofTitle: "One Field",
    ofDesc: isZh ? "Presence / Ritual：轻量参与入口（无压力、无排名）。" : "Presence / ritual: lightweight entry (no pressure, no ranking).",
    ofCta: isZh ? "进入 One Field（外链）" : "Enter One Field (external)",
    ofNote: isZh ? "适合：每天打卡式 presence" : "Best for: daily presence ritual",
    ofBadge: isZh ? "Live" : "Live",

    omuTitle: "One Mission Universal",
    omuDesc: isZh ? "让其它项目也能接入 One Mission 的通用系统（生态扩展）。" : "A universal system for other projects to plug into One Mission (ecosystem expansion).",
    omuCta: isZh ? "打开 Universal（外链）" : "Open Universal (external)",
    omuNote: isZh ? "适合：合作项目/BD/生态对接" : "Best for: partnerships / BD / integrations",
    omuBadge: isZh ? "Beta" : "Beta",

    safeTitle: isZh ? "安全第一（文明层底线）" : "Security first (civilization baseline)",
    safeDesc: isZh
      ? "任何操作前先核验。WAOC 不会私信索要助记词/私钥，也不会让你转账到“客服钱包”。"
      : "Verify before any action. WAOC will never DM you for seed phrases/private keys or ask you to send funds to a “support wallet”.",
    safeBtn: isZh ? "打开验证中心" : "Open Verify Center",

    nextTitle: isZh ? "你现在要做的 3 件事" : "Do these 3 things now",
    nextSub: isZh
      ? "一周内完成一次真实贡献，你就进入了文明层。"
      : "Complete one real contribution within a week — you’ve entered the civilization layer.",
    s1: isZh ? "1) Verify（核验）" : "1) Verify",
    s1d: isZh ? "把官方链接与合约当作唯一可信源。" : "Treat official links & contracts as the only source of truth.",
    s2: isZh ? "2) Run a Mission（做任务）" : "2) Run a mission",
    s2d: isZh ? "完成一个可验证任务：写、做、交付。" : "Complete a verifiable mission: ship something.",
    s3: isZh ? "3) Bring it back（带回社区）" : "3) Bring it back",
    s3d: isZh ? "把结果带回社区：形成模板、复盘与协作。" : "Bring results back: templates, review, coordination.",

    faqTitle: isZh ? "常见问题" : "FAQ",
    q1: isZh ? "这是官方入口吗？" : "Is this an official entry?",
    a1: isZh
      ? "是的。这一页用于把新用户带入文明层路径，并引导到 Verify / Docs / One Mission。"
      : "Yes. This page guides newcomers into the civilization-layer path and routes to Verify / Docs / One Mission.",
    q2: isZh ? "我应该从哪里开始？" : "Where should I start?",
    a2: isZh
      ? "先 Verify，再读 Whitepaper 或 Genesis，然后去 One Mission 完成第一个任务。"
      : "Verify first, read Whitepaper or Genesis, then complete your first mission in One Mission.",
    q3: isZh ? "为什么强调可验证？" : "Why emphasize verifiability?",
    a3: isZh
      ? "因为可验证才会形成长期信任；长期信任才会形成文明层协作。"
      : "Because verifiability creates durable trust — and durable trust enables civilization-layer coordination.",
  };

  return (
    <div className="min-h-screen bg-bg">
      <div className="relative">
        <SoftBackdrop />

        <Container>
          <div className="relative py-12 md:py-16">
            {/* 右上角按钮（保留） */}
            <div className="flex justify-end">
              <CornerActions locale={locale} aVerify={copy.aVerify} aDocs={copy.aDocs} />
            </div>

            {/* Hero */}
            <div className="mt-10 max-w-4xl">
              <div className="flex flex-wrap items-center gap-2">
                <Pill>WAOC</Pill>
                <Pill>{isZh ? "Civilization Layer" : "Civilization Layer"}</Pill>
                <Pill>{isZh ? "Verifiable Coordination" : "Verifiable Coordination"}</Pill>
              </div>

              <h1 className="mt-6 text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-text md:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-5 text-base leading-7 text-muted md:text-lg">
                {copy.sub}
              </p>

              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-panel/70 px-4 py-2 text-sm font-semibold text-text shadow-soft backdrop-blur">
                <span className="text-muted">{copy.pathKicker}:</span>
                <span>{copy.path}</span>
              </div>

              {/* Primary CTA row */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={L("/verify")}
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-panel px-6 py-3 text-sm font-semibold text-text shadow-soft hover:bg-white/60 hover:shadow"
                >
                  {isZh ? "先去核验 →" : "Verify first →"}
                </Link>

                <a
                  href={`${oneMissionBase}/`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-text px-6 py-3 text-sm font-semibold text-bg shadow-soft hover:opacity-90"
                >
                  {isZh ? "Run a Mission（外链）→" : "Run a Mission (external) →"}
                </a>

                <Link
                  href={L("/connect")}
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-panel px-6 py-3 text-sm font-semibold text-text shadow-soft hover:bg-white/60 hover:shadow"
                >
                  {isZh ? "打开 Connect →" : "Open Connect →"}
                </Link>
              </div>
            </div>

            {/* Tracks */}
            <div className="mt-12">
              <SectionTitle title={copy.quickTitle} subtitle={copy.quickSub} />
              <div className="grid gap-6 md:grid-cols-3">
                <EntryCard
                  title={copy.track1t}
                  desc={copy.track1d}
                  href={L("/builders")}
                  cta={copy.track1cta}
                  note={copy.track1note}
                  badge={copy.track1badge}
                />
                <EntryCard
                  title={copy.track2t}
                  desc={copy.track2d}
                  href={L("/community")}
                  cta={copy.track2cta}
                  note={copy.track2note}
                  badge={copy.track2badge}
                />
                <EntryCard
                  title={copy.track3t}
                  desc={copy.track3d}
                  href={L("/practice")}
                  cta={copy.track3cta}
                  note={copy.track3note}
                  badge={copy.track3badge}
                />
              </div>
            </div>

            {/* Core modules */}
            <div className="mt-12">
              <SectionTitle title={copy.modulesTitle} />
              <div className="grid gap-6 md:grid-cols-2">
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
                  href={L("/get-started/whitepaper")}
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
                  href={L("/practice")}
                  cta={copy.c4cta}
                  note={copy.c4note}
                  badge={copy.c4badge}
                />
              </div>
            </div>

            {/* Participation entry points */}
            <div className="mt-12">
              <SectionTitle title={copy.systemsTitle} subtitle={copy.systemsSub} />
              <div className="grid gap-6 md:grid-cols-3">
                <ExternalCard
                  title={copy.omTitle}
                  desc={copy.omDesc}
                  href={`${oneMissionBase}/`}
                  cta={copy.omCta}
                  note={copy.omNote}
                  badge={copy.omBadge}
                />
                <ExternalCard
                  title={copy.ofTitle}
                  desc={copy.ofDesc}
                  href={`${oneFieldBase}/`}
                  cta={copy.ofCta}
                  note={copy.ofNote}
                  badge={copy.ofBadge}
                />
                <ExternalCard
                  title={copy.omuTitle}
                  desc={copy.omuDesc}
                  href={`${oneMissionUniversalBase}/`}
                  cta={copy.omuCta}
                  note={copy.omuNote}
                  badge={copy.omuBadge}
                />
              </div>

              <div className="mt-4 rounded-2xl border border-border bg-panel p-6 shadow-soft">
                <div className="text-sm font-semibold text-text">
                  {isZh ? "外链提示" : "External link note"}
                </div>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {isZh
                    ? "所有外链请优先从本官网跳转，并先完成 Verify。遇到同名链接或私信引导，一律当作仿冒。"
                    : "Prefer jumping from this official site, and verify first. Same-name links or DM guidance should be treated as impersonation."}
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="mt-12 rounded-2xl border border-border bg-panel p-7 shadow-soft">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-base font-semibold text-text">{copy.safeTitle}</div>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">{copy.safeDesc}</p>
                </div>
                <Link
                  href={L("/verify")}
                  className="inline-flex items-center justify-center rounded-full border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:bg-white/60"
                >
                  {copy.safeBtn}
                </Link>
              </div>
            </div>

            {/* Next steps */}
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
                  <div className="mt-4">
                    <a
                      href={`${oneMissionBase}/`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-xl bg-text px-5 py-2.5 text-sm font-semibold text-bg shadow-soft hover:opacity-90"
                    >
                      {isZh ? "立刻进入 One Mission →" : "Enter One Mission →"}
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-panel p-6 shadow-soft">
                  <div className="text-sm font-semibold text-text">{copy.s3}</div>
                  <p className="mt-2 text-sm leading-6 text-muted">{copy.s3d}</p>
                  <div className="mt-4">
                    <Link
                      href={L("/community")}
                      className="inline-flex items-center justify-center rounded-xl border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:bg-white/60 hover:shadow"
                    >
                      {isZh ? "打开 Community →" : "Open Community →"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ */}
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

            {/* Footer */}
            <div className="mt-12 border-t border-border/80 pt-8 text-xs text-muted">
              <span suppressHydrationWarning>
                {isZh ? "© 2026 WAOC. 保留所有权利。" : "© 2026 WAOC. All rights reserved."}
              </span>
              <span className="mx-2">•</span>
              {isZh ? "本站不构成任何投资建议。" : "This site does not constitute financial advice."}
            </div>

            <div className="h-10" />
          </div>
        </Container>
      </div>
    </div>
  );
}
