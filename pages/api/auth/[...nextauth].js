import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  jwt: {
    encryption: true,
  },
  secret: process.env.JWT_SECRET,
  //Callback here
  callbacks: {
    async signIn({ account, profile }) {
      if (account.provider === "google") {
        return profile.email_verified && profile.email.endsWith("@gmail.com");
      }
      return true; // Do different verification for other providers that don't have `email_verified`
    },
  },
});
