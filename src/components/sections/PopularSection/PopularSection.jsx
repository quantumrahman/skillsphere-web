import CourseCard from "@/components/ui/Cards/CourseCard/CourseCard";
import { getCourses } from "@/lib/get.courses";

const PopularSection = async () => {
    const courses = await getCourses();

    const popularCourses = courses.filter((course) => course.rating > 4.7).slice(0, 3);

    return (
        <div className="w-full py-12 md:py-20">
            <div className="w-full max-w-[1200px] mx-auto">
                <div className="w-full text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                    <h1 className="text-[28px] font-semibold text-[#ffffff] sm:text-[32px] md:text-[36px] lg:text-[40px]">Our Most Popular Courses</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
                    {popularCourses.map((course) => (
                        <CourseCard key={course.id} course={course}/>
                    ))}
                </div>
                <div className="w-full flex items-center justify-center flex-col">
                    <div className="w-full max-w-[400px] mx-auto text-center my-8">
                        <p className="text-base font-normal text-[#8e8e8e] leading-relaxed sm:text-xl">Join <span className="text-[#ffffff]">10k+ students</span> and learn from <span className="text-[#ffffff]">industry-leading experts</span> to boost your career.</p>
                    </div>
                    <button className="w-fit h-[48px] px-3.5 rounded-md bg-[#ffffff] border border-[#ffffff] text-base font-normal text-[#121212] cursor-pointer transition-colors duration-300 ease-in-out hover:bg-[#121212] hover:text-[#ffffff] sm:px-4">
                        View all Courses
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PopularSection;
