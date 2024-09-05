import React from "react";
// Components
import Media from "./components/media/media";
import MiniBio from "./components/mini-bio/mini-bio";
import FullBio from "./components/full-bio/full-bio";
// Scripts
import { getDictionary } from "@/dictionaries/dictionaries";

interface AboutSectionProps {
    language: string;
}

const AboutSection = async ({ language }: AboutSectionProps) => {
    const dictionary = await getDictionary(language);

    return (
        <div className="px-6 py-4 sm:px-24 sm:py-6 md:px-28 md:py-8 mt-[100px] md:mt-[140px] mb-[200px]">
            <div className="w-full mb-8">
                <Media />
            </div>

            <div className="flex flex-col space-y-8 md:flex-row md:justify-between md:space-x-8 md:space-y-0">
                <div className="w-full">
                    <MiniBio title={dictionary.aboutSection.miniBio.title} description={dictionary.aboutSection.miniBio.description} />
                </div>
                <div className="w-full">
                    <FullBio
                        title={dictionary.aboutSection.fullBio.title}
                        description01={dictionary.aboutSection.fullBio.description01}
                        description02={dictionary.aboutSection.fullBio.description02}
                        description03={dictionary.aboutSection.fullBio.description03}
                    />
                </div>
            </div>
        </div>
    )
}

export default AboutSection;