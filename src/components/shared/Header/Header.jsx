"use client";

import { RiMenu4Line } from "@remixicon/react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Logo from "@/components/ui/Logo/Logo";
import Navbar from "@/components/ui/Navbar/Navbar";
import Image from "next/image";

const Header = () => {
    const router = useRouter();

    const handleRedirectLogin = () => {
        router.push('/auth/login');
    };

    const handleLogout = () => {
        
        console.log('log out');
    };

    return (
        <div className="w-full px-5 py-5 bg-[#121212] border-b border-[#2a2a2a]">
            <div className="w-full max-w-[1400px] mx-auto">
                <header className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-10">
                        <Logo />
                        <Navbar />
                    </div>
                    <div className="flex items-center justify-center gap-5 md:gap-8">
                        {/* {user?.data 
                            ? (
                                <>
                                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-[#2a2a2a]">
                                        <div className="w-7 h-7 rounded-full relative">
                                            <Image
                                                src={'/images/jane_smith.png'}
                                                alt="profile image"
                                                fill={true}
                                                className="object-cover w-full h-full rounded-full"
                                            />
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleLogout}
                                        type="button"
                                        role="button"
                                        aria-label="button"
                                        className="px-4 py-2 rounded-full bg-[#ffffff] text-sm font-normal text-[#121212] cursor-pointer"
                                    >
                                        Log Out
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link 
                                        href={'/auth/signup'}
                                        className="text-sm font-normal text-[#8e8e8e] hover:text-[#ffffff]"
                                    >
                                        Sign Up
                                    </Link>
                                    <button
                                        onClick={handleRedirectLogin}
                                        type="button"
                                        role="button"
                                        aria-label="button"
                                        className="px-4 py-2 rounded-full bg-[#ffffff] text-sm font-normal text-[#121212] cursor-pointer"
                                    >
                                        Login
                                    </button>
                                </>
                            )
                        } */}
                        <Link 
                            href={'/auth/signup'}
                            className="text-sm font-normal text-[#8e8e8e] hover:text-[#ffffff]"
                        >
                            Sign Up
                        </Link>
                        <button
                            onClick={handleRedirectLogin}
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
