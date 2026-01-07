import type { ReactNode } from "react";
import Link from "next/link";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }];
}

function Header({ locale }: { locale: string }) {
  const isZH = locale.startsWith("zh");
  const homeHref = `/${locale}`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f7f6f2]/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        {/* 左侧：Home */}
        <Link
          href={homeHref}
          className="inline-flex items-center gap-2 rounded-xl border border-black/10 bg-white/70 px-3 py-1.5 text-sm font-medium text-black/75 transition hover:bg-white"
        >
          <span aria-hidden className="text-base leading-none">
            ←
          </span>
          <span>{isZH ? "首页" : "Home"}</span>
        </Link>

        {/* 右侧：站点标识 */}
        <div className="text-xs font-medium text-black/40">
          WAOC · {isZH ? "我们一体" : "We Are One Connection"}
        </div>
      </div>
    </header>
  );
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // ✅ Next-Intl 推荐：保证 SSR locale 一致
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <Header locale={locale} />
      <main>{children}</main>
    </NextIntlClientProvider>
  );
}
