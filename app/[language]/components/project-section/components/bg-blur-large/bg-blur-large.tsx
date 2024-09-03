import React from "react";

const BgBlurLarge = () => {
    return (
        <div className="hidden md:block absolute top-[-120px] right-0 -z-10">
            <svg width="453" height="484" viewBox="0 0 453 484" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4" filter="url(#filter0_f_2250_2091)">
                    <path d="M438 242C438 350.8 350.024 439 241.5 439C132.976 439 45 350.8 45 242C45 133.2 132.976 45 241.5 45C350.024 45 438 133.2 438 242Z" fill="url(#paint0_linear_2250_2091)" />
                </g>
                <defs>
                    <filter id="filter0_f_2250_2091" x="0.00462341" y="0.00462341" width="482.991" height="483.991" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="22.4977" result="effect1_foregroundBlur_2250_2091" />
                    </filter>
                    <linearGradient id="paint0_linear_2250_2091" x1="404.298" y1="97.3691" x2="330.038" y2="472.15" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#282828" />
                        <stop offset="1" stopColor="#8E8E8E" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    )
}

export default BgBlurLarge;