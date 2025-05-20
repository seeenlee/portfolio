import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="py-2 xl:py-8 text-[#5b5b5b]">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            {/* logo */}
            <Link href={"/"}>
                <Image src="/assets/logo.jpg" width={80} height={80} className="flex object-cover" alt="Sean's Profile" />
            </Link>
            {/* desktop nav & theme toggle */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
                <ThemeToggle />
            </div>

            {/* mobile nav & theme toggle */}
            <div className="xl:hidden flex items-center gap-4">
                <ThemeToggle />
                <MobileNav/>
            </div>
            
        </div>
    </header>
    
  );
};
export default Header;
