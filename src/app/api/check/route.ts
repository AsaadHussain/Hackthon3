import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
    const authSession = cookies().get("auth_session");

    return NextResponse.json({ isAuthenticated: !!authSession });
}
