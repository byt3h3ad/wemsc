import { InlineIcon } from "@iconify/react";
import Link from "next/link";

export const NavLink = ({ name, to, active = false, icon }) => {
    const activeClasses = active ? 'text-blue-500' : 'text-stone-100';
    return (
        <Link href={to} className={"flex items-center space-x-4 my-4 hover:opacity-75 transition " + activeClasses} >
            <InlineIcon icon={icon} width="1.5rem" height="1.5rem" />
            <span className={"text-sm"}>{name}</span>
        </Link>
    );
};