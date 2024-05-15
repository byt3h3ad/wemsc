"use client";

import { useState } from "react";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { NavLink } from "./NavLink";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const featuresLinks = useMemo(
    () => [
      {
        name: "Home",
        to: "/",
        active: path === "/",
        icon: "fluent:home-24-filled",
      },
      {
        name: "Discover",
        to: "/discover",
        active: path === "/discover",
        icon: "iconamoon:discover-light",
      },
      {
        name: "Collections",
        to: "/collections",
        active: path === "/collections",
        icon: "material-symbols-light:library-music-outline-rounded",
      },
    ],
    [path]
  );

  const libraryLinks = useMemo(
    () => [
      {
        name: "Download",
        to: "/downloads",
        active: path === "/downloads",
        icon: "solar:download-outline",
      },
      {
        name: "Favourites",
        to: "/favourites",
        active: path === "/favourites",
        icon: "hugeicons:favourite",
      },
      {
        name: "Local Files",
        to: "/local",
        active: path === "/local",
        icon: "solar:folder-outline",
      },
    ],
    [path]
  );
  return (
    <section className="md:flex flex-col justify-between hidden w-[20vw] py-4 px-4 min-h-screen">
      <div>
        <div className="flex justify-between mb-6">
          <Icon icon="ph:android-logo-fill" width="2rem" height="2rem" />
          <Icon icon="mdi:hamburger-open" width="2rem" height="2rem" />
        </div>
        <div>
          <p className="uppercase text-xs font-thin">features</p>
          {featuresLinks.map((link, index) => (
            <NavLink key={index} {...link} />
          ))}
        </div>
        <div>
          <p className="uppercase text-xs font-thin">library</p>
          {libraryLinks.map((link, index) => (
            <NavLink key={index} {...link} />
          ))}
        </div>
      </div>
      <div className="bottom-0">
        <Image
          src="https://picsum.photos/300"
          alt="album cover"
          width={240}
          height={240}
          className="m-0"
        />
      </div>
    </section>
  );
};
