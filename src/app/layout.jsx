import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
    subsets: ["latin"],
    variable: "--font-geist-sans"
});

export const metadata = {
    title: "SkillSphere",
    description: "Online learning platform."
};

const RootLayout = ({ children }) => {
    return (
        <html
            lang="en"
            className={`${geist.variable} h-full antialiased`}
        >
            <body className="h-full bg-[#000000]">
                {children}
            </body>
        </html>
    );
};

export default RootLayout;
