import CourseCard from "@/components/ui/Cards/CourseCard/CourseCard";
import { getCourses } from "@/lib/get.courses";
import { RiSearchLine } from "@remixicon/react";

const CoursesSection = async () => {
    const courses = await getCourses();

    return (
        <div className="w-full py-12 md:py-20 border-b border-[#2a2a2a]">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="w-full mb-10 sm:mb-12 md:mb-16 lg:mb-20 flex flex-col gap-2">
                    <h1 className="text-[28px] font-semibold text-[#ffffff] sm:text-[32px] md:text-[36px] lg:text-[40px]">Master In-Demand Skills</h1>
                    <p className="text-base font-normal text-[#8e8e8e] leading-relaxed sm:text-xl">Learn from <span className="text-[#ffffff]">industry experts</span> and bridge the gap between theory and your <span className="text-[#ffffff]">career goals.</span></p>
                    <div className="w-full relative mt-4">
                        <input 
                            id="search" 
                            type="text" 
                            name="search" 
                            placeholder="Search course..." 
                            className="w-full bg-[#292929]/30 border border-[#2a2a2a] rounded-lg py-3 pl-12 text-base font-normal text-[#ffffff] focus:outline-none caret-[#ffffff] placeholder:text-[#8e8e8e]" 
                        />
                        <div className="absolute top-1/2 left-3.5 transform -translate-y-1/2">
                            <RiSearchLine size={20} color="#8e8e8e" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
                    {courses.map((course) => (
                        <CourseCard key={course.id} course={course}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CoursesSection;
