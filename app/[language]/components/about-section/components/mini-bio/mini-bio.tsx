import React from "react";
import photoOfMe from "@/assets/photo-of-me.jpeg";

interface MiniBioProps {
    title: string;
    description: string;
}

const MiniBio = ({ title, description }: MiniBioProps) => {
    return (
        <div
            style={{ backgroundImage: 'linear-gradient(214.08deg, #0D40F5 13.25%, #57BCCC 49.68%, #28F154 89.31%)', padding: 2 }}
            className="rounded-2xl"
        >
            <div className="w-full md:h-[470px] flex flex-col justify-center p-4 md:p-8 rounded-2xl bg-[#121212]">
                <h3 className="text-[#B5B7C8] text-3xl font-extrabold mb-4">
                    {title}
                </h3>
                <p className="text-base font-redHatDisplay font-normal mb-4">
                    {description}
                </p>

                <div style={{ backgroundImage: `url(${photoOfMe.src})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className="w-full min-h-[200px] md:h-full rounded-md" />
            </div>
        </div>
    )
}

export default MiniBio;