import Link from "next/link";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="bg-pink-600 rounded-md flex flex-col xl:flex-row items-center justify-between gap-y-4 p-8 m-6 cursor-pointer">
      <div className="grid gap-y-2 justify-start items-start px-4">
        <p className="capitalize text-sm">new album</p>
        <p className="uppercase text-4xl font-extrabold">
          the second step: <br />
          chapter one
        </p>
        <p className="uppercase text-black text-lg font-bold">treasure</p>
        <Link
          href={""}
          className="uppercase bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 rounded-md px-4 w-fit py-1 shadow shadow-black transition"
        >
          listen now
        </Link>
      </div>
      <Image
        src="https://picsum.photos/500/200"
        alt="banner"
        width={"500"}
        height={"200"}
        className="hidden sm:block"
      />
    </div>
  );
};
