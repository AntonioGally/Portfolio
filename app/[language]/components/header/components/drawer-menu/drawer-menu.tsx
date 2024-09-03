import React from "react";
import LanguageSwitcher from "../language-switcher/language-switcher";

interface DrawerMenuProps {
    openDrawer: boolean;
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerMenu = ({ openDrawer, setOpenDrawer }: DrawerMenuProps) => {
    return (
        <div className={`fixed top-0 ${openDrawer ? 'right-0' : 'right-[-20rem]'} z-40 h-screen p-4 overflow-y-auto transition-all w-80 bg-[#191919] border-l-[#333333] border-l-[1px]`} tabIndex={-1}>
            <div>
                <button onClick={() => setOpenDrawer(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close menu</span>
                </button>
            </div>

            <div className="mt-10">
                <LanguageSwitcher className="flex justify-end" />
            </div>
        </div>
    )
}

export default DrawerMenu;