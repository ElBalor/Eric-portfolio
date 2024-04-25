"use client";
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import { motion } from "framer-motion";
import { textVariant } from "../../../../utils/motion";

export default function Home() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background Image"
        className="w-full -z-50 h-full object-cover top-0 left-0 fixed object-center opacity-50"
      />

      <motion.div className=" w-full absolute h-3/5 xs:h-3/4 top-1/2 sm:h-screen -translate-y-1/2 left-0">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </motion.div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <motion.h1
            animate={{
              x: [0, 30, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="font-bold moving-gradient-text xs:text-7xl sm:text-8xl text-6xl lg:text-9xl text-accent"
          >
            El Balor
          </motion.h1>
          <h2 className=" text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-500 to-fuchsia-500 font-semibold relative z-50 top-10 text-2xl w-full">
            Meet the Legend Behind this Portfolio || {""}
          </h2>
          <motion.h2
            animate={{
              y: [0, 24, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 font-semibold relative z-50 top-10 text-7xl w-full"
          >
            ↓
          </motion.h2>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
