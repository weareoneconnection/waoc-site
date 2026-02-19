// app/[locale]/connect/page.tsx
import Link from "next/link";
import React from "react";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-6">{children}</div>;
}

function SoftBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-44 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(186,127,73,.14), transparent 55%), radial-gradient(circle at 70% 60%, rgba(236,210,170,.22), transparent 52%)",
        }}
      />
      <div
        className="absolute bottom-[-220px] left-1/2 h-[540px] w-[1160px] -translate-x-1/2 opacity-60"
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

function normalizeBaseUrl(u: string) {
  const s = String(u || "").trim().replace(/\/$/, "");
  if (!s) return "https://one-mission.vercel.app";
  if (s.startsWith("http://") || s.startsWith("https://")) return s;
  return `https://${s}`;
}

function ExternalCard({
  title,
  desc,
  href,
  cta,
  tag,
  warn,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
  tag?: string;
  warn?: string;
}) {
  return (
    <div
      className={cx(
        "rounded-3xl border border-border bg-panel p-6 shadow-soft",
        "transition-all duration-200",
        "hover:bg-white/60 hover:shadow-[0_16px_46px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="text-lg font-semibold text-text">{title}</div>
        {tag ? (
          <span className="inline-flex items-center rounded-full border border-border bg-bg px-3 py-1.5 text-xs font-semibold text-neutral-700 shadow-soft">
            {tag}
          </span>
        ) : null}
      </div>

      <div className="mt-2 text-sm leading-6 text-muted">{desc}</div>

      {warn ? (
        <div className="mt-4 rounded-2xl border border-border bg-bg/60 p-3 text-xs leading-5 text-muted">
          {warn}
        </div>
      ) : null}

      <div className="mt-5">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-text px-5 py-2.5 text-sm font-semibold text-bg shadow-soft hover:opacity-90"
        >
          {cta} <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  );
}

export default async function ConnectPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";
  const L = (path: string) => `/${locale}${path}`;

  // ✅ 项目 One Mission（可配置 ONE_MISSION_BASE_URL）
  const oneMissionBase = normalizeBaseUrl(
    process.env.ONE_MISSION_BASE_URL || "https://one-mission.vercel.app"
  );

  // ✅ Universal & Field
  const oneMissionUniversal = "https://one-mission-universal.vercel.app";
  const oneField = "https://one-field.vercel.app/";

  // ✅ 官方入口（建议与你 Verify 页一致）
  const links = {
    website: "https://www.weareoneconnection.org",
    x: "https://x.com/waoconnectone?s=21",
    telegram: "https://t.me/WAOCGlobalCommunity",
    oneMission: oneMissionBase,
    oneMissionUniversal,
    oneField,
    meditationApp: "https://waoc-meditation-mvp-test.vercel.app/",
    nftMint: "https://waoc-genesis-mint.vercel.app/",
  };

  const t = {
    title: isZh ? "Connect（官方入口）" : "Connect (Official Entry)",
    subtitle: isZh
      ? "所有官方入口集中在这里：任务系统、Field、社区、应用与 Mint。任何同名链接以本页与 Verify 为准。"
      : "All official entry points in one place: mission systems, Field, community, apps, and mint. Same-name links elsewhere are not trusted — treat this page and Verify as source of truth.",
    verify: isZh ? "先去核验 →" : "Verify first →",
    noticeTitle: isZh ? "重要提示" : "Important",
    noticeText: isZh
      ? "只从官网跳转。WAOC 不会私信索要助记词/私钥，不会要求转账到“客服钱包”。"
      : "Only jump from the official site. WAOC will never DM you for seed phrases/private keys or ask you to send funds to a “support wallet”.",
    footerLeft: isZh ? "© 2026 WAOC. 保留所有权利。" : "© 2026 WAOC. All rights reserved.",
    footerRight: isZh ? "本站不构成任何投资建议。" : "This site does not constitute financial advice.",
  };

  const cards = [
    {
      title: isZh ? "One Mission（项目任务系统）" : "One Mission (Project Missions)",
      desc: isZh
        ? "参与 → 声誉 → 身份。进入项目任务系统开始贡献并留下可验证记录。"
        : "Participation → Reputation → Identity. Enter the project mission system and leave verifiable records.",
      href: links.oneMission,
      cta: isZh ? "进入 One Mission" : "Enter One Mission",
      tag: isZh ? "Primary" : "Primary",
      warn: isZh
        ? "首次参与建议先完成 Verify，再进入任务系统。"
        : "If you’re new: verify first, then enter the mission system.",
    },
    {
      title: isZh ? "One Mission Universal" : "One Mission Universal",
      desc: isZh
        ? "面向外部项目的通用任务系统：标准化贡献、积分与排行榜。"
        : "A universal mission system for external projects: standardized contributions, points, and leaderboards.",
      href: links.oneMissionUniversal,
      cta: isZh ? "打开 Universal" : "Open Universal",
      tag: isZh ? "Universal" : "Universal",
      warn: isZh
        ? "只从本页跳转，避免进入仿冒域名。"
        : "Only jump from this page to avoid impersonation domains.",
    },
    {
      title: isZh ? "One Field（Presence / Ritual）" : "One Field (Presence / Ritual)",
      desc: isZh
        ? "Proof of Presence：更轻量的参与与共振入口，适合日常仪式感与社交传播。"
        : "Proof of Presence: a lightweight entry for daily participation, resonance, and social sharing.",
      href: links.oneField,
      cta: isZh ? "进入 One Field" : "Enter One Field",
      tag: isZh ? "Field" : "Field",
    },
    {
      title: isZh ? "Telegram 社区" : "Telegram Community",
      desc: isZh
        ? "加入全球社区，获取公告、活动与协作入口（先看置顶）。"
        : "Join the global community for announcements, events, and coordination (check pinned posts first).",
      href: links.telegram,
      cta: isZh ? "加入 Telegram" : "Join Telegram",
      tag: isZh ? "Community" : "Community",
    },
    {
      title: isZh ? "X / Twitter" : "X / Twitter",
      desc: isZh ? "公告、进展、Space、传播入口。" : "Announcements, progress updates, Spaces, and outreach.",
      href: links.x,
      cta: isZh ? "打开 X" : "Open X",
      tag: "Social",
    },
    {
      title: isZh ? "冥想 App" : "Meditation App",
      desc: isZh ? "Practice & Mindfulness：日常练习与长期对齐。" : "Practice & Mindfulness for reflection and long-term alignment.",
      href: links.meditationApp,
      cta: isZh ? "打开 App" : "Open App",
      tag: isZh ? "Practice" : "Practice",
    },
    {
      title: isZh ? "Genesis Mint" : "Genesis Mint",
      desc: isZh ? "Genesis NFT 铸造入口（务必先核验链接与合约）。" : "Genesis NFT mint entry (verify the link and contract first).",
      href: links.nftMint,
      cta: isZh ? "打开 Mint" : "Open Mint",
      tag: "Genesis",
    },
    {
      title: isZh ? "官方网站" : "Official Website",
      desc: isZh ? "项目概览与入口集合（所有操作请以 Verify 为准）。" : "Project overview and hub (treat Verify as source of truth before action).",
      href: links.website,
      cta: isZh ? "打开官网" : "Open Website",
      tag: "Hub",
    },
  ];

  return (
    <div className="min-h-screen bg-bg">
      <div className="relative">
        <SoftBackdrop />

        <Container>
          <div className="py-12 md:py-14">
            {/* ✅ 标题区右侧放 Verify 按钮：避免与全局 TopBar 重复 */}
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-text md:text-4xl">
                  {t.title}
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-muted md:text-base">
                  {t.subtitle}
                </p>
              </div>

              <div className="md:pt-1">
                <Link
                  href={L("/verify")}
                  className="inline-flex items-center justify-center rounded-xl border border-border bg-panel px-5 py-2.5 text-sm font-semibold text-text shadow-soft hover:bg-white/60 hover:shadow"
                >
                  {t.verify}
                </Link>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-panel p-6 shadow-soft">
              <div className="text-sm font-semibold text-text">{t.noticeTitle}</div>
              <p className="mt-2 text-sm leading-6 text-muted">{t.noticeText}</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {cards.map((c) => (
                <ExternalCard
                  key={c.title}
                  title={c.title}
                  desc={c.desc}
                  href={c.href}
                  cta={c.cta}
                  tag={c.tag}
                  warn={c.warn}
                />
              ))}
            </div>

            <div className="mt-12 border-t border-border/80 pt-8 text-xs text-muted">
              <span suppressHydrationWarning>{t.footerLeft}</span>
              <span className="mx-2">•</span>
              {t.footerRight}
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
