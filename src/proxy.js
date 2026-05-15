import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';

export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const redirectTo = new URL(request.url);

    if (!session) {
        return NextResponse.redirect(new URL(`/auth/login?callbackUrl=${encodeURIComponent(redirectTo.pathname)}`, request.url));
    };
};

export const config = {
    matcher: [
        "/courses/course-details/:path", 
        "/profile", 
        "/profile/profile-update"
    ],
};