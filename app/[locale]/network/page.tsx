import React from "react";
import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/60 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur">
      {children}
    </span>
  );
}

function Card({
  title,
  desc,
  children,
}: {
  title: string;
  desc?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
      <div>
        <h3 className="text-lg font-semibold text-black/85">{title}</h3>
        {desc ? <p className="mt-1 text-sm text-black/55">{desc}</p> : null}
      </div>
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}

function SoftBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#f7f6f2]" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-amber-200/25 blur-3xl" />
      <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-orange-200/20 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
    </div>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white/50 px-4 py-3">
      <div className="text-xs text-black/55">{k}</div>
      <div className="mt-1 text-base font-semibold text-black/85">{v}</div>
    </div>
  );
}

type Params = { locale: string };

export default async function NetworkPage({
  params,
}: {
  params: Promise<Params>;
}) {
  // ✅ Next 15: params 是 Promise，需要 await
  const { locale } = await params;

  // ✅ 默认英文：只要不是 zh，就走 en
  const lang = (locale || "en").toLowerCase();
  const isZH = lang.startsWith("zh");

  const t = isZH
    ? {
        badge1: "WAOC Network",
        badge2: "People • Builders • Nodes",
        badge3: "On-chain Identity（即将上线）",
        intro:
          "这里是 WAOC 的“连接地图”。未来你会在这里看到：社区成员、贡献者、合作节点，以及每个人在生态中的角色与贡献（透明、可验证、可扩展）。",
        btnParticipants: "View Participants",
        btnBuilders: "View Builders",
        btnJoin: "Join & Connect",
        status: "Status",
        visibility: "Visibility",
        identity: "Identity Layer",
        verification: "Verification",
        beta: "Beta",
        public: "Public",
        planned: "Planned",
        onchainSoon: "On-chain（Soon）",
        roadmapTitle: "Roadmap note",
        roadmapText:
          "下一步会把 Network 做成可视化地图 + 可过滤列表（Participants / Builders / Partners），并接入 Solana 数据与验证中心。",
        pTitle: "Participants",
        pDesc: "社区成员入口：加入、身份、贡献、荣誉与徽章",
        p1: "Join guide（钱包/社群/认证步骤）",
        p2: "Roles：Contributor / Ambassador / Holder",
        p3: "Badge System（后续接 NFT / SBT）",
        openParticipants: "Open Participants →",
        bTitle: "Builders",
        bDesc: "建设者入口：项目贡献、协作任务、对接资源",
        b1: "Bounties / Tasks（后续上线任务板）",
        b2: "Verify work（贡献证明可追溯）",
        b3: "Partner onboarding（合作伙伴流程）",
        openBuilders: "Open Builders →",
        nTitle: "Nodes & Partners",
        nDesc: "节点与合作：组织、社区、品牌与生态连接",
        n1: "Official links（防伪 & 统一入口）",
        n2: "Verified partners（合作方展示）",
        n3: "Network map（可视化关系图）",
        openVerify: "Open Verify Center →",
        footerTitle: "Build the WAOC Network",
        footerText: "现在先用“清晰页面结构 + 官方入口”站稳，后续再接地图与链上验证。",
        getStarted: "Get Started",
        readDocs: "Read Docs",
        tip: "Tip: 这个页面的 Stats / 列表 / Map 后续都能无痛替换成真实数据组件。",
      }
    : {
        badge1: "WAOC Network",
        badge2: "People • Builders • Nodes",
        badge3: "On-chain Identity (Soon)",
        intro:
          "This is WAOC’s connection map. Here you’ll soon see community members, contributors, partner nodes, and each role’s verifiable impact—transparent, auditable, and expandable.",
        btnParticipants: "View Participants",
        btnBuilders: "View Builders",
        btnJoin: "Join & Connect",
        status: "Status",
        visibility: "Visibility",
        identity: "Identity Layer",
        verification: "Verification",
        beta: "Beta",
        public: "Public",
        planned: "Planned",
        onchainSoon: "On-chain (Soon)",
        roadmapTitle: "Roadmap note",
        roadmapText:
          "Next we’ll ship a visual network map + filterable directory (Participants / Builders / Partners), then connect Solana data and the verification center.",
        pTitle: "Participants",
        pDesc: "Member entry: join, identity, contributions, honors & badges",
        p1: "Join guide (wallet / community / verification steps)",
        p2: "Roles: Contributor / Ambassador / Holder",
        p3: "Badge system (NFT / SBT later)",
        openParticipants: "Open Participants →",
        bTitle: "Builders",
        bDesc: "Builder entry: contributions, tasks, and resource matching",
        b1: "Bounties / tasks (task board later)",
        b2: "Verify work (traceable proof of contribution)",
        b3: "Partner onboarding (collaboration flow)",
        openBuilders: "Open Builders →",
        nTitle: "Nodes & Partners",
        nDesc: "Organizations, communities, brands, and ecosystem connections",
        n1: "Official links (anti-scam & unified entry)",
        n2: "Verified partners (showcase)",
        n3: "Network map (relationship visualization)",
        openVerify: "Open Verify Center →",
        footerTitle: "Build the WAOC Network",
        footerText:
          "We start with clear structure + official entry points, then add the map and on-chain verification.",
        getStarted: "Get Started",
        readDocs: "Read Docs",
        tip: "Tip: Stats / lists / map can be swapped to real data components later with minimal changes.",
      };

  // ✅ locale-aware links
  const base = `/${isZH ? "zh" : "en"}`;

  return (
    <main className="relative min-h-[calc(100vh-80px)]">
      <SoftBackdrop />

      <Container>
        <div className="relative py-14">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <div className="flex flex-wrap gap-2">
                <Badge>{t.badge1}</Badge>
                <Badge>{t.badge2}</Badge>
                <Badge>{t.badge3}</Badge>
              </div>

              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
                Network
              </h1>

              <p className="mt-4 text-base leading-relaxed text-black/60 md:text-lg">
                {t.intro}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={`${base}/participants`}
                  className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  {t.btnParticipants}
                </Link>
                <Link
                  href={`${base}/builders`}
                  className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  {t.btnBuilders}
                </Link>
                <Link
                  href={`${base}/connect`}
                  className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  {t.btnJoin}
                </Link>
              </div>
            </div>

            <div className="w-full max-w-xl">
              <div className="grid grid-cols-2 gap-3">
                <Stat k={t.status} v={t.beta} />
                <Stat k={t.visibility} v={t.public} />
                <Stat k={t.identity} v={t.planned} />
                <Stat k={t.verification} v={t.onchainSoon} />
              </div>

              <div className="mt-4 rounded-2xl border border-black/10 bg-white/55 p-4 text-sm text-black/60 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
                <div className="font-medium text-black/75">{t.roadmapTitle}</div>
                <div className="mt-1">{t.roadmapText}</div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Card title={t.pTitle} desc={t.pDesc}>
              <ul className="space-y-2 text-sm text-black/65">
                <li>• {t.p1}</li>
                <li>• {t.p2}</li>
                <li>• {t.p3}</li>
              </ul>
              <div className="mt-5">
                <Link
                  href={`${base}/participants`}
                  className="inline-flex items-center rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-black/80 transition hover:bg-white"
                >
                  {t.openParticipants}
                </Link>
              </div>
            </Card>

            <Card title={t.bTitle} desc={t.bDesc}>
              <ul className="space-y-2 text-sm text-black/65">
                <li>• {t.b1}</li>
                <li>• {t.b2}</li>
                <li>• {t.b3}</li>
              </ul>
              <div className="mt-5">
                <Link
                  href={`${base}/builders`}
                  className="inline-flex items-center rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-black/80 transition hover:bg-white"
                >
                  {t.openBuilders}
                </Link>
              </div>
            </Card>

            <Card title={t.nTitle} desc={t.nDesc}>
              <ul className="space-y-2 text-sm text-black/65">
                <li>• {t.n1}</li>
                <li>• {t.n2}</li>
                <li>• {t.n3}</li>
              </ul>
              <div className="mt-5">
                <Link
                  href={`${base}/verify`}
                  className="inline-flex items-center rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-black/80 transition hover:bg-white"
                >
                  {t.openVerify}
                </Link>
              </div>
            </Card>
          </div>

          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-black/85">
                  {t.footerTitle}
                </div>
                <div className="mt-1 text-sm text-black/60">{t.footerText}</div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={`${base}/get-started`}
                  className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  {t.getStarted}
                </Link>
                <Link
                  href={`${base}/docs`}
                  className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  {t.readDocs}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-xs text-black/45">{t.tip}</div>
        </div>
      </Container>
    </main>
  );
}
