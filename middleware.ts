import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "zh"],
  defaultLocale: "en",
  localePrefix: "always", // /en /zh 都有前缀
});

export const config = {
  matcher: [
    // 让 next-intl 接管所有页面路由（排除 _next / 静态文件）
    "/((?!_next|favicon.ico|.*\\..*).*)",
  ],
};
