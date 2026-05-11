import { RiMenu4Line } from "@remixicon/react";

import Link from "next/link";
import Logo from "@/components/ui/Logo/Logo";
import Navbar from "@/components/ui/Navbar/Navbar";

const Header = () => {
    return (
        <div className="w-full px-5 py-5 bg-[#1e1e1e] border-b border-[#2a2a2a]">
            <div className="w-full max-w-[1400px] mx-auto">
                <header className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-10">
                        <Logo />
                        <Navbar />
                    </div>
                    <div className="flex items-center justify-center gap-5 md:gap-8">
                        <Link 
                            href={'/auth/signup'}
                            className="text-sm font-normal text-[#8e8e8e] hover:text-[#ffffff]"
                        >
                            Sign Up
                        </Link>
                        <button
                            type="button"
                            role="button"
                            aria-label="button"
                            className="px-4 py-2 rounded-full bg-[#ffffff] text-sm font-normal text-[#121212] cursor-pointer"
                        >
                            Login
                        </button>
                        <button 
                            type="button"
                            role="button"
                            aria-label="button"
                            className="flex items-center justify-center cursor-pointer md:hidden"
                        >
                            <RiMenu4Line 
                                size={24} 
                                color="#ffffff"
                            />
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;
