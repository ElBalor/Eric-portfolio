"use client";
import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
// import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import useScreenSize from "../components/hooks/useScreenSize";

import dynamic from "next/dynamic";
import EarthMoon from "@/components/models/Earth";
import Krypton from "@/components/models/Krypton";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const EarthModel = dynamic(() => import("@/components/models/EarthModel"), {
  ssr: false,
});

export default function Home() {
  const size = useScreenSize();

  const isLarge = size >= 1024;
  const isMedium = size >= 768;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:w-full hidden xl:block xl:h-screen xl:relative"
      >
        <Navigation />
        <RenderModel>
          <EarthModel />
        </RenderModel>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="w-full block xl:hidden h-screen relative"
      >
        {/* {isLarge ? (
          <>
            <Navigation />
            <RenderModel>
              <EarthModel />
            </RenderModel>
          </>
        ) : (
          <>
            <Navigation />
            <RenderModel>
              <Krypton />
            </RenderModel>
          </>
        )} */}
        {isMedium ? (
          <>
            <>
              <Navigation />
              <RenderModel>
                <EarthMoon />
              </RenderModel>
            </>
          </>
        ) : (
          <>
            <Navigation />
            <RenderModel>
              <Krypton />
            </RenderModel>
          </>
        )}
        {/* <Navigation />
        <RenderModel>
          <EarthModel />
        </RenderModel> */}
      </motion.div>
    </main>
  );
}
