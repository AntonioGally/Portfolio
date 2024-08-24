import React from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const LanguageSwitcher = () => {
    const params = useParams();
    const router = useRouter();

    const languageTextColor = (language: string) => language === params.language ? 'text-[#fff]' : 'text-[#BDBDBD]';
    const changeLanguage = (language: string) => router.push(`/${language}`);

    return (
        <div className="items-center hidden md:flex">
            <span
                onClick={() => changeLanguage('pt-br')}
                className={`${languageTextColor('pt-br')} cursor-pointer mr-3`}
            >
                pt | br
            </span>
            <span
                onClick={() => changeLanguage('en-US')}
                className={`${languageTextColor('en-US')} cursor-pointer`}
            >
                en | US
            </span>
        </div>
    )
}

export default LanguageSwitcher;