import UpdateForm from "@/components/ui/Form/UpdateForm/UpdateForm";
import { RiArrowLeftLine } from "@remixicon/react";
import Link from "next/link";

const ProfileUpdatePage = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center px-5 relative">
            <div className="w-full max-w-[390px]">
                <h2 className="text-[28px] font-semibold text-[#ffffff] leading-tight">Update Profile</h2>
                <div className="mt-15">
                    <UpdateForm />
                </div>
            </div>
            <div className="absolute top-5 left-5">
                <Link 
                    href={'/profile'}
                >
                    <RiArrowLeftLine color="#ffffff" />
                </Link>
            </div>
        </div>
    );
};

export default ProfileUpdatePage;
