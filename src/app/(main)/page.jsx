import CTASection from "@/components/sections/CTASection/CTASection";
import HeroSection from "@/components/sections/HeroSection/HeroSection";
import InstructorSection from "@/components/sections/InstructorSection/InstructorSection";
import PopularSection from "@/components/sections/PopularSection/PopularSection";
import TipsSection from "@/components/sections/TipsSection/TipsSection";

const HomePage = () => {
    return (
        <div className="w-full px-5">
            <HeroSection />
            <PopularSection />
            <TipsSection />
            <InstructorSection />
            <CTASection />
            {/* <div className="w-full max-w-[1100px] mx-auto">
                <div className="w-full text-center">
                    <h1 className="text-[28px] font-semibold text-[#ffffff] sm:text-[32px] md:text-[36px] lg:text-[40px]">Meet Our Elite Educators</h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
                    <InstructorCard />
                    <InstructorCard />
                    <InstructorCard />
                </div>
            </div> */}
            {/* <p className="text-base font-normal text-[#8e8e8e] md:text-xl">Join 10k+ students and learn from industry-leading experts to boost your career.</p> */}
        </div>
    );
};

export default HomePage;
