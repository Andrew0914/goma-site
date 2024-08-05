import "@/styles/globals.scss";
import { crimsonPro, workSans } from "./fonts";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import MyThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import TheNavbar from "@/components/TheNavbar/TheNavbar";
import TheFooter from "@/components/TheFooter/TheFooter";
import Head from "next/head";

export const metadata = {
  title: "Andrew Gonzalez's Website",
  description:
    "Andrew Gonzalez's personal website, where he shares my thoughts on software development, creativity, and web development.",
  generator: "Next.js",
  applicationName: "Andrew Gonzalez's Website",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
    "Web Development",
    "Creativity",
    "Developer",
    "Software Engineer",
    "Software Development",
    "Elixir",
    "Phoenix",
    "Flutter",
    "Photoshop",
    "Vue.js",
  ],
  authors: [{ name: "Andrew Gonzalez" }],
  creator: "Andrew Gonzalez",
  publisher: "Andrew Gonzalez",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default async function RootLayout({
  children,
  meta,
}: {
  children: React.ReactNode;
  meta: any;
}) {
  const locale = await getLocale();
  const messages = await getMessages({ locale });

  return (
    <html lang="en" className={`${crimsonPro.variable} ${workSans.variable}`}>
      <Head>
        <title>{meta?.title}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <meta name="google-adsense-account" content="ca-pub-8157092397783632" />
      </Head>
      <body className="light">
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
