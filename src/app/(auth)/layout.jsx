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
        <div className={`w-full ${geist.variable} antialiased`}>
            {children}
        </div>
    );
};

export default AuthLayout;
