import { RiCheckboxCircleFill, RiErrorWarningFill } from "@remixicon/react";

const Toast = ({ message, type }) => {
    return (
        <div className="p-3 border border-[#2a2a2a] rounded-lg bg-[#121212] flex items-center justify-center gap-2 transition-all duration-300 ease-linear">
            {type === "success" && <RiCheckboxCircleFill size={18} color="#ffffff" />}
            {type === "error" && <RiErrorWarningFill size={18} color="#ffffff" />}
            <p className="text-sm font-normal text-[#ffffff]">{message}</p>
        </div>
    );
};

export default Toast;