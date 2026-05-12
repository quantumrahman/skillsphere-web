import Image from "next/image";
import { RiPlayFill } from "@remixicon/react";

const Thumbnail = () => {
    return (
        <div className="w-full max-w-5xl mx-auto mt-12">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-[#2a2a2a] group">
                <Image
                    src="/images/thumbnail.png"
                    alt="Course Preview"
                    fill
                    className="object-cover transition duration-300 grayscale group-hover:grayscale-0 group-hover:scale-105"
                    priority
                />
                <div className="absolute inset-0 bg-[#121212]/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#8e8e8e]/10 backdrop-blur-md flex items-center justify-center border border-[#2a2a2a] cursor-pointer">
                        <RiPlayFill color="#ffffff" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Thumbnail;
