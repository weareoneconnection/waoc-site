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

function Step({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/55 p-5 shadow-[0_10px_28px_rgba(0,0,0,0.035)] backdrop-blur">
      <div className="text-xs font-medium text-black/45">{n}</div>
      <div className="mt-1 text-base font-semibold text-black/85">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-black/60">{body}</div>
    </div>
  );
}

function MiniStat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white/55 p-5 backdrop-blur">
      <div className="text-xs font-medium text-black/45">{k}</div>
      <div className="mt-1 text-base font-semibold text-black/85">{v}</div>
    </div>
  );
}

function Row({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-2">
      <div className="text-sm text-black/55">{label}</div>
      <div className={mono ? "text-sm text-black/75 font-mono break-all" : "text-sm text-black/75"}>
        {value}
      </div>
    </div>
  );
}

export default async function GenesisPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale || "en").toLowerCase();
  const isZH = lang.startsWith("zh");
  const base = `/${isZH ? "zh" : "en"}`;

  // 你项目里已存在的链接（你之前给过）
  const mintLink = "https://waoc-genesis-mint.vercel.app/";
  const meditationLink = "https://waoc-meditation-mvp-test.vercel.app/";

  const t = isZH
    ? {
        title: "Genesis & Identity",
        sub:
          "这是 WAOC 生态的“起源层”。Genesis NFT 记录共同起点，并为未来的身份与贡献系统奠定语义基础。",
        ctaMint: "打开 Mint ↗",
        ctaVerify: "验证中心",
        ctaNetwork: "查看 Network",
        chips: ["WAOC Ecosystem", "Genesis Layer", "Identity (Planned)"],
        s1t: "确认信息",
        s1b: "从 Verify 开始，先确认官方链接、合约与入口，避免假冒与钓鱼。",
        s2t: "理解起源",
        s2b: "Genesis 代表参与与延续：它是象征，也是未来身份层的一部分。",
        s3t: "加入与共建",
        s3b: "持有只是开始：参与社区、完成贡献、一起把网络做出来。",
        statsTitle: "Genesis snapshot",
        stat1k: "Supply",
        stat1v: "777 (fixed)",
        stat2k: "Mint price",
        stat2v: "0.07 SOL",
        stat3k: "Identity",
        stat3v: "Planned (SBT/Proof)",
        boxTitle: "What Genesis means",
        boxDesc:
          "Genesis 不是“单纯图片 NFT”。它是一个叙事锚点：把成员、贡献、节点与未来身份系统连成一条线。",
        card1t: "Origin",
        card1d: "共同起点：一套可追溯的起源记录。",
        card2t: "Participation",
        card2d: "参与入口：未来连接角色、贡献与徽章。",
        card3t: "Continuity",
        card3d: "延续机制：让网络在时间里增长，而不失去信任。",
        verifyTitle: "Official references",
        note:
          "安全提示：WAOC 不会私信索取助记词/私钥。所有入口以 Verify 为准。",
        extraTitle: "Connect to the ecosystem",
        extra1: "Practice layer（冥想 App）",
        extra2: "Network map（连接地图）",
      }
    : {
        title: "Genesis & Identity",
        sub:
          "This is the origin layer of the WAOC ecosystem. The Genesis NFT anchors our shared beginning and lays semantic groundwork for identity and contributions.",
        ctaMint: "Open Mint ↗",
        ctaVerify: "Verify Center",
        ctaNetwork: "View Network",
        chips: ["WAOC Ecosystem", "Genesis Layer", "Identity (Planned)"],
        s1t: "Verify first",
        s1b: "Start from the Verify Center. Confirm official links, contracts, and entry points to avoid scams.",
        s2t: "Understand the origin",
        s2b: "Genesis represents participation and continuity—both symbolic and foundational for the future identity layer.",
        s3t: "Join & build",
        s3b: "Holding is only the start. Join the community, contribute, and help shape the network.",
        statsTitle: "Genesis snapshot",
        stat1k: "Supply",
        stat1v: "777 (fixed)",
        stat2k: "Mint price",
        stat2v: "0.07 SOL",
        stat3k: "Identity",
        stat3v: "Planned (SBT/Proof)",
        boxTitle: "What Genesis means",
        boxDesc:
          "Genesis is not “just an image NFT.” It’s a narrative anchor that connects members, contributions, nodes, and the future identity system.",
        card1t: "Origin",
        card1d: "A shared beginning: a traceable origin record.",
        card2t: "Participation",
        card2d: "An entry point for roles, contributions, and badges (later).",
        card3t: "Continuity",
        card3d: "A way for the network to grow over time without losing trust.",
        verifyTitle: "Official references",
        note:
          "Security note: WAOC will never DM you for seed phrases or private keys. Treat Verify as the source of truth.",
        extraTitle: "Connect to the ecosystem",
        extra1: "Practice layer (Meditation App)",
        extra2: "Network map (connection map)",
      };

  return (
    <main className="relative">
      <SoftBackdrop />

      <Container>
        <div className="relative py-14">
          {/* Hero */}
          <div className="max-w-3xl">
            <div className="flex flex-wrap gap-2">
              {t.chips.map((c) => (
                <Badge key={c}>{c}</Badge>
              ))}
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-black/90 md:text-5xl">
              {t.title}
            </h1>

            <p className="mt-4 text-base leading-relaxed text-black/60 md:text-lg">
              {t.sub}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={mintLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
              >
                {t.ctaMint}
              </a>

              <Link
                href={`${base}/verify`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                {t.ctaVerify}
              </Link>

              <Link
                href={`${base}/network`}
                className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
              >
                {t.ctaNetwork}
              </Link>
            </div>
          </div>

          {/* Steps */}
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Step n="1)" title={t.s1t} body={t.s1b} />
            <Step n="2)" title={t.s2t} body={t.s2b} />
            <Step n="3)" title={t.s3t} body={t.s3b} />
          </div>

          {/* Snapshot */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="text-lg font-semibold text-black/85">{t.statsTitle}</div>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <MiniStat k={t.stat1k} v={t.stat1v} />
              <MiniStat k={t.stat2k} v={t.stat2v} />
              <MiniStat k={t.stat3k} v={t.stat3v} />
            </div>
          </div>

          {/* Meaning */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="text-lg font-semibold text-black/85">{t.boxTitle}</div>
            <div className="mt-2 text-sm text-black/60">{t.boxDesc}</div>

            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              <Card title={t.card1t} desc={t.card1d}>
                <ul className="space-y-2 text-sm text-black/65">
                  <li>• Fixed supply narrative</li>
                  <li>• Symbolic origin for the ecosystem</li>
                  <li>• A shared reference point</li>
                </ul>
              </Card>

              <Card title={t.card2t} desc={t.card2d}>
                <ul className="space-y-2 text-sm text-black/65">
                  <li>• Roles & contribution paths</li>
                  <li>• Badges / proof (later)</li>
                  <li>• Community alignment</li>
                </ul>
              </Card>

              <Card title={t.card3t} desc={t.card3d}>
                <ul className="space-y-2 text-sm text-black/65">
                  <li>• Ongoing releases & updates</li>
                  <li>• Network growth without noise</li>
                  <li>• Trust-preserving expansion</li>
                </ul>
              </Card>
            </div>
          </div>

          {/* Official refs (light placeholder, keep clean) */}
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            <Card title={t.verifyTitle} desc={t.note}>
              <div className="mt-2 rounded-2xl border border-black/10 bg-white/55 p-4">
                <Row label="Mint UI" value={mintLink} mono />
                <Row label="Meditation App" value={meditationLink} mono />
                <Row label="Verify Center" value={`${base}/verify`} mono />
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href={`${base}/verify`}
                  className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  {t.ctaVerify}
                </Link>
                <a
                  href={mintLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  {t.ctaMint}
                </a>
              </div>
            </Card>

            <Card title={t.extraTitle} desc="Explore adjacent layers in one click.">
              <div className="space-y-3 text-sm text-black/65">
                <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/55 p-4">
                  <div>{t.extra1}</div>
                  <a
                    href={meditationLink}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-black/80 transition hover:bg-white"
                  >
                    Open ↗
                  </a>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-black/10 bg-white/55 p-4">
                  <div>{t.extra2}</div>
                  <Link
                    href={`${base}/network`}
                    className="rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm font-medium text-black/80 transition hover:bg-white"
                  >
                    Open →
                  </Link>
                </div>
              </div>

              <div className="mt-5 text-xs text-black/45">
                {isZH
                  ? "提示：Genesis 只是起点，真正的价值来自持续贡献与真实连接。"
                  : "Note: Genesis is the beginning—the real value comes from ongoing contribution and real connection."}
              </div>
            </Card>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 rounded-2xl border border-black/10 bg-white/60 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-lg font-semibold text-black/85">
                  {isZH ? "下一步怎么做？" : "What’s next?"}
                </div>
                <div className="mt-1 text-sm text-black/60">
                  {isZH
                    ? "验证 → 了解生态 → 加入社区 → 做一次贡献。"
                    : "Verify → learn the ecosystem → join the community → ship one contribution."}
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href={`${base}/participants`}
                  className="rounded-xl border border-black/10 bg-black px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-90"
                >
                  {isZH ? "打开 Participants" : "Open Participants"}
                </Link>
                <Link
                  href={`${base}/builders`}
                  className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-medium text-black/80 shadow-sm backdrop-blur transition hover:bg-white"
                >
                  {isZH ? "探索 Builders" : "Explore Builders"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
