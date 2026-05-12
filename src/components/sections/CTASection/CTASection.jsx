import { RiArrowRightLongLine } from "@remixicon/react";

const CTASection = () => {
    return (
        <div className="w-full py-12 md:py-20">
            <div className="w-full max-w-[1100px] mx-auto">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">Start Learning with Skillsphere Today</h2>
                    <p className="mt-4 text-sm sm:text-base md:text-lg text-[#8e8e8e] leading-relaxed max-w-2xl mx-auto">Join thousands of learners and upgrade your skills with real-world projects, modern courses, and expert instructors.</p>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <button className="px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base font-medium border border-[#2a2a2a] text-white rounded-lg hover:bg-white hover:text-[#121212] hover:border-[#ffffff] transition-all duration-200 cursor-pointer flex items-center justify-between gap-2">
                        Get Started
                        <RiArrowRightLongLine size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CTASection;
