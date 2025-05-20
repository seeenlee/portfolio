"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from 'react-icons/ci';

const links = [
    {
        name: "home", 
        path: "/",
    }, 
    {
        name: "projects", 
        path: "/projects",
    }, 
    {
        name: "research", 
        path: "/research",
    }, 
    {
        name: "experience", 
        path: "/experience",
    }, 
    {
        name: "contact", 
        path: "/contact",
    }, 
]
const MobileNav = () => {
    const pathname = usePathname();
  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent"/>
    </SheetTrigger>
    <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40">
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index) => {
                    return (
                        <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>
                            {link.name}
                        </Link>
                    );
                    })}
            </nav>
        </div>
        
    </SheetContent>
  </Sheet>
}

export default MobileNav
