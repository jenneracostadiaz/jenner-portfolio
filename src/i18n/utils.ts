import { ui, defaultLang, showDefaultLang, routes } from './ui';

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as keyof typeof ui;
    return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key];
    };
}

export function useTranslatedPath(lang: keyof typeof ui) {
    return function translatePath(path: string, l: string = lang) {
        const pathName = path.replaceAll('/', '');
        const hasTranslation =
            defaultLang !== l &&
            routes[l as keyof typeof routes] !== undefined &&
            routes[l as keyof typeof routes][
                pathName as keyof (typeof routes)[typeof defaultLang]
            ] !== undefined;
        const translatedPath = hasTranslation
            ? '/' +
              routes[l as keyof typeof routes][
                  pathName as keyof (typeof routes)[typeof defaultLang]
              ]
            : path;

        const normalizedPath = translatedPath.startsWith('/')
            ? translatedPath
            : `/${translatedPath}`;
        const finalPath =
            !showDefaultLang && l === defaultLang ? normalizedPath : `/${l}${normalizedPath}`;
        return finalPath.replace(/\/+/g, '/');
    };
}

export function getRouteFromUrl(url: URL): string | undefined {
    const pathname = new URL(url).pathname;
    const parts = pathname?.split('/');
    const path = parts.pop() || parts.pop();

    if (path === undefined) {
        return undefined;
    }

    const currentLang = getLangFromUrl(url);

    if (defaultLang === currentLang) {
        const route = Object.values(routes)[0];
        return (route as Record<string, string>)[path] !== undefined
            ? (route as Record<string, string>)[path]
            : undefined;
    }

    const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined => {
        return Object.keys(obj).find((key) => obj[key] === value);
    };

    const reversedKey = getKeyByValue(routes[currentLang], path);

    if (reversedKey !== undefined) {
        return reversedKey;
    }

    return undefined;
}
