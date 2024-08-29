import React from "react";
import style from "./frames.module.css"

const Frames = () => {
    return (
        <div className={style.framesWrapper}>
            <div
                id="frame_01"
                className={`m-5 w-[300px] h-[180px] md:w-[600px] md:h-[380px] border-b-[1px]/[0.3] border-r-[1px] border-[#fff]/[0.3] rounded-[16px] md:rounded-[30px] absolute z-10 flex flex-col justify-between ${style.perspectiveView}`}
            >
                <div id="frame_01_header" className="rounded-t-[16px] md:rounded-t-[36px] w-full h-[15px] md:h-[30px] flex items-center justify-start px-7 bg-[#323335] space-x-3">
                    <div className="w-[8px] h-[8px] md:w-[15px] md:h-[15px] rounded-full bg-[#ED6151]" />
                    <div className="w-[8px] h-[8px] md:w-[15px] md:h-[15px] rounded-full bg-[#535355]" />
                    <div className="w-[8px] h-[8px] md:w-[15px] md:h-[15px] rounded-full bg-[#4DBE34]" />
                </div>
                <div className="py-8 px-8 md:py-16 md:px-16 bg-gradient-to-r from-[#7e7e7e] to-[#000000] bg-clip-text text-transparent">
                    <span className="font-ibmPlexMono text-base md:text-3xl">
                        data: {'{'} <br />
                        <span className="block ml-8">name: {'"Antônio Gally"'}</span>
                        {'}'}
                    </span>
                </div>
            </div>
            <div
                id="frame_01"
                style={{ transform: 'perspective(3200px) rotateY(-30deg) rotateX(40deg)' }}
                className={`m-5 w-[300px] h-[180px] md:w-[600px] md:h-[380px] border-b-[1px]/[0.3] border-r-[1px] border-[#fff]/[0.3] rounded-[16px] md:rounded-[30px] flex flex-col justify-between ${style.bottomPerspectiveView}`}
            >
                <div id="frame_01_header" className="rounded-t-[16px] md:rounded-t-[36px] w-full h-[15px] md:h-[30px] flex items-center justify-start px-7 bg-[#323335] space-x-3">
                    <div className="w-[8px] h-[8px] md:w-[15px] md:h-[15px] rounded-full bg-[#ED6151]" />
                    <div className="w-[8px] h-[8px] md:w-[15px] md:h-[15px] rounded-full bg-[#535355]" />
                    <div className="w-[8px] h-[8px] md:w-[15px] md:h-[15px] rounded-full bg-[#4DBE34]" />
                </div>
                <div className="py-8 px-8 md:py-16 md:px-16 bg-gradient-to-r from-[#7e7e7e] to-[#000000] bg-clip-text text-transparent">
                    <span className="font-ibmPlexMono text-base md:text-3xl">
                        data: {'{'} <br />
                        <span className="block ml-8">work: {'"Looqbox"'}</span>
                        {'}'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Frames;