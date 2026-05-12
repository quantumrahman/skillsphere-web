export const getCourses = async () => {
    const res = await fetch(
        "https://skillsphere-rrdev.vercel.app/json/courses.json"
    );
    return res.json();
};