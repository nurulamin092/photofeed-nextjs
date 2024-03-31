const { match } = require("@formatjs/intl-localematcher");

let locales = ['bn', 'en'];
let defaultLocale = 'en';

function getLocale(request) {
    const acceptedLanguage = request.headers.get('accept-language') ?? undefined;

    const headers = { 'accept-language': acceptedLanguage };

    let languages = new Navigator({ headers }).languages();

    return match(languages, locales, defaultLocale)
}


export function middleware(request) {
    const pathname = request.nextUrl.pathname;

    const pathnameIsMissingLocale = locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    )
    // Redirect if there is no locale

    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        // e.g. incoming request is /products
        // The new URL is now /en-US/products
        return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
    }

}

export const config = {
    matcher: [
        // Skip all internal paths (_next, assets, api)
        '/((?!api|assets|.*\\..*|_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}
