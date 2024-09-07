import React from "react";
import Wrapper from "./components/wrapper/wrapper";

interface ContactSectionProps {
    language: string;
}

const ContactSection = ({ language }: ContactSectionProps) => {

    return (
        <Wrapper>
            <div className="md:ml-[20%] max-w-[400px] ">

                <h1 className="text-[72px] font-bold leading-[60px]">
                    Up for a talk?
                </h1>

                <form className="w-full mt-20 md:mt-28">
                    <div className="mb-6">
                        <label htmlFor="email-address-icon" className="block mb-2 text-xl md:text-2xl font-semibold">
                            Email
                        </label>
                        <input type="email" id="email-address-icon" className="bg-transparent border border-white text-lg rounded-[48px] focus:ring-gray-50 focus:border-gray-50 block w-full ps-5 p-2.5" />
                    </div>

                    <div className="mb-10">
                        <label htmlFor="message" className="block mb-2 text-xl md:text-2xl font-semibold">
                            Message
                        </label>
                        <textarea id="message" rows={10} className="bg-transparent block p-2.5 w-full text-lg rounded-[24px] border border-gray-300 focus:ring-gray-50 focus:border-blue-500"></textarea>
                    </div>

                    <div>
                        <button className="w-full rounded-[48px] border-[2px] border-white text-xl py-3 px-8 hover:opacity-80 transition-opacity">
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </Wrapper>
    )
}

export default ContactSection;