import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "zh"],
  defaultLocale: "en",
  localePrefix: "always",      // /en /zh 都有前缀 ✅
  localeDetection: false,      // ✅ 关键：不按设备语言自动跳转
});

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
