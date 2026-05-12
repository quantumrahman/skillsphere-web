import { 
    RiFacebookFill, 
    RiGlobalLine, 
    RiLinkedinFill 
} from "@remixicon/react";

import Image from "next/image";
import Link from "next/link";

const InstructorCard = ({ instructor }) => {
    return (
        <div className="w-full h-[400px] border border-[#2a2a2a] rounded-lg relative overflow-hidden group">
            <Image 
                src={'/images/jane_smith.png'}
                alt="instructor jane smith"
                fill={true}
                className="object-cover w-full h-full rounded-lg transition-transform duration-500 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="w-full h-full bg-linear-[180deg] from-transparent to-[#121212]/100 absolute top-0 left-0"></div>
            <div className="w-full absolute bottom-6 left-6 z-10 transition-transform duration-500 ease-in-out group-hover:-translate-y-15">
                <h3 className="text-xl font-normal text-[#ffffff]">Jane Smith</h3>
                <p className="text-sm font-normal text-[#8e8e8e]">Cyber Security Expert</p>
            </div>
            <div className="w-full absolute z-10 flex items-center justify-center gap-2 -bottom-10 translate-y-15 left-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-15">
                <Link 
                    href={'/'} 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffffff]"
                >
                    <RiGlobalLine 
                        size={18} 
                        className="text-[#121212]" 
                    />
                </Link>
                <Link 
                    href={'/'} 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffffff]"
                >
                    <RiFacebookFill 
                        size={18} 
                        className="text-[#121212]" 
                    />
                </Link>
                <Link 
                    href={'/'} 
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-[#ffffff]"
                >
                    <RiLinkedinFill 
                        size={18} 
                        className="text-[#121212]" 
                    />
                </Link>
            </div>
        </div>
    );
};

export default InstructorCard;
