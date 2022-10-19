import { NextResponse } from 'next/server'

export function middleware(req) {
    let response = NextResponse.next()

    //Get cookies to validate user's permission to certain pages
    //const cookies = req.cookies; => {user: jaopreto}

    return response;
}

export const config = {
    matcher: ['/revalidate'],
}