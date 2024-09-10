import React, { FormEvent } from "react";
import Wrapper from "./components/wrapper/wrapper";
import { getDictionary } from "@/dictionaries/dictionaries";
import Form from "./components/form/form";

interface ContactSectionProps {
    language: string;
}

const ContactSection = async ({ language }: ContactSectionProps) => {
    const dictionary = await getDictionary(language);



    return (
        <Wrapper>
            <div className="md:ml-[20%] max-w-[400px] ">

                <h1 className="text-[72px] font-bold leading-[60px]">
                    {dictionary.contactSection.title}
                </h1>

                <Form
                    email={dictionary.contactSection.email}
                    message={dictionary.contactSection.email}
                    button={dictionary.contactSection.button}
                />
            </div>
        </Wrapper>
    )
}

export default ContactSection;