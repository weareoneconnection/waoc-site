import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SoftBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#f7f6f2]" />
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-amber-200/20 blur-3xl" />
      <div className="absolute -bottom-48 -right-48 h-[560px] w-[560px] rounded-full bg-orange-200/15 blur-3xl" />
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

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/55 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.035)] backdrop-blur">
      <div className="text-xs font-medium text-black/45">{n}</div>
      <div className="mt-1 text-base font-semibold text-black/85">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-black/60">{body}</div>
    </div>
  );
}

export default async function ParticipantsPage({
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
      badges: ["People", "Identity", "Contributions"],
      title: "Participants",
      descBefore: "A simple path to participate in WAOC:",
      path: "verify → learn → act",
      descAfter:
        "You join as a human, contribute as a role, and become part of a transparent network.",
      buttons: {
        verifyMust: "Verify (Must)",
        getStarted: "Get Started",
        joinCommunity: "Join Community",
      },
      steps: [
        {
          n: "1) Verify",
          title: "Confirm official links & contracts",
          body: "Start from the Verify Center. WAOC will never DM you for seed phrases or private keys.",
        },
        {
          n: "2) Learn",
          title: "Understand the entry points",
          body: "Read the short onboarding pages: Genesis NFT, Meditation Practice, Token, and the Whitepaper.",
        },
        {
          n: "3) Act",
          title: "Participate with a role",
          body: "Choose a role—Contributor, Ambassador, Holder—and make your first verifiable contribution.",
        },
      ],
      roles: {
        contributor: {
          title: "Contributor",
          desc: "Create value: content, ops, design, translation, support.",
          bullets: [
            "• Help onboarding newcomers",
            "• Ship weekly improvements",
            "• Earn recognition & badges (soon)",
          ],
        },
        ambassador: {
          title: "Ambassador",
          desc: "Grow the network: outreach, events, partnerships.",
          bullets: [
            "• Expand communities",
            "• Host sessions / AMAs",
            "• Build local nodes (soon)",
          ],
        },
        holder: {
          title: "Holder",
          desc: "Support the ecosystem with aligned ownership.",
          bullets: [
            "• Participate in governance direction",
            "• Access ecosystem utilities",
            "• Long-term alignment",
          ],
        },
      },
      cta: {
        title: "Your first step",
        desc: "Verify first, then pick one action you can complete today.",
        openVerify: "Open Verify Center",
        viewNetwork: "View Network",
      },
    },
    zh: {
      badges: ["参与者", "身份", "贡献"],
      title: "参与者",
      descBefore: "参与 WAOC 的路径很简单：",
      path: "验证 → 了解 → 行动",
      descAfter:
        "你以“人”的身份加入，以角色进行贡献，成为透明网络的一部分。",
      buttons: {
        verifyMust: "验证（必做）",
        getStarted: "快速开始",
        joinCommunity: "加入社区",
      },
      steps: [
        {
          n: "1) 验证",
          title: "确认官方链接与合约",
          body: "从验证中心开始。WAOC 绝不会通过私信向你索要助记词或私钥。",
        },
        {
          n: "2) 了解",
          title: "理解入口与关键页面",
          body: "阅读简短的引导页面：Genesis NFT、冥想练习、Token 与白皮书。",
        },
        {
          n: "3) 行动",
          title: "以角色参与网络",
          body: "选择一个角色——贡献者 / 大使 / 持有者——完成你的第一项可验证贡献。",
        },
      ],
      roles: {
        contributor: {
          title: "贡献者",
          desc: "创造价值：内容、运营、设计、翻译、支持等。",
          bullets: [
            "• 帮助新成员快速上手",
            "• 每周交付可见的改进",
            "• 获得认可与徽章（即将上线）",
          ],
        },
        ambassador: {
          title: "大使",
          desc: "扩展网络：外联、活动、合作与传播。",
          bullets: [
            "• 扩大社区影响力",
            "• 主持分享 / AMA",
            "• 建立本地节点（即将上线）",
          ],
        },
        holder: {
          title: "持有者",
          desc: "以长期一致的方式支持生态建设。",
          bullets: [
            "• 参与治理方向与共识",
            "• 获取生态相关权益/工具",
            "• 长期共建与对齐",
          ],
        },
      },
      cta: {
        title: "你的第一步",
        desc: "先完成验证，然后选择今天就能完成的一项行动。",
        openVerify: "打开验证中心",
        viewNetwork: "查看网络",
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

            <p className="mt-4 text-base leading-relaxed text-black/60 md:text-lg">
              {t.descBefore}{" "}
              <span className="font-medium text-black/70">{t.path}</span>。{t.descAfter}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`${base}/verify`}
                className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                {t.buttons.verifyMust}
              </Link>
              <Link
                href={`${base}/get-started`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                {t.buttons.getStarted}
              </Link>
              <Link
                href={`${base}/community`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                {t.buttons.joinCommunity}
              </Link>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Step n={t.steps[0].n} title={t.steps[0].title} body={t.steps[0].body} />
            <Step n={t.steps[1].n} title={t.steps[1].title} body={t.steps[1].body} />
            <Step n={t.steps[2].n} title={t.steps[2].title} body={t.steps[2].body} />
          </div>

          {/* Roles */}
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Card title={t.roles.contributor.title} desc={t.roles.contributor.desc}>
              <ul className="space-y-2 text-sm text-black/65">
                {t.roles.contributor.bullets.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>

            <Card title={t.roles.ambassador.title} desc={t.roles.ambassador.desc}>
              <ul className="space-y-2 text-sm text-black/65">
                {t.roles.ambassador.bullets.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>

            <Card title={t.roles.holder.title} desc={t.roles.holder.desc}>
              <ul className="space-y-2 text-sm text-black/65">
                {t.roles.holder.bullets.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>
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
                  href={`${base}/verify`}
                  className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  {t.cta.openVerify}
                </Link>
                <Link
                  href={`${base}/network`}
                  className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  {t.cta.viewNetwork}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
