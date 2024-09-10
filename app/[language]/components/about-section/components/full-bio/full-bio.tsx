import React from "react";

interface FullBioProps {
    title: string;
    description01: string;
    description02: string;
    button: string;
}

const FullBio = ({ title, description01, description02, button }: FullBioProps) => {
    return (
        <div className="w-full md:h-[470px] flex flex-col justify-between p-4 md:p-8 rounded-2xl border border-[#454545]">
            <div className="flex flex-col">
                <h3 className="text-[#B5B7C8] text-3xl font-extrabold mb-4">
                    {title}
                </h3>
                <p className="text-base font-redHatDisplay font-normal mb-2">
                    {description01}
                </p>
                <p className="text-base font-redHatDisplay font-normal mb-2">
                    {description02}
                </p>
            </div>
            <div>
                <a href="https://github.com/AntonioGally" target="_blank">
                    <button className="font-bold text-xl text-[#121212] rounded-[48px] bg-white py-3 px-8 flex items-center hover:opacity-80 transition-opacity">
                        {button}
                    </button >
                </a>
            </div>
        </div>
    )
}

export default FullBio;