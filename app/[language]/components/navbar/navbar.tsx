import React, { useState } from "react";
import { useHomeContext } from "../../home.context";

const Navbar = () => {
    const { dictionary } = useHomeContext();
    const [activeLink, setActiveLink] = useState<string>('projects');

    const getActiveLinkStyles = (link: string) => activeLink === link ? 'text-white underline font-bold' : 'font-semi-bold'

    return (
        <div className="bg-gradient-to-r from-[#333333]/[0.28] to-[#7B7B7B]/[0.98] p-[1px] rounded-[74px] fixed left-0 right-[61px] m-auto hidden w-[437px] md:block lg:w-[557px]">
            <ul className="font-medium flex px-8 py-3 rounded-[74px] space-x-6 lg:space-x-16 bg-[#191919]">
                <li>
                    <a href="#projects" className={`${getActiveLinkStyles('projects')} text-[#BDBDBD] text-xl`} onClick={() => setActiveLink('projects')}>
                        {dictionary.navbar.projects}
                    </a>
                </li>
                <li>
                    <a href="#about" className={`${getActiveLinkStyles('about')} text-[#BDBDBD] text-xl`} onClick={() => setActiveLink('about')}>
                        {dictionary.navbar.about}
                    </a>
                </li>
                <li>
                    <a href="#tech" className={`${getActiveLinkStyles('tech')} text-[#BDBDBD] text-xl`} onClick={() => setActiveLink('tech')}>

                        {dictionary.navbar.tech_tendencies}
                    </a>
                </li>
                <li>
                    <a href="#contact" className={`${getActiveLinkStyles('contact')} text-[#BDBDBD] text-xl`} onClick={() => setActiveLink('contact')}>
                        {dictionary.navbar.contact}
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;

// 