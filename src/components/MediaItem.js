import Image from "next/image";
import Link from "next/link";

export const MediaItem = ({
  img = "https://picsum.photos/50",
  name,
  artist,
  link,
}) => {
  return (
    <Link
      href={link}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
    >
      <div className="relative rounded-md min-h-12 min-w-12 overflow-hidden">
        <Image
          src={img}
          alt="media cover"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden ">
        <p className="text-white truncate hover:underline underline-offset-2">
          {name}
        </p>
        <p className="text-neutral-400 hover:underline hover:text-white underline-offset-2 truncate text-sm">
          {artist}
        </p>
      </div>
    </Link>
  );
};
