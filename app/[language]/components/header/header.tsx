'use client'
import Image from "next/image"
import LanguageSwitcher from "./components/language-switcher/language-switcher";

import logo from "@/assets/logo.png";
import Toggle from "./components/toggle/toggle";
import Navbar from "../navbar/navbar";

const Header = () => {

    return (
        <div className="flex items-center justify-between px-6 py-4 sm:px-24 sm:py-6 md:px-28 md:py-8">
            <Image src={logo} alt='Gally logo' />
            <Navbar />
            <div>
                <LanguageSwitcher />
                <Toggle />
            </div>
        </div>
    )
}

export default Header;