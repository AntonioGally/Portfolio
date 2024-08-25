'use client'
import { useHomeContext } from "@/app/[language]/home.context";
import React from "react";

const TextArea = () => {
    const { dictionary } = useHomeContext();

    return (
        <div className="w-full md:max-w-[50%]">
            <div className="hidden md:block p-2 mb-2 rounded-lg border border-[#454545] w-fit bg-[#0B0B0B]">
                <span className="font-redHatDisplay font-semibold text-xl bg-gradient-to-tr from-white to-[#595959] bg-clip-text text-transparent">
                    {dictionary.bannerSection.jobTitle}
                </span>
            </div>

            <div className="mt-1 text-3xl md:text-7xl font-bold text-white flex flex-col">
                <span>
                    {dictionary.bannerSection.textRows[0]}
                </span>
                <span>
                    {dictionary.bannerSection.textRows[1]}
                </span>
                <span>
                    {dictionary.bannerSection.textRows[2]}
                    <span className="font-fraunces italic font-semibold text-2xl md:text-6xl bg-gradient-to-tr from-[#D9D9D9] to-[#999999] bg-clip-text text-transparent">
                        {' '}{dictionary.bannerSection.textRows[3]}
                    </span>
                </span>
            </div>
        </div>
    )
}

export default TextArea;