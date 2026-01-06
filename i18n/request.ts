import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  // ✅ Next 15：headers() 必须 await
  const h = await headers();

  // next-intl middleware 会写入这个 header
  const localeFromHeader = h.get("X-NEXT-INTL-LOCALE");

  const locale = localeFromHeader === "zh" ? "zh" : "en";

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
