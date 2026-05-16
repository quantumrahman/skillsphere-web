"use client";

import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schema/authSchema";
import { authClient } from "@/lib/auth-client";

const LoginForm = () => {
    
    const [togglePassword, setTogglePassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    });

    const handleOnSubmit = async (formData) => {
        
        const { data, error } = await authClient.signIn.email({
            email: formData?.email,
            password: formData?.password,
        });

        if (data) {
            console.log(data);
        } else {
            console.log(error);
        };

    };

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="space-y-1">
                <div className="space-y-2">
                    <input 
                        type="text" 
                        name="email"
                        placeholder="youremail@example.com"
                        className={`w-full bg-[#292929]/30 border rounded-lg text-base font-normal text-[#ffffff] focus:outline-none caret-[#ffffff] placeholder:text-[#8e8e8e] p-3 ${errors.email?.message ? "border-red-400" : "border-[#2a2a2a]"}`}
                        {...register('email')}
                    />
                    <div className="w-full h-5 flex items-center justify-end">
                        <span className="text-sm font-normal text-red-400">{errors.email?.message}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <div className="w-full relative">
                        <input 
                            type={togglePassword ? "text" : "password"}
                            name="password"
                            placeholder="password"
                            className={`w-full bg-[#292929]/30 border rounded-lg text-base font-normal text-[#ffffff] focus:outline-none caret-[#ffffff] placeholder:text-[#8e8e8e] py-3 pl-3 pr-12 ${errors.password?.message ? "border-red-400" : "border-[#2a2a2a]"}`}
                            {...register('password')}
                        />
                        <button 
                            type="button"
                            aria-label="button"
                            role="button"
                            onClick={() => setTogglePassword(prev => !prev)}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                        >
                            {togglePassword
                                ? <RiEyeOffLine color="#8e8e8e" />
                                : <RiEyeLine color="#8e8e8e" />
                            }
                        </button>
                    </div>
                    <div className="w-full h-5 flex items-center justify-end">
                        <span className="text-sm font-normal text-red-400">{errors.password?.message}</span>
                    </div>
                </div>
                <button
                    type="submit"
                    aria-label="submit"
                    role="submit"
                    className="w-full bg-[#ffffff] py-[10px] text-base font-semibold text-[#121212] transition-all duration-200 ease-in-out cursor-pointer rounded-lg hover:bg-gray-200"
                >
                    Log in
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
