import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const authSession = req.cookies.get("auth_session");

    if (authSession) {
        return NextResponse.json({ isAuthenticated: true });
    }

    return NextResponse.json({ isAuthenticated: false });
}
