import "@/styles/globals.scss";
import type { Metadata } from "next";
import { crimsonPro, workSans } from "./fonts";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import MyThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import TheNavbar from "@/components/TheNavbar/TheNavbar";
import TheFooter from "@/components/TheFooter/TheFooter";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const messages = await getMessages({ locale });

  return (
    <html lang="en" className={`${crimsonPro.variable} ${workSans.variable}`}>
      <body className="dark">
        <MyThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <TheNavbar />
            <main> {children} </main>
            <TheFooter />
          </NextIntlClientProvider>
        </MyThemeProvider>
      </body>
    </html>
  );
}
