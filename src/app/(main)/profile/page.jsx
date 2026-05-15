import { RiEdit2Line } from "@remixicon/react";

import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {

    return (
        <div className="w-full px-5 py-12 md:py-20">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="w-full mb-10 sm:mb-12 md:mb-16 lg:mb-20 flex flex-col gap-2">
                    <h1 className="text-[28px] font-semibold text-[#ffffff] sm:text-[32px] md:text-[36px] lg:text-[40px]">Your Profile</h1>
                    <p className="text-base font-normal text-[#8e8e8e] leading-relaxed sm:text-xl">
                        View and manage your <span className="text-[#ffffff]">personal</span> information here. Keep your <span className="text-[#ffffff]">profile updated</span> for a better experience.
                    </p>
                </div>
                <div className="w-full p-5 flex items-center justify-center flex-col gap-5 border border-[#2a2a2a] rounded-lg md:p-[25px] lg:p-[30px]">
                    <div className="relative w-24 h-24 rounded-full border-2 border-[#2a2a2a] sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48">
                        <Image 
                            src={'/images/jane_smith.png'}
                            alt="profile image"
                            fill={true}
                            className="object-cover w-full h-full rounded-full"
                        />
                    </div>
                    <div className="w-full flex items-center justify-center flex-col text-center gap-2">
                        <h1 className="text-lg font-semibold text-[#ffffff] break-words sm:text-xl md:text-2xl lg:text-3xl">Jane Rahman</h1>
                        <p className="text-sm font-normal text-[#8e8e8e] sm:text-base md:text-lg lg:text-xl">rakibulrahman.dev@gmail.com</p>
                    </div>
                    <Link 
                        href={'/profile/profile-update'}
                        className="px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base font-medium bg-white border border-[#ffffff] text-[#121212] rounded-lg flex items-center justify-center gap-2 hover:bg-gray-200 hover:border-[#ffffff] transition-all duration-200 cursor-pointer"
                    >
                        <RiEdit2Line size={20} color="#121212" />
                        Edit Profile
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
