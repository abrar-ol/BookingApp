// middleware is a function that has access to the request-response cycle and objects - it sits between the client and the actual request that's made and I have access to those objects
// it run on every request to any page or to certain routes
// we want to have middleware that protects certain routes, for example the bookings, add room, my room


import { NextResponse } from "next/server";
import checkAuth from './app/actions/checkAuth';

export async function middleware(request) {
    const { isAuthenticated } = await checkAuth();

    if (!isAuthenticated) {
        return NextResponse.redirect(new URL('/login', request.url));
    }
    //whenever we have middleware, we need to call next method to continue onto the next middleware
    return NextResponse.next();
}

//limit run it to certain page
export const config = {
    matcher: ['/bookings', '/rooms/add', '/rooms/my'],
};