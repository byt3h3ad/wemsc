import Image from "next/image";
import Link from "next/link";

export const PlaylistSmallCard = ({
  cover = "https://picsum.photos/50",
  name,
  artist,
  duration,
  link,
}) => {
  return (
    <Link href={link} className="flex items-center gap-4 my-4">
      <Image
        src={cover}
        alt="playlist cover"
        className="rounded-sm"
        width={40}
        height={40}
      />
      <div className="flex justify-between items-center w-full hover:opacity-75 transition">
        <div>
          <p className="font-bold text-sm hover:underline underline-offset-2">
            {name}
          </p>
          <p className="text-xs hover:underline underline-offset-2">{artist}</p>
        </div>
        <p className="text-xs font-light ">{duration} </p>
      </div>
    </Link>
  );
};
