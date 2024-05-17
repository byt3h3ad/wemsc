"use client";
import { AlbumCard } from "@/components/AlbumCard";
import Link from "next/link";
import { Banner } from "@/components/Banner";

export default function Home() {
  const playlists = [
    {
      name: "This is KK",
      description: "This is KK. The essential tracks, all in one playlist.",
      link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO2uagOI",
      image:
        "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO2uagOI-default.jpg",
    },
    {
      name: "This is Avicii",
      description: "This is Avicii. The essential tracks, all in one playlist.",
      link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO0PRpBu",
      image:
        "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0PRpBu-default.jpg",
    },
    {
      name: "This is Linkin Park",
      description:
        "This is Linkin Park. The essential tracks, all in one playlist.",
      link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO47cwRq",
      image:
        "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO47cwRq-default.jpg",
    },
    {
      name: "This is Papon",
      description: "This is Papon. The essential tracks, all in one playlist.",
      link: "https://open.spotify.com/playlist/37i9dQZF1DZ06evO1xiWn7",
      image:
        "https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO1xiWn7-default.jpg",
    },
  ];

  return (
    <>
      <Banner />
      <div className="mx-6 my-2">
        <div className="flex justify-between items-center px-8">
          <h1 className="text-2xl font-semibold">Hello, Woilon</h1>
          <Link
            href={""}
            className="hover:underline underline-offset-2 text-sm"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
          {playlists.map((playlist, index) => (
            <AlbumCard key={index} {...playlist} />
          ))}
        </div>
      </div>
      <div className="mx-6 my-2">
        <div className="flex justify-between items-center px-8">
          <h1 className="text-2xl font-semibold">Today&apos;s hits!</h1>
          <Link
            href={""}
            className="hover:underline underline-offset-2 text-sm"
          >
            See All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3">
          {playlists.map((playlist, index) => (
            <AlbumCard key={index} {...playlist} />
          ))}
        </div>
      </div>
    </>
  );
}
