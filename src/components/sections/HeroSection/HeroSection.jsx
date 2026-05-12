import TagBadge from "@/components/ui/Badges/TagBadge/TagBadge";
import Thumbnail from "@/components/ui/Thumbnail/Thumbnail";

const HeroSection = () => {
    return (
        <div className="w-full min-h-[500px] py-12 md:py-20 border-b border-[#2a2a2a]">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="mb-5">
                    <TagBadge />
                </div>
                <div className="w-full text-center flex flex-col gap-6">
                    <h1 className="text-4xl font-bold uppercase md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text">Upgrade Your Skills. <br /> Upgrade Your Career.</h1>
                    <p className="text-base font-normal text-[#8e8e8e] md:text-lg lg:text-xl">Learn <span className="text-[#ffffff]">practical</span> skills that employers value. <br /> From <span className="text-[#ffffff]">frontend</span> to <span className="text-[#ffffff]">backend</span>, we’ve got you covered.</p>
                    <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                        <button className="px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base font-medium bg-white border border-[#ffffff] text-[#121212] rounded-lg hover:bg-gray-200 hover:border-[#ffffff] transition-all duration-200 cursor-pointer">
                            Get Started
                        </button>
                        <button className="px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 lg:py-3.5 text-sm sm:text-base font-medium border border-[#2a2a2a] text-white rounded-lg hover:bg-white hover:text-[#121212] hover:border-[#ffffff] transition-all duration-200 cursor-pointer">
                            Browse Courses
                        </button>
                    </div>
                </div>
                <Thumbnail />
            </div>
        </div>
    );
};

export default HeroSection;
