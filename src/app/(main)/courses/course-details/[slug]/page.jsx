import { 
    RiArrowDownSLine, 
    RiArrowLeftLongLine, 
    RiBookmarkLine, 
    RiPriceTagLine, 
    RiStarHalfSFill, 
    RiStarSFill, 
    RiTimeLine, 
    RiUserLine 
} from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";

const CourseDetailsPage = () => {
    return (
        <div className="w-full px-5 py-12 md:py-20">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="flex items-center gap-4 mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                    <Link
                        href={'/courses'}
                        className="transform transition-transform duration-300 ease-in-out hover:-translate-x-1"
                    >
                        <RiArrowLeftLongLine color="#ffffff" />
                    </Link>
                    <h1 className="text-[28px] font-semibold text-[#ffffff] sm:text-[32px] md:text-[36px] lg:text-[40px]">Back to Courses</h1>
                </div>
                <div className="flex flex-col justify-center gap-5 md:gap-6 lg:flex-row">
                    <div className="flex-1 min-h-[200px] border border-[#2a2a2a] rounded-lg md:flex-2">
                        <div className="w-full px-5 pt-5 md:px-[30px] md:pt-[30px]">
                            <div className="w-full aspect-video relative rounded-lg overflow-hidden">
                                <Image 
                                    src="/images/rust_systems_programming.png"
                                    alt="course image"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="w-full p-5 md:p-[30px]">
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-semibold text-[#ffffff] sm:text-2xl md:text-3xl lg:text-4xl">React.js Architecture & Design Patterns</h2>
                                <p className="text-sm font-normal text-[#8e8e8e] sm:text-base md:text-lg lg:text-xl">Master clean code, custom hooks, and performance optimization in React.</p>
                            </div>
                            <div className="w-full h-px bg-[#2a2a2a] my-5"></div>
                            <div className="w-full flex items-center gap-2 flex-wrap sm:gap-3 md:gap-5 lg:gap-6">
                                <p className="text-xs font-normal text-[#ffffff] sm:text-sm md:text-base">Instructor: <span className="text-[#8e8e8e]">Rakibul Rahman</span></p>
                                <div className="w-px h-5 bg-[#2a2a2a]"></div>
                                <div className="flex items-center gap-2">
                                    <RiBookmarkLine size={20} color="#ffffff" />
                                    <span className="text-xs font-normal text-[#8e8e8e] mt-0.5 sm:text-sm md:text-base">Frontend Development</span>
                                </div>
                                <div className="w-px h-5 bg-[#2a2a2a]"></div>
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-0.5">
                                        <RiStarSFill size={20} color="#ffffff" />
                                        <RiStarSFill size={20} color="#ffffff" />
                                        <RiStarSFill size={20} color="#ffffff" />
                                        <RiStarHalfSFill size={20} color="#ffffff" />
                                    </div>
                                    <span className="text-xs font-normal text-[#8e8e8e] mt-0.5 sm:text-sm md:text-base">4.5+</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border-t border-[#2a2a2a] p-5 flex flex-col gap-5 md:p-[30px]">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-normal text-white sm:text-base md:text-lg lg:text-xl ">Introduction & Fundamentals</p>
                                <RiArrowDownSLine size={20} color="#8e8e8e" />
                            </div>
                            <div className="w-full h-px bg-[#2a2a2a]"></div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-normal text-white sm:text-base md:text-lg lg:text-xl ">Core Concepts & Deep Dive</p>
                                <RiArrowDownSLine size={20} color="#8e8e8e" />
                            </div>
                            <div className="w-full h-px bg-[#2a2a2a]"></div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-normal text-white sm:text-base md:text-lg lg:text-xl ">Advanced Techniques & Optimization</p>
                                <RiArrowDownSLine size={20} color="#8e8e8e" />
                            </div>
                            <div className="w-full h-px bg-[#2a2a2a]"></div>
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-normal text-white sm:text-base md:text-lg lg:text-xl ">Real-world Project & Deployment</p>
                                <RiArrowDownSLine size={20} color="#8e8e8e" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 min-h-[200px]">
                        <div className="w-full border border-[#2a2a2a] rounded-lg p-5 top-10 md:p-[30px] lg:sticky">
                            <h2 className="text-base font-semibold text-white mb-6 sm:text-lg md:text-xl lg:text-2xl">Course Information</h2>
                            <div className="space-y-3 md:space-y-4 lg:space-y-5">
                                <div className="w-full border-t border-dashed border-[#2a2a2a]"></div>
                                <div className="flex items-center gap-3">
                                    <RiUserLine size={20} color="#ffffff" />
                                    <span className="text-xs text-[#ffffff] sm:text-sm md:text-base">Instructor:</span>
                                    <span className="text-xs sm:text-sm md:text-base text-[#8e8e8e]">Rakibul Rahman</span>
                                </div>
                                <div className="w-full border-t border-dashed border-[#2a2a2a]"></div>
                                <div className="flex items-center gap-3">
                                    <RiTimeLine size={20} color="#ffffff" />
                                    <span className="text-xs text-[#ffffff] sm:text-sm md:text-base">Duration:</span>
                                    <span className="text-xs sm:text-sm md:text-base text-[#8e8e8e]">12 hours</span>
                                </div>
                                <div className="w-full border-t border-dashed border-[#2a2a2a]"></div>
                                <div className="flex items-center gap-3">
                                    <RiPriceTagLine size={20} color="#ffffff" />
                                    <span className="text-xs text-[#ffffff] sm:text-sm md:text-base">Course Level:</span>
                                    <span className="text-xs sm:text-sm md:text-base text-[#8e8e8e]">Beginner</span>
                                </div>
                            </div>
                            <button className="w-full mt-10 px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base font-medium bg-white border border-[#ffffff] text-[#121212] rounded-lg hover:bg-gray-200 hover:border-[#ffffff] transition-all duration-200 cursor-pointer">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;
