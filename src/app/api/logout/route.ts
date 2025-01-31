import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.redirect("/login");
  response.headers.append("Set-Cookie", "auth_session=; Path=/; Max-Age=0");

  return response;
}
