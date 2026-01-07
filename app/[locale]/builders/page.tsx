import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SoftBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#f7f6f2]" />
      <div className="absolute -top-44 -left-40 h-[520px] w-[520px] rounded-full bg-amber-200/18 blur-3xl" />
      <div className="absolute -bottom-52 -right-48 h-[560px] w-[560px] rounded-full bg-orange-200/14 blur-3xl" />
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-black/10 bg-white/55 px-3 py-2 text-sm text-black/70">
      {children}
    </span>
  );
}

export default async function BuildersPage({
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
      badges: ["Builders", "Open Infrastructure", "Proof of Work (Soon)"],
      title: "Builders",
      hero:
        "Build with WAOC’s open infrastructure. We favor small, shippable contributions that compound into a living network—transparent, verifiable, and community-owned.",
      buttons: {
        readDocs: "Read Docs",
        verifyFirst: "Verify First",
        connect: "Connect",
      },
      ship: {
        title: "What builders ship",
        pills: [
          "Onboarding pages",
          "Verification UX",
          "Community tools",
          "Visual network map",
          "Mini-apps & experiments",
        ],
        desc:
          "Start small: improve one page, clarify one flow, or ship one component. We track contributions and will later attach verifiable badges (NFT/SBT).",
      },
      lanes: {
        product: {
          title: "Product & UX",
          desc: "Make the site feel trustworthy and effortless.",
          bullets: [
            "• Navigation & information architecture",
            "• Verify-center clarity & anti-scam UX",
            "• Mobile polish & performance",
          ],
        },
        engineering: {
          title: "Engineering",
          desc: "Build components & integrations that scale.",
          bullets: [
            "• Directory / filters / search",
            "• On-chain reads (later)",
            "• CI & deployment hygiene",
          ],
        },
        content: {
          title: "Content & Ops",
          desc: "Turn ideology into a daily, living system.",
          bullets: [
            "• Threads / announcements",
            "• Community playbooks",
            "• Event templates & localization",
          ],
        },
      },
      cta: {
        title: "Ready to build?",
        desc: "Pick a lane, ship one improvement, then share it with the community.",
        startFromDocs: "Start from Docs",
        seeNetwork: "See the Network",
      },
    },
    zh: {
      badges: ["建设者", "开放基础设施", "工作量证明（即将上线）"],
      title: "建设者",
      hero:
        "基于 WAOC 的开放基础设施进行构建。我们鼓励“小而可交付”的贡献，持续叠加成一个可验证、透明、由社区共同拥有的活网络。",
      buttons: {
        readDocs: "阅读文档",
        verifyFirst: "先验证",
        connect: "连接",
      },
      ship: {
        title: "建设者交付什么",
        pills: ["引导页面", "验证体验", "社区工具", "可视化网络地图", "小应用与实验"],
        desc:
          "从小处开始：优化一个页面、澄清一个流程、或交付一个组件。我们会记录贡献，并在后续绑定可验证徽章（NFT/SBT）。",
      },
      lanes: {
        product: {
          title: "产品与体验",
          desc: "让网站更可信、更省心、更好用。",
          bullets: ["• 导航与信息架构", "• 验证中心清晰度与反诈骗体验", "• 移动端细节与性能优化"],
        },
        engineering: {
          title: "工程开发",
          desc: "构建可扩展的组件与集成能力。",
          bullets: ["• 目录 / 筛选 / 搜索", "• 链上读取（后续）", "• CI 与部署规范"],
        },
        content: {
          title: "内容与运营",
          desc: "把理念变成可持续的日常系统。",
          bullets: ["• Thread / 公告发布", "• 社区运营手册", "• 活动模板与本地化"],
        },
      },
      cta: {
        title: "准备开始构建？",
        desc: "选择一个方向，交付一个改进，然后分享给社区。",
        startFromDocs: "从文档开始",
        seeNetwork: "查看网络",
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
              {t.hero}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`${base}/docs`}
                className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                {t.buttons.readDocs}
              </Link>
              <Link
                href={`${base}/verify`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                {t.buttons.verifyFirst}
              </Link>
              <Link
                href={`${base}/connect`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                {t.buttons.connect}
              </Link>
            </div>
          </div>

          {/* What to build */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="text-lg font-semibold text-black/85">{t.ship.title}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {t.ship.pills.map((p) => (
                <Pill key={p}>{p}</Pill>
              ))}
            </div>
            <p className="mt-4 text-sm text-black/60">{t.ship.desc}</p>
          </div>

          {/* Builder lanes */}
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <Card title={t.lanes.product.title} desc={t.lanes.product.desc}>
              <ul className="space-y-2 text-sm text-black/65">
                {t.lanes.product.bullets.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>

            <Card title={t.lanes.engineering.title} desc={t.lanes.engineering.desc}>
              <ul className="space-y-2 text-sm text-black/65">
                {t.lanes.engineering.bullets.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </Card>

            <Card title={t.lanes.content.title} desc={t.lanes.content.desc}>
              <ul className="space-y-2 text-sm text-black/65">
                {t.lanes.content.bullets.map((s) => (
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
                  href={`${base}/docs`}
                  className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  {t.cta.startFromDocs}
                </Link>
                <Link
                  href={`${base}/network`}
                  className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  {t.cta.seeNetwork}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
