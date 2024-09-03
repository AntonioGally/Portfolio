import React from "react";

const BgBlurSmall = () => {
    return (
        <div className="hidden md:block absolute bottom-[-120px] right-0 -z-10">
            <svg width="382" height="271" viewBox="0 0 382 271" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.4" filter="url(#filter0_f_2250_2092)">
                    <path d="M256.062 211.896C150.477 238.149 56.4029 225.324 45.9417 183.251C35.4805 141.177 112.594 85.7881 218.179 59.5352C323.764 33.2822 417.839 46.1072 428.3 88.1805C438.761 130.254 361.648 185.643 256.062 211.896Z" fill="url(#paint0_linear_2250_2092)" />
                </g>
                <defs>
                    <filter id="filter0_f_2250_2092" x="-0.00392151" y="0.913681" width="474.249" height="269.604" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                        <feGaussianBlur stdDeviation="22.4977" result="effect1_foregroundBlur_2250_2092" />
                    </filter>
                    <linearGradient id="paint0_linear_2250_2092" x1="393.171" y1="163.932" x2="52.4012" y2="88.897" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#282828" />
                        <stop offset="1" stopColor="#8E8E8E" />
                    </linearGradient>
                </defs>
            </svg>

        </div>
    )
}

export default BgBlurSmall;