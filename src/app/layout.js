import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";
import PictureModal from "@/components/PictureModal";
import TextModal from "@/components/TextModal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template: " ElBalor's Protfolio",
    default: "ElBalor's Protfolio",
  },
  description:
    "A unique creative portfolio designed by El Balor with technologies like Next.js, Tailwind CSS, Three.js, and Framer Motion. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <TextModal />
        <PictureModal />
        <div id="my-modal" />
      </body>
    </html>
  );
}
