// Libs
import Image, { StaticImageData } from "next/image";
import React from "react";

interface ProjectItemProps {
    image: StaticImageData;
    title: string;
    description: string;
    url: string;
    size?: "small" | "default";
}

const ProjectItem = ({ image, title, description, url, size = "default" }: ProjectItemProps) => {
    return (
        <a target="_blank" href={url}>
            <div className={`w-full ${size === "small" ? "md:h-[470px]" : ""} flex flex-col justify-center p-4 md:p-10 border border-[#454545] rounded-md hover:opacity-80 transition-opacity`}>
                <Image className="mb-6 rounded-sm w-full" height={400} src={image} alt="Nasa api's project" />

                <h2 className="font-extrabold text-white m-0 mb-3 text-2xl md:text-5xl">{title}</h2>
                <span className="text-sm md:text-base font-normal font-redHatDisplay">
                    {description}
                </span>
            </div>
        </a>
    )
}

export default ProjectItem;