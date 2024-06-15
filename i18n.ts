import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

export default getRequestConfig(async (req) => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const lang = headers().get("accept-language");

  const locale = lang?.split(",")[0].substring(0, 2) ?? "en";
  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
