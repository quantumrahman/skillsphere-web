export const getInstructors = async () => {
    const res = await fetch(
        "https://skillsphere-rrdev.vercel.app/json/instructors.json"
    );
    return res.json();
};