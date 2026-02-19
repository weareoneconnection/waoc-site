// app/[locale]/docs/page.tsx
import Link from "next/link";
import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SoftBackdrop() {
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1.5 text-xs font-semibold text-neutral-700 shadow-soft">
      {children}
    </span>
  );
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="rounded-3xl border border-border bg-panel p-7 shadow-soft">
        <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
          <h2 className="text-xl font-semibold text-text">{title}</h2>
          {subtitle ? (
            <div className="text-xs font-semibold text-muted">{subtitle}</div>
          ) : null}
        </div>
        <div className="mt-5 space-y-4 text-[15px] leading-7 text-muted">
          {children}
        </div>
      </div>
    </section>
  );
}

function KpiRow({
  items,
}: {
  items: Array<{ k: string; v: string; hint?: string }>;
}) {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it) => (
        <div
          key={it.k}
          className="rounded-2xl border border-border bg-bg/60 p-4"
        >
          <div className="text-xs font-semibold text-muted">{it.k}</div>
          <div className="mt-2 text-base font-semibold text-text">{it.v}</div>
          {it.hint ? <div className="mt-1 text-xs text-muted">{it.hint}</div> : null}
        </div>
      ))}
    </div>
  );
}

function Callout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-bg/60 p-5">
      <div className="text-sm font-semibold text-text">{title}</div>
      <div className="mt-2 text-sm leading-6 text-muted">{children}</div>
    </div>
  );
}

function Anchor({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-text underline decoration-border/70 underline-offset-4 hover:opacity-80"
    >
      {children}
    </a>
  );
}

export default async function DocsCivilizationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = String(locale || "en").toLowerCase().startsWith("zh");
  const L = (path: string) => `/${locale}${path}`;

  const oneMission = (process.env.ONE_MISSION_BASE_URL || "https://one-mission.vercel.app").replace(
    /\/$/,
    ""
  );

  const toc = [
    { id: "overview", label: isZh ? "总览" : "Overview" },
    { id: "principles", label: isZh ? "文明层原则" : "Civilization Principles" },
    { id: "constitution", label: isZh ? "宪章（简版）" : "Constitution (Short)" },
    { id: "identity", label: isZh ? "身份与声誉" : "Identity & Reputation" },
    { id: "participation", label: isZh ? "参与路径" : "Participation Path" },
    { id: "systems", label: isZh ? "系统模块" : "Systems" },
    { id: "security", label: isZh ? "安全与核验" : "Security & Verify" },
    { id: "roadmap", label: isZh ? "路线图" : "Roadmap" },
  ];

  const t = {
    title: isZh ? "文明层文档" : "Civilization-Layer Docs",
    subtitle: isZh
      ? "不是“项目说明书”，而是一套可验证的协作文明：参与 → 声誉 → 身份 → 协作。"
      : "Not a typical project manual — a verifiable coordination civilization: Participation → Reputation → Identity → Coordination.",
    verify: isZh ? "去核验 →" : "Verify →",
    connect: isZh ? "入口 Connect →" : "Connect →",
    getStarted: isZh ? "快速开始 →" : "Get Started →",
    footerLeft: isZh ? "© 2026 WAOC. 保留所有权利。" : "© 2026 WAOC. All rights reserved.",
    footerRight: isZh ? "本站不构成任何投资建议。" : "This site does not constitute financial advice.",
  };

  return (
    <main className="relative min-h-screen bg-bg">
      <SoftBackdrop />

      <Container>
        <div className="relative py-12 md:py-14">
          {/* Header */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <Pill>{isZh ? "Civilization Layer" : "Civilization Layer"}</Pill>
                <Pill>{isZh ? "Verifiable" : "Verifiable"}</Pill>
                <Pill>{isZh ? "Coordination" : "Coordination"}</Pill>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-text md:text-5xl">
                {t.title}
              </h1>
              <p className="mt-4 text-base leading-7 text-muted md:text-lg">
                {t.subtitle}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 md:pt-1">
              <Link
                href={L("/verify")}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:bg-white/60 hover:shadow"
              >
                {t.verify}
              </Link>
              <Link
                href={L("/connect")}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:bg-white/60 hover:shadow"
              >
                {t.connect}
              </Link>
              <Link
                href={L("/get-started")}
                className="inline-flex items-center justify-center rounded-xl bg-text px-5 py-2.5 text-sm font-semibold text-bg shadow-soft hover:opacity-90"
              >
                {t.getStarted}
              </Link>
            </div>
          </div>

          {/* Layout: Sidebar TOC + Content */}
          <div className="mt-10 grid gap-6 lg:grid-cols-[260px_1fr]">
            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 lg:h-[calc(100vh-110px)]">
              {/* Mobile TOC */}
              <details className="lg:hidden">
                <summary className="list-none cursor-pointer rounded-2xl border border-border bg-panel px-4 py-3 text-sm font-semibold text-text shadow-soft hover:bg-white/60">
                  {isZh ? "目录" : "Table of contents"} <span className="ml-1">▾</span>
                </summary>
                <div className="mt-3 rounded-2xl border border-border bg-panel p-3 shadow-soft">
                  <nav className="grid gap-1">
                    {toc.map((it) => (
                      <a
                        key={it.id}
                        href={`#${it.id}`}
                        className="rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-white/60 hover:text-neutral-900"
                      >
                        {it.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </details>

              {/* Desktop TOC */}
              <div className="hidden lg:block rounded-3xl border border-border bg-panel p-5 shadow-soft">
                <div className="text-sm font-semibold text-text">
                  {isZh ? "目录" : "Contents"}
                </div>
                <nav className="mt-3 grid gap-1">
                  {toc.map((it) => (
                    <a
                      key={it.id}
                      href={`#${it.id}`}
                      className="rounded-xl px-3 py-2 text-sm font-semibold text-neutral-700 hover:bg-white/60 hover:text-neutral-900"
                    >
                      {it.label}
                    </a>
                  ))}
                </nav>

                <div className="mt-5 rounded-2xl border border-border bg-bg/60 p-4 text-xs text-muted">
                  {isZh ? (
                    <>
                      提示：先看 <span className="font-semibold text-text">安全与核验</span>，
                      再进入任务系统开始贡献。
                    </>
                  ) : (
                    <>
                      Tip: read <span className="font-semibold text-text">Security & Verify</span> first,
                      then enter missions to contribute.
                    </>
                  )}
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="space-y-6">
              <Section
                id="overview"
                title={isZh ? "总览" : "Overview"}
                subtitle={isZh ? "一句话定义" : "One-line definition"}
              >
                <p>
                  {isZh
                    ? "WAOC 是一个“文明层协作系统”：用可验证的信息与贡献记录，持续修复信任、组织协作、沉淀身份。"
                    : "WAOC is a civilization-layer coordination system: it restores trust, organizes collaboration, and accumulates identity through verifiable information and contribution proofs."}
                </p>

                <Callout title={isZh ? "核心公式" : "Core formula"}>
                  <span className="font-semibold text-text">
                    {isZh
                      ? "参与 → 声誉 → 身份 → 协作"
                      : "Participation → Reputation → Identity → Coordination"}
                  </span>
                </Callout>

                <KpiRow
                  items={[
                    {
                      k: isZh ? "你要做什么" : "What you do",
                      v: isZh ? "完成可验证任务" : "Complete verifiable missions",
                      hint: isZh ? "从 One Mission 开始" : "Start from One Mission",
                    },
                    {
                      k: isZh ? "你得到什么" : "What you get",
                      v: isZh ? "声誉与身份沉淀" : "Reputation & identity",
                      hint: isZh ? "长期复利" : "Long-term compounding",
                    },
                    {
                      k: isZh ? "系统追求什么" : "What the system seeks",
                      v: isZh ? "干净增长" : "Clean growth",
                      hint: isZh ? "反假冒、反噪音" : "Anti-scam, anti-noise",
                    },
                  ]}
                />
              </Section>

              <Section
                id="principles"
                title={isZh ? "文明层原则" : "Civilization Principles"}
                subtitle={isZh ? "不可妥协的底层约束" : "Non-negotiable constraints"}
              >
                <Callout title={isZh ? "原则 1：核验优先" : "Principle 1: Verify first"}>
                  {isZh
                    ? "任何参与前先核验官方链接与合约。默认不信“同名链接”。"
                    : "Before any action, verify official links and contracts. Same-name links are untrusted by default."}
                </Callout>
                <Callout title={isZh ? "原则 2：贡献可验证" : "Principle 2: Verifiable contribution"}>
                  {isZh
                    ? "贡献不是口号，而是可记录、可追溯的交付。"
                    : "Contribution is not a slogan — it is deliverable, recordable, and traceable."}
                </Callout>
                <Callout title={isZh ? "原则 3：身份长期复利" : "Principle 3: Identity compounds over time"}>
                  {isZh
                    ? "短期流量不是目标。身份与信任才是长期协作的“资本”。"
                    : "Short-term hype isn’t the goal. Identity and trust are the long-term capital for coordination."}
                </Callout>
              </Section>

              <Section
                id="constitution"
                title={isZh ? "宪章（简版）" : "Constitution (Short)"}
                subtitle={isZh ? "行为标准与社区边界" : "Behavior standards & boundaries"}
              >
                <p className="font-semibold text-text">
                  {isZh ? "我们鼓励：" : "We encourage:"}
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>{isZh ? "以核验为前提的参与与传播" : "Participation and sharing grounded in verification"}</li>
                  <li>{isZh ? "小步快跑的可交付贡献" : "Small, shippable contributions"}</li>
                  <li>{isZh ? "公开记录、复盘与协作" : "Public notes, post-mortems, and collaboration"}</li>
                </ul>

                <p className="mt-2 font-semibold text-text">
                  {isZh ? "我们拒绝：" : "We reject:"}
                </p>
                <ul className="list-disc space-y-1 pl-5">
                  <li>{isZh ? "仿冒、钓鱼、私信诈骗" : "Impersonation, phishing, DM scams"}</li>
                  <li>{isZh ? "纯噪音传播与空投猎手行为" : "Pure noise and airdrop-hunter behavior"}</li>
                  <li>{isZh ? "以短期价格为唯一目标的破坏协作" : "Coordination sabotage driven solely by short-term price"}</li>
                </ul>
              </Section>

              <Section
                id="identity"
                title={isZh ? "身份与声誉" : "Identity & Reputation"}
                subtitle={isZh ? "身份从哪里来？" : "Where identity comes from"}
              >
                <p>
                  {isZh
                    ? "身份不是“自称”，而是由贡献记录累积而来。任务完成越稳定、越可验证，声誉越强。"
                    : "Identity is not self-claimed — it is accumulated from contribution proofs. The more stable and verifiable your missions, the stronger your reputation."}
                </p>

                <Callout title={isZh ? "你会被系统如何记住" : "How the system remembers you"}>
                  {isZh ? (
                    <>
                      不是“你说了什么”，而是“你完成了什么”。从{" "}
                      <Anchor href={oneMission} >One Mission</Anchor> 开始建立你的贡献轨迹。
                    </>
                  ) : (
                    <>
                      Not by what you say — by what you ship. Start building your track record in{" "}
                      <Anchor href={oneMission}>One Mission</Anchor>.
                    </>
                  )}
                </Callout>
              </Section>

              <Section
                id="participation"
                title={isZh ? "参与路径" : "Participation Path"}
                subtitle={isZh ? "最短可复制路径" : "Shortest repeatable path"}
              >
                <ol className="list-decimal space-y-2 pl-5">
                  <li>
                    {isZh ? "先去核验中心确认官方链接与合约。" : "Verify official links and contracts in the Verification Center."}{" "}
                    <Link className="font-semibold text-text underline decoration-border/70 underline-offset-4 hover:opacity-80" href={L("/verify")}>
                      {isZh ? "打开 Verify" : "Open Verify"} →
                    </Link>
                  </li>
                  <li>
                    {isZh ? "从 Connect 进入各入口（任务系统 / Field / 社区）。" : "Use Connect as the hub to enter missions / field / community."}{" "}
                    <Link className="font-semibold text-text underline decoration-border/70 underline-offset-4 hover:opacity-80" href={L("/connect")}>
                      {isZh ? "打开 Connect" : "Open Connect"} →
                    </Link>
                  </li>
                  <li>
                    {isZh ? "完成一项任务并留下可验证记录（持续）。" : "Complete a mission and leave a verifiable record (repeat weekly)."}
                  </li>
                  <li>
                    {isZh ? "把结果带回社区：对齐、复盘、协作。" : "Bring results back to the community: align, review, coordinate."}
                  </li>
                </ol>
              </Section>

              <Section
                id="systems"
                title={isZh ? "系统模块" : "Systems"}
                subtitle={isZh ? "文明层的工具与入口" : "Tools & entry points"}
              >
                <KpiRow
                  items={[
                    {
                      k: "One Mission",
                      v: isZh ? "贡献任务与排行榜" : "Missions & leaderboards",
                      hint: isZh ? "参与即沉淀" : "Participation compounds",
                    },
                    {
                      k: "One Field",
                      v: isZh ? "Presence / Ritual" : "Presence / ritual",
                      hint: isZh ? "轻量参与入口" : "Lightweight entry",
                    },
                    {
                      k: isZh ? "官网 Verify/Connect" : "Verify/Connect",
                      v: isZh ? "官方入口与安全基座" : "Official hub & security base",
                      hint: isZh ? "反假冒" : "Anti-impersonation",
                    },
                  ]}
                />

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a
                    href={oneMission}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-text px-5 py-2.5 text-sm font-semibold text-bg shadow-soft hover:opacity-90"
                  >
                    {isZh ? "进入 One Mission →" : "Enter One Mission →"}
                  </a>
                  <Link
                    href={L("/connect")}
                    className="inline-flex items-center justify-center rounded-xl border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:bg-white/60 hover:shadow"
                  >
                    {isZh ? "打开 Connect →" : "Open Connect →"}
                  </Link>
                </div>
              </Section>

              <Section
                id="security"
                title={isZh ? "安全与核验" : "Security & Verify"}
                subtitle={isZh ? "默认不信任" : "Default to distrust"}
              >
                <Callout title={isZh ? "三条铁律" : "Three hard rules"}>
                  <ul className="mt-1 list-disc space-y-1 pl-5">
                    <li>{isZh ? "只信 Verify 页链接" : "Trust only links on Verify page"}</li>
                    <li>{isZh ? "不交出助记词 / 私钥" : "Never share seed phrases / private keys"}</li>
                    <li>{isZh ? "不向“客服钱包”转账" : "Never send funds to a “support wallet”"}</li>
                  </ul>
                </Callout>

                <p>
                  {isZh
                    ? "所有入口、合约、社群链接，以核验中心为唯一可信来源。"
                    : "All entry points, contracts, and community links are trusted only when they match the Verification Center."}
                </p>

                <Link
                  href={L("/verify")}
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:bg-white/60 hover:shadow"
                >
                  {isZh ? "前往核验中心 →" : "Go to Verification Center →"}
                </Link>
              </Section>

              <Section
                id="roadmap"
                title={isZh ? "路线图" : "Roadmap"}
                subtitle={isZh ? "从现在到长期" : "Now → long-term"}
              >
                <ul className="list-disc space-y-2 pl-5">
                  <li>
                    <span className="font-semibold text-text">
                      {isZh ? "阶段 1：" : "Phase 1: "}
                    </span>
                    {isZh ? "统一官方入口（Verify / Connect / Docs），并对齐 One Mission 数据。" : "Unify official entry (Verify/Connect/Docs) and align One Mission signals."}
                  </li>
                  <li>
                    <span className="font-semibold text-text">
                      {isZh ? "阶段 2：" : "Phase 2: "}
                    </span>
                    {isZh ? "贡献体系标准化：模板、任务分类、可复用行动手册。" : "Standardize contribution: templates, mission taxonomy, reusable playbooks."}
                  </li>
                  <li>
                    <span className="font-semibold text-text">
                      {isZh ? "阶段 3：" : "Phase 3: "}
                    </span>
                    {isZh ? "身份与证明逐步上链：更强的可验证声誉网络。" : "Move identity/proofs on-chain progressively: stronger verifiable reputation graph."}
                  </li>
                </ul>

                <Callout title={isZh ? "你现在能做的最重要一件事" : "The single most important thing you can do now"}>
                  {isZh
                    ? "完成一项真实任务，并把结果带回社区形成可复用模板。"
                    : "Complete one real mission, then bring the result back as a reusable template for others."}
                </Callout>
              </Section>

              {/* Footer */}
              <div className="border-t border-border/80 pt-8 text-xs text-muted">
                <span suppressHydrationWarning>{t.footerLeft}</span>
                <span className="mx-2">•</span>
                {t.footerRight}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
