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
    const parts = pathname?.split('/').filter(Boolean); // Remove empty strings

    const currentLang = getLangFromUrl(url);

    // Remove language from parts if it's not the default language
    if (currentLang !== defaultLang && parts[0] === currentLang) {
        parts.shift();
    }

    const path = parts[0]; // Get the first segment after language

    if (!path) {
        return undefined;
    }

    // For default language, check if path exists directly in routes
    if (defaultLang === currentLang) {
        const defaultRoutes = routes[defaultLang];
        return (
            Object.keys(defaultRoutes).find(
                (key) => defaultRoutes[key as keyof typeof defaultRoutes] === `/${path}`
            ) || path
        );
    }

    // For non-default language, find the key that matches the translated path
    const currentRoutes = routes[currentLang];
    const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined => {
        return Object.keys(obj).find((key) => obj[key] === `/${value}`);
    };

    const routeKey = getKeyByValue(currentRoutes, path);

    if (routeKey !== undefined) {
        return routeKey;
    }

    // If no translation found, check if it's a direct match in default routes
    const defaultRoutes = routes[defaultLang];
    return (
        Object.keys(defaultRoutes).find(
            (key) => defaultRoutes[key as keyof typeof defaultRoutes] === `/${path}`
        ) || path
    );
}
