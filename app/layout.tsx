import "@/styles/globals.scss";
import { crimsonPro, workSans } from "./fonts";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import MyThemeProvider from "@/components/ThemeProvider/ThemeProvider";
import TheNavbar from "@/components/TheNavbar/TheNavbar";
import TheFooter from "@/components/TheFooter/TheFooter";
import Script from "next/script";

export const metadata = {
  title: "andrewgm ☕ | software developer",
  description:
    "Andrew Alan Gonzalez Miranda personal website, where he shares my thoughts on software development, creativity, and web development.",
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
    "developer",
    "programador",
    "programación",
    "desarrollo web",
    "creatividad",
    "frotend developer",
    "backend developer",
    "fullstack developer",
    "desarrollador web",
    "web developer porfolio",
    "react developer",
    "next.js developer",
    "vue developer",
    "javascript developer",
    "typescript developer",
    "elixir developer",
    "flutter developer",
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
      <head>
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
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8157092397783632"
          crossOrigin="anonymous"
        ></Script>
      </head>
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
