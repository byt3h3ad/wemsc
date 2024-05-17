"use client";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { AlbumCard } from "@/components/Album/AlbumCard";
import Link from "next/link";
import { Input } from "@/components/Input";

export default function Home() {
  const router = useRouter();
  const playlists = [
    {
      name: "Chill Vibes",
      description: "Relaxing and soothing tracks to unwind.",
      link: "https://open.spotify.com/playlist/1A2B3C4D5E6F7G8H9I0J",
    },
    {
      name: "Morning Motivation",
      description: "Get your day started with some energy!",
      link: "https://open.spotify.com/playlist/2B3C4D5E6F7G8H9I0J1A",
    },
    {
      name: "Evening Relaxation",
      description: "Wind down with mellow tunes.",
      link: "https://open.spotify.com/playlist/3C4D5E6F7G8H9I0J1A2B",
    },
    {
      name: "Party Hits",
      description: "The best tracks to keep your party going.",
      link: "https://open.spotify.com/playlist/4D5E6F7G8H9I0J1A2B3C",
    },
  ];

  return (
    <main className="bg-zinc-900 w-full h-full px-4 py-2">
      <div className="w-full my-2 flex items-center justify-between gap-x-4">
        <div className="flex items-center gap-x-2 mx-2">
          <button
            type="button"
            onClick={() => router.back()}
            className="p-2 hover:opacity-60 transition"
          >
            <Icon icon="iconamoon:arrow-left-2-light" fontSize={"2rem"} />
          </button>
          <button
            type="button"
            onClick={() => router.forward()}
            className="p-2 hover:opacity-60 transition"
          >
            <Icon icon="iconamoon:arrow-right-2-light" fontSize={"2rem"} />
          </button>
        </div>
        <Input placeholder={"Search for artists, songs or playlists"} />
        <button className="mx-4 text-4xl">
          <Icon icon="lets-icons:meatballs-menu" />
        </button>
      </div>
      <div className="flex justify-between items-center mx-6 my-2">
        <h1 className="text-2xl font-semibold">Hello, Woilon</h1>
        <Link href={""} className="hover:underline underline-offset-2 text-sm">
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
        {playlists.map((playlist, index) => (
          <AlbumCard
            key={index}
            name={playlist.name}
            description={playlist.description}
            to={playlist.link}
          />
        ))}
      </div>
      <div className="flex justify-between items-center mx-6 my-2">
        <h1 className="text-2xl font-semibold">Hello, Woilon</h1>
        <Link href={""} className="hover:underline underline-offset-2 text-sm">
          See All
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
        {playlists.map((playlist, index) => (
          <AlbumCard
            key={index}
            name={playlist.name}
            description={playlist.description}
            to={playlist.link}
          />
        ))}
      </div>
    </main>
  );
}
