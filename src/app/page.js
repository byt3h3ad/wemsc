"use client";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { AlbumCard } from "@/components/Album/AlbumCard";

export default function Home() {
  const router = useRouter();
  return (
    <main className="bg-zinc-900 w-full h-screen">
      <div className="w-full my-4 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <button type="button" onClick={() => router.back()} className="p-2 hover:opacity-60 transition">
            <Icon icon="iconamoon:arrow-left-2-light" fontSize={"2rem"} />
          </button>
          <button type="button" onClick={() => router.forward()} className="p-2 hover:opacity-60 transition">
            <Icon icon="iconamoon:arrow-right-2-light" fontSize={"2rem"} />
            </button>
        </div>
      </div>
      <AlbumCard to={""} name={"test"}/>
      <h1>Home</h1>
    </main>
  );
}
