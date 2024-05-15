import { InlineIcon } from "@iconify/react";
import Link from "next/link";

export const NavLink = ({ name, to, active = false, icon }) => {
    const activeClasses = active ? 'text-blue-500' : 'text-stone-100';
    return (
        <div className="flex items-center space-x-4 my-4">
            <InlineIcon icon={icon} width="1.5rem" height="1.5rem" className={activeClasses} />
            <Link href={to} className={"text-sm " + activeClasses}>{name}</Link>
        </div>
    );
};