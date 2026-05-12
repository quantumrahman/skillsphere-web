import { 
    RiArrowRightUpLine, 
    RiStarSFill 
} from "@remixicon/react";

import Image from "next/image";
import LevelBadges from "../../Badges/LevelBadge/LevelBadge";

const CourseCard = ({ course }) => {
    return (
        <div className="w-auto border border-[#2a2a2a] rounded-lg group">
            <div className="w-full h-[180px] sm:h-[250px] relative overflow-hidden rounded-lg">
                <Image 
                    src={course?.image}
                    alt="postgre_sql_performance_tuning"
                    fill={true}
                    className="object-cover w-full h-full transition-all duration-500 ease-in-out grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:-rotate-3"
                />
                <div className="w-fit absolute top-[18px] right-[18px]">
                    <LevelBadges level={course?.level.toLowerCase()}/>
                </div>
            </div>
            <div className="w-full px-6 py-4 space-y-0.5">
                <h3 className="text-lg font-medium text-[#ffffff]">{course?.title}</h3>
                <div className="w-full flex items-center justify-between">
                    <span className="text-sm font-normal text-[#8e8e8e]">{course?.instructor}</span>
                    <div className="flex items-center justify-center gap-2">
                        <RiStarSFill 
                            size={14} 
                            color="#8e8e8e" 
                        />
                        <span className="text-sm font-normal text-[#8e8e8e]">{course?.rating}</span>
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
