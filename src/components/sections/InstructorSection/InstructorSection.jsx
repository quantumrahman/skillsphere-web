import InstructorCard from "@/components/ui/Cards/InstructorCard/InstructorCard";

const InstructorSection = () => {
    return (
        <div className="w-full py-12 md:py-20">
            <div className="w-full max-w-[1100px] mx-auto">
                <div className="w-full text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
                    <h1 className="text-[28px] font-semibold text-[#ffffff] sm:text-[32px] md:text-[36px] lg:text-[40px]">Meet Our Elite Educators</h1>
                    <div className="w-full max-w-[800px] mx-auto">
                        <p className="text-base font-normal text-[#8e8e8e] leading-relaxed sm:text-xl">Learn from industry experts dedicated to your growth. Our elite mentors bring real-world experience to help you master every skill.</p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 lg:px-8">
                    <InstructorCard />
                    <InstructorCard />
                    <InstructorCard />
                </div>
            </div>
        </div>
    );
};

export default InstructorSection;
