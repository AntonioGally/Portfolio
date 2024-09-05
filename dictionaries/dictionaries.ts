import 'server-only'

export interface DictionaryType {
    navbar: {
        projects: string;
        about: string;
        tech_tendencies: string;
        contact: string;
    };
    bannerSection: {
        jobTitle: string;
        textRows: string[];
        button: string;
    },
    projectSection: {
        nasa: {
            title: string;
            description: string;
        },
        todoList: {
            title: string;
            description: string;
        }
        tonyMoedas: {
            title: string;
            description: string;
        }
    },
    aboutSection: {
        miniBio: {
            title: string;
            description: string;
        };
        fullBio: {
            title: string;
            description01: string;
            description02: string;
            description03: string;
        }
    }
}

const dictionaries: Record<string, () => Promise<DictionaryType>> = {
    'en-US': () => import('./en.json').then((module) => module.default),
    'pt-br': () => import('./pt.json').then((module) => module.default),
}

export const getDictionary = async (locale: keyof typeof dictionaries): Promise<DictionaryType> => {
    'use server'
    return dictionaries[locale]();
}
