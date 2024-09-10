import React from "react";
import TextArea from "./components/text-area/text-area";
import Frames from "./components/frames/frames";
import Divider from "./components/divider/divider";

const BannerSection = () => {
    return (
        <div id="banner-section" style={{ height: 'calc(100vh - 3rem - 100px)' }} className="mt-6 md:mt-12 w-full px-6 py-4 sm:px-24 sm:py-6 md:px-28 md:py-8 flex flex-col justify-between overflow-hidden sm:overflow-visible">
            <div className="flex flex-col lg:flex-row">
                <TextArea />
                <Frames />
            </div>
            <Divider />
        </div>
    )
}

export default BannerSection;