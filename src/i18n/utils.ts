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
        // If path is empty, just return the base path for the language
        if (!path || path === '/') {
            return !showDefaultLang && l === defaultLang ? '/' : `/${l}`;
        }

        // Remove leading slash for route key lookup
        const routeKey = path.startsWith('/') ? path.slice(1) : path;

        // Check if this route key exists in the target language routes
        const targetRoutes = routes[l as keyof typeof routes];
        if (targetRoutes && routeKey in targetRoutes) {
            const translatedPath = targetRoutes[routeKey as keyof typeof targetRoutes];

            // For default language, return the path without language prefix (unless showDefaultLang is true)
            if (l === defaultLang && !showDefaultLang) {
                return translatedPath;
            }

            // For non-default language, add language prefix
            return `/${l}${translatedPath}`;
        }

        // If no translation found, use the original path
        const normalizedPath = path.startsWith('/') ? path : `/${path}`;

        // For default language, return the path without language prefix (unless showDefaultLang is true)
        if (l === defaultLang && !showDefaultLang) {
            return normalizedPath;
        }

        // For non-default language, add language prefix
        return `/${l}${normalizedPath}`;
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

    if (parts.length === 0) {
        return undefined;
    }

    // Reconstruct the full path after removing language
    const fullPath = `/${parts.join('/')}`;

    // For default language, check if full path exists in routes
    if (defaultLang === currentLang) {
        const defaultRoutes = routes[defaultLang];
        // First try to find exact match
        const exactMatch = Object.keys(defaultRoutes).find(
            (key) => defaultRoutes[key as keyof typeof defaultRoutes] === fullPath
        );
        if (exactMatch) {
            return exactMatch;
        }
        // If no exact match, return the path without leading slash
        return parts.join('/');
    }

    // For non-default language, find the key that matches the translated path
    const currentRoutes = routes[currentLang];
    const getKeyByValue = (obj: Record<string, string>, value: string): string | undefined => {
        return Object.keys(obj).find((key) => obj[key] === value);
    };

    // First try exact match with full path
    const routeKey = getKeyByValue(currentRoutes, fullPath);

    if (routeKey !== undefined) {
        return routeKey;
    }

    // If no translation found, check if it's a direct match in default routes
    const defaultRoutes = routes[defaultLang];
    const exactMatch = Object.keys(defaultRoutes).find(
        (key) => defaultRoutes[key as keyof typeof defaultRoutes] === fullPath
    );

    if (exactMatch) {
        return exactMatch;
    }

    // If no exact match found, return the path without leading slash
    return parts.join('/');
}
