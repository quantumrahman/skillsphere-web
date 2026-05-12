import TipCard from "@/components/ui/Cards/TipCard/TipCard";
import { RiAlarmLine } from "@remixicon/react";

const TipsSection = () => {
    return (
        <div className="w-full py-12 border-y border-[#2a2a2a] md:py-20">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="w-full mb-10 text-center flex flex-col items-center justify-center gap-5 xl:justify-start xl:flex-row xl:items-end sm:mb-12 md:mb-16 lg:mb-20">
                    <h1 className="text-[28px] font-semibold text-[#ffffff] leading-tight sm:text-[32px] md:text-[36px]">Learning Strategies.</h1>
                    <p className="text-base font-normal text-[#8e8e8e] leading-relaxed sm:text-xl">Master new skills faster with our expert-backed learning strategies.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TipCard />
                    <TipCard />
                    <TipCard />
                    <TipCard />
                    <TipCard />
                    <TipCard />
                </div>
            </div>
        </div>
    );
};

export default TipsSection;
