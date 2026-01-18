import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Mock Login Logic
        // Email: admin@agrimart.com
        // Password: password123
        if (
          credentials.email === "admin@agrimart.com" &&
          credentials.password === "password123"
        ) {

          return { id: "1", name: "Admin User", email: "admin@agrimart.com" };
        }

        return null;
      }
    })
  ],
  pages: {
    signIn: '/login', 
  },
  session: {
    strategy: "jwt", 
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };