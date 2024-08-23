import 'server-only'

interface Dictionary {
    products: {
        cart: string
    }
}

const dictionaries: Record<string, () => Promise<Dictionary>> = {
    'en-US': () => import('./en.json').then((module) => module.default),
    'pt-br': () => import('./pt.json').then((module) => module.default),
}

export const getDictionary = async (locale: keyof typeof dictionaries): Promise<Dictionary> => {
    return dictionaries[locale]();
}
