import FormInput from "../../Inputs/FormInput/FormInput";

const LoginForm = () => {

    return (
        <form>
            <div className="space-y-1">
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
                    Log in
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
