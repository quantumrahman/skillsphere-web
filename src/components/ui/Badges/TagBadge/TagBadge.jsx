const TagBadge = () => {
    return (
        <div className={`w-fit mx-auto px-5 py-2 backdrop-blur-md rounded-full border border-[#2a2a2a] flex items-center justify-center gap-2`}>
            <div className="w-2 h-2 rounded-full bg-[#8e8e8e]"></div>
            <span className="text-xs font-normal text-[#ffffff]">Start Your Learning Journey</span>
        </div>
    );
};

export default TagBadge;
