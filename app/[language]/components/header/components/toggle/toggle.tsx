import React from "react";

const Toggle = () => {
    return (
        <div className="block md:hidden rounded-full cursor-pointer p-1 border-[#454545] border">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
            </svg>
        </div>
    )
}

export default Toggle;