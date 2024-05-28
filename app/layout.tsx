import "./globals.scss";
import { crimsonPro, workSans } from "./fonts";
import type { Metadata } from "next";
import TheNavbar from "@/components/TheNavbar/TheNavbar";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';


export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang="en" className={`${crimsonPro.variable} ${workSans.variable}`}>

      <body className="light">
        <NextIntlClientProvider messages={messages}>
          <TheNavbar />
          <main> {children} </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
