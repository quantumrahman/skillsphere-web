const UpdateForm = () => {

    // ${errors.email?.message ? "border-red-400" : "border-[#2a2a2a]"}

    return (
        <form>
            <div className="space-y-1">
                <div className="space-y-2">
                    <input 
                        type="text" 
                        name="email"
                        placeholder="update name"
                        className={`w-full bg-[#292929]/30 border rounded-lg text-base font-normal text-[#ffffff] focus:outline-none caret-[#ffffff] placeholder:text-[#8e8e8e] p-3 border-[#2a2a2a]`}
                    />
                    <div className="w-full h-5 flex items-center justify-end">
                        {/* <span className="text-sm font-normal text-red-400">{errors.email?.message}</span> */}
                    </div>
                </div>
                <div className="space-y-2">
                    <input 
                        type="text" 
                        name="email"
                        placeholder="photo url"
                        className={`w-full bg-[#292929]/30 border rounded-lg text-base font-normal text-[#ffffff] focus:outline-none caret-[#ffffff] placeholder:text-[#8e8e8e] p-3 border-[#2a2a2a]`}
                    />
                    <div className="w-full h-5 flex items-center justify-end">
                        {/* <span className="text-sm font-normal text-red-400">{errors.email?.message}</span> */}
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
