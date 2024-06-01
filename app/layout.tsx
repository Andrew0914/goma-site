import "./globals.scss";
import type { Metadata } from "next";
import { crimsonPro, workSans } from "./fonts";
import TheNavbar from "@/components/TheNavbar/TheNavbar";
import { NextIntlClientProvider, } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import MyThemeProvider from "@/components/ThemeProvider/ThemeProvider";

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale()
  const messages = await getMessages({ locale })

  return (
    <html lang="en" className={`${crimsonPro.variable} ${workSans.variable}`}>
      <body className="dark">
        <MyThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <TheNavbar />
            <main> {children} </main>
          </NextIntlClientProvider>
        </MyThemeProvider>
      </body>
    </html>
  );
}
