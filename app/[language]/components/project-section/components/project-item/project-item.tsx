// Libs
import { StaticImageData } from "next/image";
import React from "react";

interface ProjectItemProps {
    image: StaticImageData;
    title: string;
    description: string;
    url: string;
}

const ProjectItem = ({ image, title, description, url }: ProjectItemProps) => {
    return (
        <a target="_blank" href={url}>
            <div className="w-full h-[300px] md:h-[400px] flex items-end bg-center bg-cover border border-[#454545] rounded-md hover:opacity-80 transition-opacity" style={{ backgroundImage: `url(${image.src})` }}>
                <div className="w-full h-full bg-black bg-opacity-50 rounded-md p-4">
                    <h2 className="font-extrabold text-white m-0 mb-3 text-2xl md:text-5xl">{title}</h2>
                    <span className="text-sm md:text-base font-medium font-redHatDisplay">
                        {description}
                    </span>
                </div>
            </div>
        </a>
    )
}

export default ProjectItem;