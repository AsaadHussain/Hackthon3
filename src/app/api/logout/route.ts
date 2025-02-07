import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out successfully" }, { status: 200 });

  response.headers.append(
    "Set-Cookie",
    "auth_session=; Path=/; HttpOnly; Secure; Max-Age=0"
  );

  return response;
}
