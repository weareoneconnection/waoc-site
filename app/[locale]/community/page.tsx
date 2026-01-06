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

function Block({
  title,
  desc,
  items,
}: {
  title: string;
  desc: string;
  items: Array<{ k: string; v: string }>;
}) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-white/70 p-7 shadow-sm backdrop-blur">
      <div className="text-lg font-semibold text-neutral-900">{title}</div>
      <div className="mt-2 text-sm leading-relaxed text-neutral-600">{desc}</div>
      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {items.map((it) => (
          <div
            key={it.k}
            className="rounded-2xl border border-neutral-200 bg-white/60 p-4"
          >
            <div className="text-xs font-semibold text-neutral-500">{it.k}</div>
            <div className="mt-1 text-sm font-medium text-neutral-900">{it.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default async function CommunityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isZh = locale === "zh";

  const t = {
    title: isZh ? "Community" : "Community",
    subtitle: isZh
      ? "WAOC 是一个长期协作网络：公开、可验证、可持续。"
      : "WAOC is a long-term coordination network: open, verifiable, sustainable.",
    back: isZh ? "返回首页" : "Back to Home",
    ctaConnect: isZh ? "去 Connect" : "Go to Connect",
    blocks: [
      {
        title: isZh ? "参与方式" : "How to participate",
        desc: isZh
          ? "从“理解”开始，再到“参与”，最后“共建”。"
          : "Start with understanding, then participate, then build together.",
        items: [
          { k: isZh ? "1) 先读" : "1) Read", v: isZh ? "Get Started / Whitepaper" : "Get Started / Whitepaper" },
          { k: isZh ? "2) 再核验" : "2) Verify", v: isZh ? "Verify 官方链接与合约" : "Verify official links and contracts" },
          { k: isZh ? "3) 加入讨论" : "3) Join", v: isZh ? "Telegram / X / 社区频道" : "Telegram / X / community channels" },
          { k: isZh ? "4) 贡献" : "4) Contribute", v: isZh ? "内容、建设、协作、提案" : "content, building, collaboration, proposals" },
        ],
      },
      {
        title: isZh ? "行为准则" : "Code of conduct",
        desc: isZh
          ? "我们以尊重、真实、长期主义为底线。"
          : "Respect, authenticity, and long-term thinking are non-negotiable.",
        items: [
          { k: isZh ? "禁止" : "No", v: isZh ? "诈骗、钓鱼、虚假承诺" : "scams, phishing, false promises" },
          { k: isZh ? "鼓励" : "Yes", v: isZh ? "公开验证、理性讨论" : "verification, rational discussion" },
          { k: isZh ? "沟通" : "Comms", v: isZh ? "优先公开频道" : "prefer public channels" },
          { k: isZh ? "安全" : "Security", v: isZh ? "不分享助记词/私钥" : "never share seed/private key" },
        ],
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
            href="/connect"
            className="rounded-xl bg-neutral-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-neutral-800"
          >
            {t.ctaConnect} →
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

        <div className="mt-10 grid gap-5">
          {t.blocks.map((b) => (
            <Block key={b.title} title={b.title} desc={b.desc} items={b.items} />
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
