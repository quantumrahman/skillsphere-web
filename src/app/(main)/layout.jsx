import { Geist } from "next/font/google";
import "../globals.css";

import Header from "@/components/shared/Header/Header";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans"
});

export const metadata = ({
    title: "SkillSphere - Online Learning Platform",
    description: "Online Learning Platform"
});

const MainLayout = ({ children }) => {
    return (
        <div className={`w-full ${geist.variable} antialiased`}>
            <Header />
            {children}
        </div>
    );
};

export default MainLayout;
