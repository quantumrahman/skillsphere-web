"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className="hidden items-center justify-center gap-8 md:flex">
            <Link 
                href={'/'} 
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
    );
};

export default Navbar;
