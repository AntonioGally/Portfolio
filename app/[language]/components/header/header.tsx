'use client'
import Image from "next/image"
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import logo from "@/assets/logo.png";

const Header = () => {
    const params = useParams();
    const router = useRouter();

    const languageTextColor = (language: string) => language === params.language ? 'text-[#fff]' : 'text-[#BDBDBD]';
    const changeLanguage = (language: string) => router.push(`/${language}`);

    return (
        <div className="px-28 py-8 flex items-center justify-between">
            <Image src={logo} alt='Gally logo' />
            <div className="flex items-center">
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
        </div>
    )
}

export default Header;