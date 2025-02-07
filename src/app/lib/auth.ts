import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID || "",
      clientSecret: process.env.AUTH_GOOGLE_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.AUTH_FACEBOOK_ID || "",
      clientSecret: process.env.AUTH_FACEBOOK_SECRET || "",
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
