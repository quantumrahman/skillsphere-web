"use client";

import { authClient } from "@/lib/auth-client";
import { userSchema } from "@/schema/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const UpdateForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(userSchema)
    });

    const handleOnSubmit = async (formData) => {
        
        await authClient.updateUser({
            image: formData?.photo,
            name: formData?.name
        });

    };

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <div className="space-y-1">
                <div className="space-y-2">
                    <input 
                        type="text" 
                        name="name"
                        placeholder="update name"
                        className={`w-full bg-[#292929]/30 border rounded-lg text-base font-normal text-[#ffffff] focus:outline-none caret-[#ffffff] placeholder:text-[#8e8e8e] p-3 ${errors.name?.message ? "border-red-400" : "border-[#2a2a2a]"}`}
                        {...register('name')}
                    />
                    <div className="w-full h-5 flex items-center justify-end">
                        <span className="text-sm font-normal text-red-400">{errors.name?.message}</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <input 
                        type="text" 
                        name="photo"
                        placeholder="photo url"
                        className={`w-full bg-[#292929]/30 border rounded-lg text-base font-normal text-[#ffffff] focus:outline-none caret-[#ffffff] placeholder:text-[#8e8e8e] p-3 ${errors.photo?.message ? "border-red-400" : "border-[#2a2a2a]"}`}
                        {...register('photo')}
                    />
                    <div className="w-full h-5 flex items-center justify-end">
                        <span className="text-sm font-normal text-red-400">{errors.photo?.message}</span>
                    </div>
                </div>
                <button
                    type="submit"
                    aria-label="submit"
                    role="submit"
                    className="w-full bg-[#ffffff] py-[10px] text-base font-semibold text-[#121212] transition-all duration-200 ease-in-out cursor-pointer rounded-lg hover:bg-gray-200"
                >
                    Save changes
                </button>
            </div>
        </form>
    );
};

export default UpdateForm;
