import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const AlbumCard = ({ image, name, link, description }) => {
  return (
    <Link
      href={link}
      className="relative group flex flex-col items-center rounded-md overflow-hidden gap-x-4 hover:bg-zinc-100/10 transition p-4"
    >
      <div className="relative aspect-square p-4">
        <Image
          src={image}
          alt={name}
          height={200}
          width={200}
          className="rounded-lg object-cover"
        />
      </div>
      <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-4 drop-shadow-md right-5 bottom-24 group-hover:opacity-100 hover:scale-110 translate translate-y-1/4 group-hover:translate-y-0">
        <Icon icon="solar:play-bold" className="text-black" />
      </div>
      <div className="flex flex-col items-start w-full p-4 gap-y-2 group-hover:opacity-75">
        <p className="font-semibold truncate w-full">{name}</p>
        <p className="text-sm font-light truncate w-full">{description}</p>
      </div>
    </Link>
  );
};
