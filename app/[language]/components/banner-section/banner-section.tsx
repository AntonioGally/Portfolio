import React from "react";
import TextArea from "./components/text-area/text-area";
import Frames from "./components/frames/frames";

const BannerSection = () => {
    return (
        <div className="mt-6 md:mt-12 w-full flex flex-col lg:flex-row px-6 py-4 sm:px-24 sm:py-6 md:px-28 md:py-8 overflow-hidden sm:overflow-visible">
            <TextArea />
            <Frames />
        </div>
    )
}

export default BannerSection;