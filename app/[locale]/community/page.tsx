// app/[locale]/community/page.tsx
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

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1 text-xs font-semibold text-neutral-700 shadow-soft">
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
    <div className="rounded-3xl border border-border bg-panel p-7 shadow-soft">
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      {desc ? <p className="mt-2 text-sm leading-6 text-muted">{desc}</p> : null}
      {children ? <div className="mt-5">{children}</div> : null}
    </div>
  );
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = (locale || "en").toLowerCase().startsWith("zh");
  const base = `/${locale}`;

  const copy = {
    en: {
      badges: ["Community", "Coordination", "Governance (Evolving)"],
      title: "Community",
      hero:
        "WAOC is a coordination layer for people. We organize around transparency, verified information, and collective value creation—so the network grows without losing trust.",
      buttons: {
        joinConnect: "Join & Connect",
        verifyLinks: "Verify Official Links",
        viewNetwork: "View Network",
      },
      principles: {
        trust: {
          title: "Trust first",
          desc: "Verification is the default behavior.",
          bullets: ["Official links only", "Anti-scam clarity", "Transparent updates"],
        },
        open: {
          title: "Open contribution",
          desc: "Anyone can help; work compounds.",
          bullets: [
            "Small shippable tasks",
            "Shared templates & playbooks",
            "Recognition system (soon)",
          ],
        },
        direction: {
          title: "Collective direction",
          desc: "We coordinate without central capture.",
          bullets: ["Public decisions & notes", "Community-led initiatives", "Governance evolves over time"],
        },
      },
      loop: {
        title: "How coordination happens",
        before: "We run a simple loop:",
        flow: "announce → align → execute → verify",
        after: "This keeps growth clean and repeatable.",
        blocks: [
          { title: "Announcements", body: "Official updates, links, releases. Everything starts from verified sources." },
          { title: "Initiatives", body: "Community projects: campaigns, education, builders tasks, partnerships." },
          { title: "Verification", body: "We document outcomes and gradually move proofs on-chain." },
        ],
      },
      cta: {
        title: "Join the WAOC community",
        desc: "Start from Connect, then choose one contribution you can complete this week.",
        openConnect: "Open Connect",
        exploreBuilders: "Explore Builders",
      },
    },
    zh: {
      badges: ["社区", "协作", "治理（持续演进）"],
      title: "社区",
      hero:
        "WAOC 是面向“人”的协作层。我们围绕透明、可验证的信息与集体价值创造来组织行动——让网络增长的同时不丢失信任。",
      buttons: {
        joinConnect: "加入并连接",
        verifyLinks: "验证官方链接",
        viewNetwork: "查看网络",
      },
      principles: {
        trust: {
          title: "信任优先",
          desc: "默认行为就是验证。",
          bullets: ["只认官方链接", "反诈骗清晰指引", "透明更新与公告"],
        },
        open: {
          title: "开放贡献",
          desc: "任何人都能参与，工作会叠加放大。",
          bullets: ["小任务、可交付", "共用模板与行动手册", "认可体系（即将上线）"],
        },
        direction: {
          title: "集体方向",
          desc: "我们协作但不被中心化绑架。",
          bullets: ["决策与记录公开", "社区发起的行动", "治理将随时间演进"],
        },
      },
      loop: {
        title: "协作如何发生",
        before: "我们采用一个简单循环：",
        flow: "发布 → 对齐 → 执行 → 验证",
        after: "让增长更干净、可复制、可持续。",
        blocks: [
          { title: "公告发布", body: "官方更新、链接与发布信息，一切从可验证来源开始。" },
          { title: "行动项目", body: "社区项目：活动、教育、建设者任务、合作伙伴拓展等。" },
          { title: "结果验证", body: "我们记录产出，并逐步把证明迁移到链上。" },
        ],
      },
      cta: {
        title: "加入 WAOC 社区",
        desc: "从 Connect 开始，然后选择一项你本周能完成的贡献。",
        openConnect: "打开 Connect",
        exploreBuilders: "探索建设者",
      },
    },
  } as const;

  const t = isZh ? copy.zh : copy.en;

  return (
    <main className="relative min-h-screen bg-bg">
      <SoftBackdrop />
      <Container>
        <div className="relative py-12 md:py-14">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Badge>{t.badges[0]}</Badge>
              <Badge>{t.badges[1]}</Badge>
              <Badge>{t.badges[2]}</Badge>
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-text md:text-5xl">
              {t.title}
            </h1>

            <p className="mt-4 text-base leading-7 text-muted md:text-lg">
              {t.hero}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`${base}/connect`}
                className="inline-flex items-center justify-center rounded-xl bg-text px-5 py-2.5 text-sm font-semibold text-bg shadow-soft hover:opacity-90"
              >
                {t.buttons.joinConnect} →
              </Link>
              <Link
                href={`${base}/verify`}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:bg-white/60 hover:shadow"
              >
                {t.buttons.verifyLinks} →
              </Link>
              <Link
                href={`${base}/network`}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:bg-white/60 hover:shadow"
              >
                {t.buttons.viewNetwork} →
              </Link>
            </div>
          </div>

          {/* Operating principles */}
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <Card title={t.principles.trust.title} desc={t.principles.trust.desc}>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                {t.principles.trust.bullets.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </Card>

            <Card title={t.principles.open.title} desc={t.principles.open.desc}>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                {t.principles.open.bullets.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </Card>

            <Card title={t.principles.direction.title} desc={t.principles.direction.desc}>
              <ul className="space-y-2 text-sm leading-6 text-muted">
                {t.principles.direction.bullets.map((s) => (
                  <li key={s}>• {s}</li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Participation loop */}
          <div className="mt-10 rounded-3xl border border-border bg-panel p-7 shadow-soft">
            <div className="text-lg font-semibold text-text">{t.loop.title}</div>
            <div className="mt-2 text-sm leading-6 text-muted">
              {t.loop.before}{" "}
              <span className="font-semibold text-text/80">{t.loop.flow}</span>。
              {t.loop.after}
            </div>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {t.loop.blocks.map((b) => (
                <div key={b.title} className="rounded-2xl border border-border bg-bg/60 p-5">
                  <div className="text-sm font-semibold text-text">{b.title}</div>
                  <div className="mt-2 text-sm leading-6 text-muted">{b.body}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-3xl border border-border bg-panel p-7 shadow-soft">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-text">{t.cta.title}</div>
                <div className="mt-2 text-sm leading-6 text-muted">{t.cta.desc}</div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`${base}/connect`}
                  className="inline-flex items-center justify-center rounded-xl bg-text px-5 py-2.5 text-sm font-semibold text-bg shadow-soft hover:opacity-90"
                >
                  {t.cta.openConnect} →
                </Link>
                <Link
                  href={`${base}/builders`}
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:bg-white/60 hover:shadow"
                >
                  {t.cta.exploreBuilders} →
                </Link>
              </div>
            </div>
          </div>

          {/* Footer line (optional, keep it minimal) */}
          <div className="mt-12 border-t border-border/80 pt-8 text-xs text-muted">
            <span suppressHydrationWarning>© 2026 WAOC. All rights reserved.</span>
            <span className="mx-2">•</span>
            {isZh ? "本站不构成任何投资建议。" : "This site does not constitute financial advice."}
          </div>
        </div>
      </Container>
    </main>
  );
}
