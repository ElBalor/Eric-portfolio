"use client";
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import RenderModel from "@/components/RenderModel";
import DragonModel from "@/components/models/DragonModel";
import Form from "@/components/contact/Forum";

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

      <div className=" w-full xl:max-w-auto xl:max-w-4xl xl:px-4 lg:mx-auto lg:px-16 space-y-6 md:space-y-8 lg:flex lg:flex-col lg:items-center">
        {/* w-full xl:max-w-auto  xl:max-w-4xl xl:px-4 lg:mx-auto lg:px-16 space-y-6 md:space-y-8 lg:flex lg:flex-col lg:items-center */}
        <div className="flex items-center justify-center fixed  top-48  lg:top-20 -translate-x-1/2 lg:-translate-x-1/4 lg:translate-y-44 -z-10 left-1/2 lg:-left-24 h-screen w-full">
          <RenderModel>
            <DragonModel />
          </RenderModel>
        </div>
        <article className="lg:relative lg:-top-8 -top-14 xl:left-9 w-full flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center space-y-6 md:w-3/4 w-full">
            <h1 className=" text-transparent burning-text bg-clip-text bg-gradient-to-br from-accent to-cyan-700 font-bold text-center lg:text-8xl text-7xl capitalize">
              summon
            </h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-br from-red-700 to-purple-500 relative -top-3 font-semibold text-center text-5xl capitalize">
              the{" "}
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-red-700 w-full relative -top-4 self-stretch font-semibold text-center text-4xl capitalize">
              <span className="text-7xl capitalize text-transparent bg-clip-text bg-gradient-to-br from-accent to-cyan-700 ">
                A
              </span>
              RCH
              <span className="text-7xl capitalize text-transparent bg-clip-text bg-gradient-to-br from-accent to-cyan-700">
                A
              </span>
              NGEL{" "}
            </p>
            <p className="text-center font-light p-1 text-lg text-white capitalize rounded-md bg-black/50 xl:w-6/12 w-[340px] drop-shadow-xl border-[4px] border-accent/30 shadow-glass-xs ">
              <span className="text-amber-500">S</span>tep into the circle of
              enchantment and weave your needs into the fabric of the cosmos.
              Whether you seek to conjure collaborations, unlock mysteries of
              development, or simply sh<span className="text-amber-500">a</span>
              re tales of adventure's in programing, your messages are treasured
              scrolls within this realm. Use the form below to send your missiv
              <span className="text-accent">e</span>s through the ethereal
              network, and await the whis
              <span className="text-amber-500">p</span>er of magic in response.
            </p>
          </div>
          <Form />
        </article>
      </div>
    </>
  );
}
