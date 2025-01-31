import { NextResponse } from "next/server";

const USERNAME = process.env.AUTH_USERNAME;
const PASSWORD = process.env.AUTH_PASSWORD;

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (username === USERNAME && password === PASSWORD) {
      const response = NextResponse.json({ message: "Login successful" }, { status: 200 });

      response.headers.append(
        "Set-Cookie",
        `auth_session=true; Path=/; HttpOnly; Secure; Max-Age=3600`
      );

      return response;
    }

    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ message: "Server error", error }, { status: 500 });
  }
}
