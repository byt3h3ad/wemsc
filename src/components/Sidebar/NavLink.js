import { Icon } from "@iconify/react";
import Link from "next/link";

export const NavLink = ({ name, to, active = false, icon, isOpen }) => {
  const activeClasses = active ? "text-blue-500" : "text-stone-100";
  return (
    <Link
      href={to}
      className={
        "flex items-center space-x-4 my-4 hover:opacity-75 transition " +
        activeClasses
      }
    >
      <Icon
        icon={icon}
        className={isOpen ? "text-2xl lg:text-3xl 2xl:text-4xl" : "text-4xl"}
      />
      {isOpen && (
        <span className="text-xs lg:text-sm xl:text-lg 2xl:text-xl">
          {name}
        </span>
      )}
    </Link>
  );
};
