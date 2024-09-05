import React from "react";

interface FullBioProps {
    title: string;
    description01: string;
    description02: string;
    description03: string;
}

const FullBio = ({ title, description01, description02, description03 }: FullBioProps) => {
    return (
        <div className="w-full md:h-[470px] flex flex-col p-4 md:p-8 rounded-2xl border border-[#454545]">
            <h3 className="text-[#B5B7C8] text-3xl font-extrabold mb-4">
                {title}
            </h3>
            <p className="text-base font-redHatDisplay font-normal mb-2">
                {description01}
            </p>
            <p className="text-base font-redHatDisplay font-normal mb-2">
                {description02}
            </p>
            <p className="text-base font-redHatDisplay font-normal">
                {description03}
            </p>
        </div>
    )
}

export default FullBio;