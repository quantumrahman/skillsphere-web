"use client";

import { RiGoogleFill } from "@remixicon/react";

import SignupForm from "@/components/ui/Form/SignupForm/SignupForm";
import Logo from "@/components/ui/Logo/Logo";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {

    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        console.log(data);
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center px-5">
            <div className="w-full max-w-[390px]">
                <div className="flex flex-col items-center gap-6 mb-5">
                    <Logo />
                    <div className="space-y-3 text-center">
                        <h2 className="text-[28px] font-semibold text-[#ffffff] leading-tight">Start Learning Today!</h2>
                        <p className="text-base font-no text-[#8e8e8e] leading-snug">Create your account and take the next step in your skill journey.</p>
                    </div>
                </div>
                <div className="mt-20">
                    <SignupForm />
                </div>
                <div className="w-full flex items-center justify-center gap-4 my-5">
                    <div className="w-full h-px bg-[#2a2a2a]"></div>
                    <span className="text-sm font-normal text-[#8e8e8e] uppercase">or</span>
                    <div className="w-full h-px bg-[#2a2a2a]"></div>
                </div>
                <button 
                    onClick={handleGoogleLogin}
                    className="w-full py-3 flex items-center justify-center gap-3 bg-transparent border border-[#2a2a2a] rounded-lg text-base font-medium text-[#ffffff] cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#ffffff] hover:border-[#ffffff] hover:text-[#121212]"
                >
                    <RiGoogleFill size={22} />
                    Continue with Google
                </button>
                <span className="text-sm font-medium text-[#8e8e8e] flex items-center justify-center gap-1 mt-5">
                    Already have an account? 
                    <Link 
                        href={'/auth/login'}
                        className="text-[#ffffff]"
                    >
                        Login.
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default SignUpPage;
