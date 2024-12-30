// Libs
import React from "react";
// Components
import ProjectItem from "./components/project-item/project-item";
import BgBlurLarge from "./components/bg-blur-large/bg-blur-large";
import BgBlurSmall from "./components/bg-blur-small/bg-blur-small";
// Scripts
import { getDictionary } from "@/dictionaries/dictionaries";
// Assets
import nasaAPIs from "@/assets/projects/nasa_apis.png";
import todoList from "@/assets/projects/todo_list.jpeg";
import tonyMoedas from "@/assets/projects/tony_moedas.png";
import starwarsApp from "@/assets/projects/starwars_app.png";

interface ProjectSectionProps {
    language: string;
}

const ProjectSection = async ({ language }: ProjectSectionProps) => {
    const dictionary = await getDictionary(language);

    return (
        <div id="projects" className="px-6 py-4 sm:px-24 sm:py-6 md:px-28 md:py-8 relative">
            <BgBlurLarge />
            <div className="w-full mb-8 grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-4">
                <ProjectItem
                    title={dictionary.projectSection.nasa.title}
                    description={dictionary.projectSection.nasa.description}
                    image={nasaAPIs}
                    url="https://nasapis.netlify.app/#/"
                />
                <ProjectItem
                    title={dictionary.projectSection.todoList.title}
                    description={dictionary.projectSection.todoList.description}
                    image={todoList}
                    url="https://gally-list.netlify.app/#/"
                />
                <ProjectItem
                    title={dictionary.projectSection.tonyMoedas.title}
                    description={dictionary.projectSection.tonyMoedas.description}
                    image={tonyMoedas}
                    url="https://tony-moedas.vercel.app/"
                />
                <ProjectItem
                    title={dictionary.projectSection.starwarsApp.title}
                    description={dictionary.projectSection.starwarsApp.description}
                    image={starwarsApp}
                    url="https://starwars-app.antoniogally.com/"
                />
            </div>
            <BgBlurSmall />
        </div>
    )
}

export default ProjectSection;