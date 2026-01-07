import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SoftBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#f7f6f2]" />
      <div className="absolute -top-44 -left-44 h-[540px] w-[540px] rounded-full bg-amber-200/18 blur-3xl" />
      <div className="absolute -bottom-52 -right-52 h-[600px] w-[600px] rounded-full bg-orange-200/14 blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
      />
    </div>
  );
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
      <h3 className="text-lg font-semibold text-black/85">{title}</h3>
      {desc ? <p className="mt-1 text-sm text-black/55">{desc}</p> : null}
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
  const lang = (locale || "en").toLowerCase();
  const isZH = lang.startsWith("zh");
  const base = `/${isZH ? "zh" : "en"}`;

  // ✅ 仅补充：中英文文案字典（不动结构）
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
          bullets: ["• Official links only", "• Anti-scam clarity", "• Transparent updates"],
        },
        open: {
          title: "Open contribution",
          desc: "Anyone can help; work compounds.",
          bullets: ["• Small shippable tasks", "• Shared templates & playbooks", "• Recognition system (soon)"],
        },
        direction: {
          title: "Collective direction",
          desc: "We coordinate without central capture.",
          bullets: ["• Public decisions & notes", "• Community-led initiatives", "• Governance evolves over time"],
        },
      },
      loop: {
        title: "How coordination happens",
        before: "We run a simple loop:",
        flow: "announce → align → execute → verify",
        after: "This keeps growth clean and repeatable.",
        blocks: [
          {
            title: "Announcements",
            body: "Official updates, links, releases. Everything starts from verified sources.",
          },
          {
            title: "Initiatives",
            body: "Community projects: campaigns, education, builders tasks, partnerships.",
          },
          {
            title: "Verification",
            body: "We document outcomes and gradually move proofs on-chain.",
          },
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
          bullets: ["• 只认官方链接", "• 反诈骗清晰指引", "• 透明更新与公告"],
        },
        open: {
          title: "开放贡献",
          desc: "任何人都能参与，工作会叠加放大。",
          bullets: ["• 小任务、可交付", "• 共用模板与行动手册", "• 认可体系（即将上线）"],
        },
        direction: {
          title: "集体方向",
          desc: "我们协作但不被中心化绑架。",
          bullets: ["• 决策与记录公开", "• 社区发起的行动", "• 治理将随时间演进"],
        },
      },
      loop: {
        title: "协作如何发生",
        before: "我们采用一个简单循环：",
        flow: "发布 → 对齐 → 执行 → 验证",
        after: "让增长更干净、可复制、可持续。",
        blocks: [
          {
            title: "公告发布",
            body: "官方更新、链接与发布信息，一切从可验证来源开始。",
          },
          {
            title: "行动项目",
            body: "社区项目：活动、教育、建设者任务、合作伙伴拓展等。",
          },
          {
            title: "结果验证",
            body: "我们记录产出，并逐步把证明迁移到链上。",
          },
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

  const t = isZH ? copy.zh : copy.en;

  return (
    <main className="relative">
      <SoftBackdrop />
      <Container>
        <div className="relative py-14">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Badge>{t.badges[0]}</Badge>
              <Badge>{t.badges[1]}</Badge>
              <Badge>{t.badges[2]}</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
              {t.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-black/60 md:text-lg">{t.hero}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`${base}/connect`}
                className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                {t.buttons.joinConnect}
              </Link>
              <Link
                href={`${base}/verify`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                {t.buttons.verifyLinks}
              </Link>
              <Link
                href={`${base}/network`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                {t.buttons.viewNetwork}
              </Link>
            </div>
          </div>

          {/* Operating principles */}
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Card title={t.principles.trust.title} desc={t.principles.trust.desc}>
              <ul className="space-y-2 text-sm text-black/65">
                {t.principles.trust.bullets.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>

            <Card title={t.principles.open.title} desc={t.principles.open.desc}>
              <ul className="space-y-2 text-sm text-black/65">
                {t.principles.open.bullets.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>

            <Card title={t.principles.direction.title} desc={t.principles.direction.desc}>
              <ul className="space-y-2 text-sm text-black/65">
                {t.principles.direction.bullets.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>
          </div>

          {/* Participation loops */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="text-lg font-semibold text-black/85">{t.loop.title}</div>
            <div className="mt-2 text-sm text-black/60">
              {t.loop.before}{" "}
              <span className="font-medium text-black/70">{t.loop.flow}</span>。{t.loop.after}
            </div>

            <div className="mt-5 grid gap-4 lg:grid-cols-3">
              <div className="rounded-2xl border border-black/10 bg-white/55 p-5">
                <div className="text-sm font-semibold text-black/85">{t.loop.blocks[0].title}</div>
                <div className="mt-2 text-sm text-black/60">{t.loop.blocks[0].body}</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/55 p-5">
                <div className="text-sm font-semibold text-black/85">{t.loop.blocks[1].title}</div>
                <div className="mt-2 text-sm text-black/60">{t.loop.blocks[1].body}</div>
              </div>
              <div className="rounded-2xl border border-black/10 bg-white/55 p-5">
                <div className="text-sm font-semibold text-black/85">{t.loop.blocks[2].title}</div>
                <div className="mt-2 text-sm text-black/60">{t.loop.blocks[2].body}</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-black/85">{t.cta.title}</div>
                <div className="mt-1 text-sm text-black/60">{t.cta.desc}</div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`${base}/connect`}
                  className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  {t.cta.openConnect}
                </Link>
                <Link
                  href={`${base}/builders`}
                  className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  {t.cta.exploreBuilders}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
