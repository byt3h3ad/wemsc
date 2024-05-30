"use client";

import { useEffect, useState } from "react";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { NavLink } from "./NavLink";

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [show]);

  const handleSize = () => {
    window.innerWidth < 900 ? setShow(false) : setShow(true);
  };

  useEffect(() => {
    handleSize();
    window.onresize = handleSize;
  }, []);

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
    [path],
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
    [path],
  );
  return (
    <section
      className={`hidden min-[400px]:flex flex-col justify-between ${open ? "min-w-[15vw] sm:min-w-[20vw] min-[2000px]:min-w-[12vw]" : "min-w-fit"} py-4 px-2 sm:px-4 mx-2 h-screen overflow-hidden`}
    >
      <div>
        <div
          className={`flex flex-${open ? "row" : "col space-y-2"} justify-between mb-6`}
        >
          <Icon icon="ph:android-logo-fill" width="2rem" height="2rem" />
          {open ? (
            <Icon
              icon="mdi:hamburger-open"
              className="text-3xl hidden md:block"
              onClick={() => setOpen(false)}
            />
          ) : (
            <Icon
              icon="mdi:hamburger-close"
              className="text-3xl hidden md:block"
              onClick={() => setOpen(true)}
            />
          )}
        </div>
        <div>
          {open && (
            <p className="uppercase text-xs 2xl:text-lg font-thin">features</p>
          )}
          {featuresLinks.map((link, index) => (
            <NavLink key={index} {...link} isOpen={open} />
          ))}
        </div>
        <div>
          {open && (
            <p className="uppercase text-xs 2xl:text-lg font-thin">library</p>
          )}
          {libraryLinks.map((link, index) => (
            <NavLink key={index} {...link} isOpen={open} />
          ))}
        </div>
      </div>
    </section>
  );
};
