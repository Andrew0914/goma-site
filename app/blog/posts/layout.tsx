import HImage from "@/components/HImage/HImage";
import PageTransition from "@/components/PageTransition/PageTransition";
import Image from "next/image";
import Link from "next/link";

export default async function RootLayout(props: { children: React.ReactNode }) {
  return (
    <PageTransition className="container">
      <header className="post--header">
        <HImage
          src="/images/yo_2.png"
          alt="Andrew Gonzalez"
          width={24}
          height={24}
          className="circle author--avatar"
        />
        <Link href="/about" className="text--muted text--content">
          Andrew Gonzalez
        </Link>
      </header>
      <div className="post--content">{props.children}</div>
    </PageTransition>
  );
}
