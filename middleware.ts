
import { NextResponse } from "next/server";
import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

let locales = ['en-US', 'pt-br'];

function getLocale(request: NextRequest) {
    const acceptedLanguages = request.headers.get('accept-language');
    let headers = { 'accept-language': acceptedLanguages || '' };
    let languages = new Negotiator({ headers }).languages();
    let defaultLocale = 'pt-br';

    return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
    console.log({ pathname, pathnameHasLocale })
    if (pathnameHasLocale) return

    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`


    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
}