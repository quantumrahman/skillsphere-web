export const getTips = async () => {
    const res = await fetch(
        "https://skillsphere-rrdev.vercel.app/json/tips.json"
    );
    return res.json();
};
