import Image from "next/image";
import Link from "next/link";

export const AlbumCard = ({ image = "https://picsum.photos/200", name, to, description }) => {
  return (
    <Link href={to} className="relative group flex flex-col items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition">
      <div className="relative min-w-16 min-h-16">
        <Image
          src={image}
          alt={name}
          height={64}
          width={64}
          className="rounded-lg"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Link>
  );
};