import React, { PropsWithChildren } from "react";
import Image from "next/image";
import ghCommits from "@/assets/gh_commits.png";

const Wrapper = ({ children }: PropsWithChildren) => {
    return (
        <div id="contact" className="px-6 py-4 sm:px-24 sm:py-6 md:px-28 md:py-8 mt-[100px] md:mt-[140px] mb-[200px]">
            <div className="border-none md:border-solid border border-[#454545] md:py-20 rounded-2xl relative">
                <div className="p-1 rounded-full border-[2px] border-[#454545] w-fit mb-5 md:mb-0 relative md:absolute md:top-[-45px] md:left-[20%]">
                    <Image src={'https://avatars.githubusercontent.com/u/68209906?v=4'} width={80} height={80} alt="profile image" className="rounded-full" />
                </div>

                {children}

                <div className="w-full ">
                    <Image src={ghCommits} width={350} alt="github illustration" className="hidden md:block absolute bottom-0 right-0" />
                </div>
            </div>
        </div>
    )
}

export default Wrapper;