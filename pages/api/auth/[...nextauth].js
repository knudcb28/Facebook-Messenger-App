import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"

export const authOptions = {
  site: "https://new-messenger-app.vercel.app/auth/signin?callbackUrl=https%3A%2F%2Fnew-messenger-app.vercel.app%2F" ?? 'http://localhost:3000',
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    // ...add more providers here
    
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  }
}

export default NextAuth(authOptions)

