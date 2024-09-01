import { useHomeContext } from "@/app/[language]/home.context";
import React from "react"

const Button = () => {
    const { dictionary } = useHomeContext();

    return (
        <button className="rounded-[48px] border-[2px] border-white py-3 px-8 flex items-end hover:opacity-80 transition-opacity">
            <span className="block mr-[10px] font-bold text-xl">{dictionary.bannerSection.button}</span>
            <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.5303 10.9697C11.8232 11.2626 11.8232 11.7374 11.5303 12.0303L6.53033 17.0303C6.23744 17.3232 5.76256 17.3232 5.46967 17.0303L0.46967 12.0303C0.176776 11.7374 0.176776 11.2626 0.46967 10.9697C0.762562 10.6768 1.23744 10.6768 1.53033 10.9697L5.25 14.6893L5.25 6.5C5.25 5.78668 5.02984 4.70001 4.39135 3.81323C3.7804 2.96468 2.75556 2.25 1 2.25C0.585787 2.25 0.25 1.91421 0.25 1.5C0.25 1.08579 0.585787 0.75 1 0.75C3.24444 0.75 4.7196 1.70198 5.60865 2.93677C6.47016 4.13332 6.75 5.54665 6.75 6.5L6.75 14.6893L10.4697 10.9697C10.7626 10.6768 11.2374 10.6768 11.5303 10.9697Z" fill="white" />
            </svg>
        </button>
    )
}

export default Button;