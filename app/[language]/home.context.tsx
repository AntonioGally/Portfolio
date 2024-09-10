'use client'

import React, { createContext, PropsWithChildren, ReactNode, useContext, useEffect } from "react";
import { DictionaryType } from "../../dictionaries/dictionaries";
import { analytics } from "../firebaseConfig";
import { logEvent } from "firebase/analytics";

interface HomeContextTypes {
    dictionary: DictionaryType;
}

interface ProviderTypes {
    children: ReactNode;
    dictionary: DictionaryType;
}

const homeContext = createContext({} as HomeContextTypes);

const HomeProvider = ({ children, dictionary }: ProviderTypes) => {

    useEffect(() => {
        if (analytics) {
            logEvent(analytics, 'page_view', { page_path: window.location.pathname });
        }
    }, []);

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