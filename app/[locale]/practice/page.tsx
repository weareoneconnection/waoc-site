import Link from "next/link";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SoftBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#f7f6f2]" />
      <div className="absolute -top-44 -left-44 h-[540px] w-[540px] rounded-full bg-amber-200/18 blur-3xl" />
      <div className="absolute -bottom-56 -right-56 h-[620px] w-[620px] rounded-full bg-orange-200/14 blur-3xl" />
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

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-xl border border-black/10 bg-white/55 px-3 py-2 text-sm text-black/70">
      {children}
    </span>
  );
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale || "en").toLowerCase();
  const isZH = lang.startsWith("zh");
  const base = `/${isZH ? "zh" : "en"}`;

  const t = isZH
    ? {
        title: "Practice & Mindfulness",
        desc:
          "这是 WAOC 生态的“内在层”。我们把清醒、觉察与长期一致性视为网络健康的一部分——先对齐自己，才能更干净地连接世界。",
        cta1: "打开冥想 App ↗",
        cta2: "进入 Network",
        cta3: "加入社区",
        s1t: "安住当下",
        s1b: "2 分钟。坐稳，放松肩颈，缓慢呼吸 10 次。",
        s2t: "觉察不评判",
        s2b: "念头来去如云，轻轻标记，然后回到呼吸。",
        s3t: "从清醒行动",
        s3b: "做一个小而确定的贡献：验证链接、帮助新人、提交改进。",
        layerTitle: "它在 WAOC 生态里扮演什么角色？",
        layerDesc:
          "Practice 让“连接”不只是口号，而是一种可持续的内在状态：更少噪音、更高信任。",
        m1t: "个人练习",
        m1d: "更稳定、更专注。",
        m2t: "社区文化",
        m2d: "更干净的协作方式。",
        m3t: "未来链上证明",
        m3d: "练习与贡献的连接（后续）。",
        quickTitle: "快速练习",
        vowTitle: "一句誓言",
        vow: "一口安静的呼吸 → 一个诚实的行动 → 一次真实的连接。",
      }
    : {
        title: "Practice & Mindfulness",
        desc:
          "This is the inner layer of the WAOC ecosystem. Align within, then connect cleanly.",
        cta1: "Open Meditation App ↗",
        cta2: "Go to Network",
        cta3: "Join Community",
        s1t: "Arrive",
        s1b: "2 minutes. Sit comfortably and breathe slowly.",
        s2t: "Observe",
        s2b: "Label thoughts gently, return to breath.",
        s3t: "Align",
        s3b: "Take one small aligned action.",
        layerTitle: "Role in the ecosystem",
        layerDesc: "Turns connection into a sustainable state.",
        m1t: "Personal practice",
        m1d: "Stable, focused, grounded.",
        m2t: "Community culture",
        m2d: "Cleaner coordination.",
        m3t: "On-chain proof (later)",
        m3d: "Practice + contribution.",
        quickTitle: "Quick practice",
        vowTitle: "A simple vow",
        vow: "One calm breath → one honest action → one strong connection.",
      };

  return (
    <main className="relative">
      <SoftBackdrop />
      <Container>
        <div className="relative py-14">
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              <Badge>WAOC Ecosystem</Badge>
              <Badge>Practice Layer</Badge>
              <Badge>Alignment</Badge>
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
              {t.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-black/60 md:text-lg">
              {t.desc}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://waoc-meditation-mvp-test.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white"
              >
                {t.cta1}
              </a>
              <Link href={`${base}/network`} className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5">
                {t.cta2}
              </Link>
              <Link href={`${base}/community`} className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5">
                {t.cta3}
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Step n="1)" title={t.s1t} body={t.s1b} />
            <Step n="2)" title={t.s2t} body={t.s2b} />
            <Step n="3)" title={t.s3t} body={t.s3b} />
          </div>

          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6">
            <div className="text-lg font-semibold">{t.layerTitle}</div>
            <div className="mt-2 text-sm text-black/60">{t.layerDesc}</div>
            <div className="mt-5 flex flex-wrap gap-2">
              <Pill>Reflection</Pill>
              <Pill>Awareness</Pill>
              <Pill>Alignment</Pill>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6">
            <div className="text-lg font-semibold">{t.vowTitle}</div>
            <div className="mt-2 text-sm text-black/60">{t.vow}</div>
          </div>
        </div>
      </Container>
    </main>
  );
}

