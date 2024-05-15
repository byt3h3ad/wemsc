"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { InlineIcon } from "@iconify/react";
import Link from "next/link";

export const Rightbar = () => {
    const button = {
        rest: { scale: 1 },
        hover: { scale: 1.1 },
        pressed: { scale: 0.97 }
      };
  return (
    <section className="md:grid hidden w-[300px] py-4 px-4 h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
        <Image src="https://picsum.photos/200" alt="profile picture" className="rounded" width={30} height={30} />
        Timothy Luca
        </div>
        <div className="flex items-center justify-evenly font-bold text-2xl">
        <InlineIcon icon="lets-icons:bell-pin" />
        <InlineIcon icon="iconamoon:arrow-down-2" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
        <p className="capitalize text-lg font-bold">Recently Played</p>
        <Link href={"/"} className="text-sm hover:underline underline-offset-1">See all</Link>
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
        <p className="capitalize text-lg font-bold">My Playlist</p>
        <Link href={"/"} className="text-sm hover:underline underline-offset-1">See all</Link>
        </div>
      </div>
      <motion.button className="rounded-md py-2 my-4 bg-white" variants={button} initial="rest" whileHover="hover" whileTap="pressed">
        <p className="text-center text-lg text-stone-950 font-bold">Create New Playlist</p>
      </motion.button>
    </section>
  );
};
