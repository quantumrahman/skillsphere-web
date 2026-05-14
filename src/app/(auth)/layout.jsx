import { Geist } from "next/font/google";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans"
});

export const metadata = {
    title: "SkillSphere - Authentication",
    description: "SkillSphere Authectication."
};

const AuthLayout = ({ children }) => {
    return (
        <div className={`w-full ${geist.variable} antialiased relative`}>
            {children}
            <footer className="absolute bottom-5 left-1/2 transform -translate-x-1/2">
                <span className="inline-block text-sm font-normal text-[#8e8e8e] text-center">
                    &copy; {new Date().getFullYear()} SkillSphere - All right reserved
                </span>
            </footer>
        </div>
    );
};

export default AuthLayout;
