"use client";
import Image from "next/image";
import { InlineIcon } from "@iconify/react";
import Link from "next/link";
import { PlaylistSmallCard } from "./PlaylistSmallCard";

export const Rightbar = () => {
  const songs = [
    {
      name: "Sunset Boulevard",
      artist: "The Dreamers",
      duration: "3 min ago",
      link: "https://open.spotify.com/track/1A2B3C4D5E6F7G8H9I0J",
    },
    {
      name: "Moonlight Sonata",
      artist: "Luna",
      duration: "4 min ago",
      link: "https://open.spotify.com/track/2B3C4D5E6F7G8H9I0J1A",
    },
    {
      name: "Starlight Serenade",
      artist: "Galaxy Band",
      duration: "5 min ago",
      link: "https://open.spotify.com/track/3C4D5E6F7G8H9I0J1A2B",
    },
  ];

  const playlists = [
    {
      name: "Chill Vibes",
      artist: "15 songs",
      duration: "1 hr 14 min",
      link: "https://open.spotify.com/playlist/1A2B3C4D5E6F7G8H9I0J",
    },
    {
      name: "Morning Boost",
      artist: "20 songs",
      duration: "1 hr 30 min",
      link: "https://open.spotify.com/playlist/2B3C4D5E6F7G8H9I0J1A",
    },
    {
      name: "Evening Chill",
      artist: "18 songs",
      duration: "1 hr 25 min",
      link: "https://open.spotify.com/playlist/3C4D5E6F7G8H9I0J1A2B",
    },
    {
      name: "Party Hits",
      artist: "25 songs",
      duration: "2 hr",
      link: "https://open.spotify.com/playlist/4D5E6F7G8H9I0J1A2B3C",
    },
  ];

  return (
    <section className="lg:grid hidden min-w-[20vw] py-4 px-4 h-full">
      <div className="flex justify-between items-center my-2">
        <Link href={""} className="flex items-center gap-4 hover:opacity-75">
          <Image
            src="https://picsum.photos/200"
            alt="profile picture"
            className="rounded-full"
            width={40}
            height={40}
          />
          <span className="font-bold text-sm xl:text-base">Timothy Luca</span>
        </Link>
        <div className="flex items-center justify-evenly font-bold text-base xl:text-xl">
          <InlineIcon icon="lets-icons:bell-pin" />
          <InlineIcon icon="iconamoon:arrow-down-2" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p className="capitalize text-sm xl:text-base 2xl:text-lg font-bold">
            Recently Played
          </p>
          <Link
            href={"/"}
            className="text-xs xl:text-sm 2xl:text-base hover:underline underline-offset-2"
          >
            See all
          </Link>
        </div>
        <div>
          {songs.map((song, index) => (
            <PlaylistSmallCard key={index} {...song} />
          ))}
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <p className="capitalize text-sm xl:text-base 2xl:text-lg font-bold">
            My Playlist
          </p>
          <Link
            href={"/"}
            className="text-xs xl:text-sm 2xl:text-base hover:underline underline-offset-2"
          >
            See all
          </Link>
        </div>
        <div>
          {playlists.map((playlist, index) => (
            <PlaylistSmallCard key={index} {...playlist} />
          ))}
        </div>
      </div>
      <button className="rounded-md py-2 my-2 bg-white hover:scale-105 active:scale-95 transition">
        <p className="text-center text-sm xl:text-base 2xl:text-lg text-stone-950 font-bold">
          Create New Playlist
        </p>
      </button>
    </section>
  );
};
