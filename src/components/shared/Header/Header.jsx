"use client";

import { RiCloseLine, RiMenu4Line } from "@remixicon/react";
import { authClient, useSession } from "@/lib/auth-client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

import Link from "next/link";
import Logo from "@/components/ui/Logo/Logo";
import Navbar from "@/components/ui/Navbar/Navbar";
import Image from "next/image";

const Header = () => {
    const router = useRouter();
    const data = useSession();
    const pathname = usePathname();
    
    const [toggleMenu, setToggleMenu] = useState(false);
    
    const handleRedirectLogin = () => {
        router.push('/auth/login');
    };

    const handleLogout = async () => {
        await authClient.signOut();
    };

    return (
        <>
            <div className="w-full px-5 py-5 bg-[#121212] border-b border-[#2a2a2a]">
                <div className="w-full max-w-[1400px] mx-auto">
                    <header className="w-full flex items-center justify-between">
                        <div className="flex items-center gap-10">
                            <Logo />
                            <Navbar />
                        </div>
                        <div className="flex items-center justify-center gap-5 md:gap-8">
                            {data?.data?.user 
                                ? (
                                    <>
                                        <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-[#2a2a2a]">
                                            <div className="w-7 h-7 rounded-full relative">
                                                <Image
                                                    src={data?.data?.user?.image}
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
                            }
                            <button 
                                onClick={() => setToggleMenu((prev) => !prev)}
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
            <div className={`fixed inset-0 z-40 bg-black/20 backdrop-blur-xs transform transition-transform duration-300 ease-in-out 
                    ${toggleMenu ? "translate-x-0" : "translate-x-full"}
                `}
            >
                <div className={`w-full max-w-[350px] absolute top-0 right-0 h-full bg-[#121212] transform transition-transform duration-500 ease-in-out px-5
                        ${toggleMenu ? "translate-x-0" : "translate-x-full"}
                    `}
                >
                    <div className="w-full py-5 border-b border-[#1e1e1e]">
                        <button 
                                onClick={() => setToggleMenu((prev) => !prev)}
                                type="button"
                                role="button"
                                aria-label="button"
                                className="flex items-center justify-center cursor-pointer md:hidden"
                            >
                            <RiCloseLine 
                                size={24} 
                                color="#ffffff"
                            />
                        </button>
                    </div>
                    <div className="flex flex-col gap-8 mt-10">
                        <Link 
                            href={'/'} 
                            onClick={() => setToggleMenu((prev) => !prev)}
                            className={`text-sm font-normal 
                                ${pathname === '/'
                                    ? "text-[#ffffff]"
                                    : "text-[#8e8e8e] hover:text-[#ffffff]"
                                }    
                            `}
                        >
                            Home
                        </Link>
                        <Link 
                            href={'/courses'} 
                            onClick={() => setToggleMenu((prev) => !prev)}
                            className={`text-sm font-normal
                                ${pathname.startsWith('/courses') 
                                    ? "text-[#ffffff]"
                                    : "text-[#8e8e8e] hover:text-[#ffffff]"
                                }
                            `}
                        >
                            Courses
                        </Link>
                        <Link 
                            href={'/profile'} 
                            onClick={() => setToggleMenu((prev) => !prev)}
                            className={`text-sm font-normal 
                                ${pathname === '/profile'
                                    ? "text-[#ffffff]"
                                    : "text-[#8e8e8e] hover:text-[#ffffff]"
                                }
                            `}
                        >
                            Profile
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
