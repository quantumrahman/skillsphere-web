import { 
    RiAlarmLine, 
    RiBrainLine, 
    RiCalendarLine, 
    RiGitRepositoryLine, 
    RiLightbulbLine, 
    RiLineChartLine 
} from "@remixicon/react";

const TipCard = ({ tip }) => {
    const iconsVariant = {
        clock: <RiAlarmLine size={40} color="#ffffff" />,
        book: <RiGitRepositoryLine size={40} color="#ffffff" />,
        brain: <RiBrainLine size={40} color="#ffffff" />,
        graph: <RiLineChartLine size={40} color="#ffffff" />,
        light: <RiLightbulbLine size={40} color="#ffffff" />,
        calendar: <RiCalendarLine size={40} color="#ffffff" />
    };

    return (
        <div className="w-full min-h-[50px] bg-transparent border border-[#2a2a2a] rounded-lg p-1">
            <div className="w-full h-full bg-linear-to-t from-transparent to-[#2a2a2a] rounded-md p-4">
                <div className="w-full mb-6 sm:mb-[75px] md:mb-[55px]">
                    {iconsVariant[tip?.icon]}
                </div>
                <div className="w-full flex flex-col gap-1 md:gap-2 flex-initial">
                    <h3 className="text-base font-semibold text-[#ffffff] md:text-xl">{tip?.title}</h3>
                    <p className="text-sm font-normal text-[#8e8e8e]">{tip?.description}</p>
                </div>
            </div>
        </div>
    );
};

export default TipCard;
