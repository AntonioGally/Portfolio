import React from "react";
import Image from "next/image";
import programming from "@/assets/programming.gif";

const Media = () => {
    return (
        <div className="rounded-2xl">
            <Image alt="project gif" src={programming} className="w-full" />
        </div>
    )
}

export default Media;