'use client'

import React, { createContext, PropsWithChildren, ReactNode, useContext } from "react";
import { DictionaryType } from "../../dictionaries/dictionaries";

interface HomeContextTypes {
    dictionary: DictionaryType;
}

interface ProviderTypes {
    children: ReactNode;
    dictionary: DictionaryType;
}

const homeContext = createContext({} as HomeContextTypes);

const HomeProvider = ({ children, dictionary }: ProviderTypes) => {
    return (
        <homeContext.Provider value={{ dictionary }}>
            {children}
        </homeContext.Provider>
    )
}

export const useHomeContext = () => {
    if (!homeContext) throw new Error('Use inside HomeProvider');

    return useContext(homeContext);
}

export default HomeProvider;