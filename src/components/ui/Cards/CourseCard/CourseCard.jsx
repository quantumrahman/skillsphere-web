import { 
    RiArrowRightUpLine, 
    RiStarSFill 
} from "@remixicon/react";

import Image from "next/image";

const CourseCard = ({ course }) => {
    return (
        <div className="w-auto border border-[#2a2a2a] rounded-lg group">
            <div className="w-full h-[180px] sm:h-[250px] relative overflow-hidden rounded-lg">
                <Image 
                    src={'/images/postgre_sql_performance_tuning.png'}
                    alt="postgre_sql_performance_tuning"
                    fill={true}
                    className="object-cover w-full h-full transition-all duration-500 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:-rotate-3"
                />
                <div className="px-2 py-0.5 bg-indigo-500/15 backdrop-blur-md rounded-full absolute top-[18px] right-[18px] border border-indigo-500/30">
                    <span className="text-xs font-normal text-indigo-400">Database</span>
                </div>
            </div>
            <div className="w-full px-6 py-4 space-y-0.5">
                <h3 className="text-lg font-medium text-[#ffffff]">PostgreSQL Performance Tuning</h3>
                <div className="w-full flex items-center justify-between">
                    <span className="text-sm font-normal text-[#8e8e8e]">Rakibul Rahman</span>
                    <div className="flex items-center justify-center gap-2">
                        <RiStarSFill 
                            size={14} 
                            color="#8e8e8e" 
                        />
                        <span className="text-sm font-normal text-[#8e8e8e]">4.9</span>
                    </div>
                </div>
                <button className="w-fit mx-auto mt-3 px-3 py-2 text-xs font-normal text-[#ffffff] flex items-center justify-center gap-1 cursor-pointer">
                    View Details
                    <RiArrowRightUpLine size={15} color="#ffffff" />
                </button>
            </div>
        </div>
    );
};

export default CourseCard;
