import { Crimson_Pro, Work_Sans } from "next/font/google";

export const crimsonPro = Crimson_Pro({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  variable: "--font-crimson-pro",
});

export const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700"],
  variable: "--font-work-sans",
});

workSans.style;
