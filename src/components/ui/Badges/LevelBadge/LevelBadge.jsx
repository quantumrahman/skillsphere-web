const LevelBadges = ({ level }) => {

    const levelStyles = {
        beginner: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
        intermediate: "bg-amber-500/10 border-amber-500/30 text-amber-400",
        advanced: "bg-rose-500/10 border-rose-500/30 text-rose-400",
    };

    return (
        <div className={`px-2 py-0.5 backdrop-blur-md rounded-full border ${levelStyles[level]}`}>
            <span className="text-xs font-normal capitalize">{level}</span>
        </div>
)
};

export default LevelBadges;
