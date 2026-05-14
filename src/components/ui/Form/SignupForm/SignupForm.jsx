import FormInput from "../../Inputs/FormInput/FormInput";

const SignupForm = () => {

    return (
        <form>
            <div className="space-y-1">
                <div className="flex items-center justify-center gap-5">
                    <div className="space-y-2">
                        <FormInput
                            type="text"
                            name="name"
                            placeholder="your name"
                        />
                        <div className="w-full h-5 flex items-center justify-end">
                            {/* <span className="text-sm font-normal text-[#8e8e8e]">Error</span> */}
                        </div>
                    </div>
                    <div className="space-y-2">
                        <FormInput
                            type="text"
                            name="photo"
                            placeholder="your photo url"
                        />
                        <div className="w-full h-5 flex items-center justify-end">
                            {/* <span className="text-sm font-normal text-[#8e8e8e]">Error</span> */}
                        </div>
                    </div>
                </div>
                <div className="space-y-2">
                    <FormInput
                        type="text"
                        name="email"
                        placeholder="youremail@gmail.com"
                    />
                    <div className="w-full h-5 flex items-center justify-end">
                        {/* <span className="text-sm font-normal text-[#8e8e8e]">Error</span> */}
                    </div>
                </div>
                <div className="space-y-2">
                    <FormInput
                        type="password"
                        name="password"
                        placeholder="password"
                        />
                    <div className="w-full h-5 flex items-center justify-end">
                        {/* <span className="text-sm font-normal text-[#8e8e8e]">Error</span> */}
                    </div>
                </div>
                <button
                    type="submit"
                    aria-label="submit"
                    role="submit"
                    className="w-full bg-[#ffffff] py-[10px] text-base font-semibold text-[#121212] transition-all duration-200 ease-in-out cursor-pointer rounded-lg hover:bg-gray-200"
                >
                    Sign Up
                </button>
            </div>
        </form>
    );
};

export default SignupForm;
