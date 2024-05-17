"use client";
import { AlbumCard } from "@/components/Album/AlbumCard";
import Link from "next/link";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";

export default function Home() {
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
    <>
      <Banner />
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
            to={playlist.link} />
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
            to={playlist.link} />
        ))}
      </div>
    </>
  );
}
