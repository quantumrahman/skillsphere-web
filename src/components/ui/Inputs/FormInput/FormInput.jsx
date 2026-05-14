"use client";

import { RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import { useState } from "react";

const FormInput = ({
    type = "text",
    placeholder = "text",
    name = "text",
    value,
    onChange
}) => {

    const [togglePassword, setTogglePassword] = useState(false);

    const handleTogglePassword = () => {
        setTogglePassword((prev) => !prev);
    };

    const inputType = type === "password" ? (togglePassword ? "text" : "password") : type;
 
    return (
        <div className="w-full relative">
            <input 
                id="email"
                type={inputType}
                aria-label="input"
                role="input"
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={onChange}
                autoComplete="off"
                className={`w-full bg-[#292929]/30 border border-[#2a2a2a] rounded-lg text-base font-normal text-[#ffffff] focus:outline-none caret-[#ffffff] placeholder:text-[#8e8e8e] 
                    ${type === "password" 
                        ? "py-3 pl-3 pr-12" 
                        : "p-3"
                    }
                `}
            />
            {type === "password" &&
                <button 
                    type="button"
                    aria-label="button"
                    role="button"
                    onClick={handleTogglePassword}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
                >
                    {togglePassword
                        ? <RiEyeOffLine color="#8e8e8e" />
                        : <RiEyeLine color="#8e8e8e" />
                    }
                </button>
            }
        </div>
    );
};

export default FormInput;
