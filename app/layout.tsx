import type { Metadata } from "next";
import { crimsonPro, workSans } from "./fonts";
import "./globals.scss";
import TheNavbar from "@/components/TheNavbar/TheNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${crimsonPro.variable} ${workSans.variable}`}>
      <body className="light">
        <TheNavbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
