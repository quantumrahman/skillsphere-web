import { 
    footerLinks, 
    socialLinks 
} from "@/constants/links";

import Logo from "@/components/ui/Logo/Logo";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full px-5 pt-[60px] pb-6 bg-[#121212] border-t border-[#2a2a2a] md:pt-[80px] md:pb-8 lg:pt-[100px] lg:pb-[40px]">
            <div className="w-full max-w-[1400px] mx-auto">
                <footer className="w-full">
                    <div className="flex items-center justify-between flex-col gap-10 mb-20">
                        <Logo />
                        <div className="flex items-center justify-center gap-6 lg:gap-12 flex-wrap">
                            {footerLinks.map((link) => (
                                <Link 
                                key={link.id} 
                                href={link.path}
                                className="text-base font-normal text-[#8e8e8e] hover:text-[#ffffff]"
                                >
                                    {link.lable}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="w-full mt-[40px] pt-5 border-t border-[#2a2a2a] flex items-center justify-between flex-col gap-4 md:flex-row md:pt-10">
                        <span className="inline-block text-sm font-normal text-[#8e8e8e] text-center">&copy; {new Date().getFullYear()} SkillSphere - All right reserved</span>
                        <div className="w-fit flex items-center justify-center gap-3">
                            {socialLinks.map((social) => (
                                <Link 
                                    key={social.id}
                                    href={'/'}
                                    className="p-0.5 flex items-center justify-center rounded-full bg-[#ffffff] transition-transform duration-300 ease-linear hover:-translate-y-1"    
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
