import React from "react";
// Components
import Image from "next/image";
// Assets
import logo from "@/assets/logo.png";
import andreLogo from "@/assets/design_andre.png";
// Scripts
import { getDictionary } from "@/dictionaries/dictionaries";

interface FooterProps {
    language: string;
}

const Footer = async ({ language }: FooterProps) => {
    const dictionary = await getDictionary(language);

    return (
        <footer className="w-[100vw] bg-[#191919]">
            <div className="w-full max-w-[1920px] flex flex-col items-start space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0 py-6 px-6 sm:px-24 md:px-28">
                <a href="#header">
                    <Image src={logo} alt='Gally logo' width={50} />
                </a>

                <a href="https://www.linkedin.com/in/antonio-gally/" className="text-sm" target="_blank">
                    {dictionary.footer.developed}
                </a>

                <div className="flex items-center">
                    <a href="https://www.linkedin.com/in/andr%C3%A9-alcantara/" className="text-sm" target="_blank">
                        {dictionary.footer.designed}
                    </a>
                    <Image src={andreLogo} alt="Andre design logo" className="ml-2" />
                </div>
            </div>
        </footer>
    )
}

export default Footer;