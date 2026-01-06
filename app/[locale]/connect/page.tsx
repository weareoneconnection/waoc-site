import Link from "next/link";
import React from "react";

function L({
  locale,
  href,
  children,
  className,
}: {
  locale: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const normalized = href.startsWith("/") ? href : `/${href}`;
  return (
    <Link href={`/${locale}${normalized}`} className={className}>
      {children}
    </Link>
  );
}

function SoftBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute inset-0 opacity-[0.22]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(220,200,170,0.55),transparent_55%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>
    </div>
  );
}

function External({
  title,
  desc,
  href,
  cta,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="text-lg font-semibold text-neutral-900">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</div>
      <div className="mt-5">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-[rgb(182,129,78)] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
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

  // TODO：替换成你真实链接
  const links = {
    website: "https://weareoneconnection.carrd.co/",
    x: "https://x.com/waoconnectone?s=21",
    telegram: "https://t.me/WAOCGlobalCommunity",
    meditationApp: "https://waoc-meditation-mvp-test.vercel.app/",
    nftMint: "https://waoc-genesis-mint.vercel.app/",
  };

  const t = {
    title: isZh ? "Connect" : "Connect",
    subtitle: isZh
      ? "所有入口集中在这里：官方链接、社区、应用与 Mint。"
      : "All entry points in one place: official links, community, apps, and mint.",
    back: isZh ? "返回首页" : "Back to Home",
    verify: isZh ? "先去核验" : "Verify first",
    cards: [
      {
        title: isZh ? "官方网站" : "Official website",
        desc: isZh ? "项目简介与入口集合（请以 Verify 为准）。" : "Project overview and hub (verify before action).",
        href: links.website,
        cta: isZh ? "打开官网" : "Open website",
      },
      {
        title: isZh ? "X / Twitter" : "X / Twitter",
        desc: isZh ? "公告、进展、讨论与传播。" : "Announcements, progress, discussion and outreach.",
        href: links.x,
        cta: isZh ? "打开 X" : "Open X",
      },
      {
        title: isZh ? "Telegram 社区" : "Telegram community",
        desc: isZh ? "加入全球社区，获取官方公告与活动信息。" : "Join the global community and follow updates.",
        href: links.telegram,
        cta: isZh ? "加入 TG" : "Join Telegram",
      },
      {
        title: isZh ? "冥想 App" : "Meditation app",
        desc: isZh ? "Practice & Mindfulness：日常练习与长期对齐。" : "Practice & Mindfulness for reflection and alignment.",
        href: links.meditationApp,
        cta: isZh ? "打开 App" : "Open app",
      },
      {
        title: isZh ? "Genesis Mint" : "Genesis Mint",
        desc: isZh ? "Genesis NFT 铸造入口（务必先核验链接）。" : "Genesis NFT mint entry (verify the link first).",
        href: links.nftMint,
        cta: isZh ? "打开 Mint" : "Open mint",
      },
    ],
  };

  return (
    <main className="relative min-h-[calc(100vh-80px)] bg-[rgb(247,246,242)]">
      <SoftBg />
      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-16">
        <div className="flex items-center justify-between">
          <L
            locale={locale}
            href="/"
            className="text-sm font-medium text-neutral-600 hover:text-neutral-900"
          >
            ← {t.back}
          </L>
          <L
            locale={locale}
            href="/verify"
            className="rounded-xl border border-neutral-200 bg-white/70 px-4 py-2 text-sm font-semibold text-neutral-800 shadow-sm hover:bg-white"
          >
            {t.verify} →
          </L>
        </div>

        <div className="mt-10">
          <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            {t.title}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-600">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {t.cards.map((c) => (
            <External key={c.title} title={c.title} desc={c.desc} href={c.href} cta={c.cta} />
          ))}
        </div>

        <div className="mt-12 text-xs text-neutral-500">
          © {new Date().getFullYear()} WAOC. All rights reserved.{" "}
          <span className="mx-2">•</span>
          {isZh ? "本网站不构成任何投资建议。" : "This site does not constitute financial advice."}
        </div>
      </div>
    </main>
  );
}
