"use client";

import { Tabs } from "@/components/Tabs";
import { usePathname } from "next/navigation";

const currTab = `bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900`;

const navItems = [
  {
    title: "Home",
    value: "#home",
  },
  {
    title: "Projects",
    value: "#projects",
  },
  {
    title: "About",
    value: "#about",
  },
  {
    title: "Contact",
    value: "#contact",
  },
];

export const Header = () => {
  const pathname = usePathname();
  return (
    <div className="flex justify-center items-center fixed z-10 top-3 w-full">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Tabs tabs={navItems} />
      </nav>
    </div>
  );
};
