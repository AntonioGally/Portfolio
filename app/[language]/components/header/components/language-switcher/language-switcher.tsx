import React from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

type LanguageSwitcherProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const LanguageSwitcher = (props: LanguageSwitcherProps) => {
    const params = useParams();
    const router = useRouter();

    const languageTextColor = (language: string) => language === params.language ? 'text-[#fff] font-bold' : 'text-[#BDBDBD] font-medium';
    const changeLanguage = (language: string) => router.push(`/${language}`);

    return (
        <div className={`items-center ${props.className}`} {...props}>
            <span
                onClick={() => changeLanguage('pt-br')}
                className={`${languageTextColor('pt-br')} cursor-pointer mr-3 text-xl`}
            >
                pt | br
            </span>
            <span
                onClick={() => changeLanguage('en-US')}
                className={`${languageTextColor('en-US')} cursor-pointer text-xl`}
            >
                en | US
            </span>
        </div >
    )
}

export default LanguageSwitcher;