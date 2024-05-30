"use client";

import { Icon } from "@iconify/react";
import { Input } from "./Input";
import { useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();
  return (
    <div className="w-full my-2 flex items-center justify-between gap-x-2">
      <div className="flex items-center mx-2">
        <button
          type="button"
          onClick={() => router.back()}
          className="p-2 hover:opacity-60 transition"
        >
          <Icon
            icon="iconamoon:arrow-left-2-light"
            className="text-2xl lg:text-3xl"
          />
        </button>
        <button
          type="button"
          onClick={() => router.forward()}
          className="p-2 hover:opacity-60 transition"
        >
          <Icon
            icon="iconamoon:arrow-right-2-light"
            className="text-2xl lg:text-3xl"
          />
        </button>
      </div>
      <Input placeholder={"Search for artists, songs or playlists"} />
      <button className="mx-4 text-3xl lg:text-4xl">
        <Icon icon="lets-icons:meatballs-menu" />
      </button>
    </div>
  );
};
