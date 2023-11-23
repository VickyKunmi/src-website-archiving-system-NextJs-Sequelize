import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getserver } from "@/config";
import { models } from "@/db/models";
const { sequelize } = models;

try {
  const sqlAuth = async () => {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  };
  sqlAuth();
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {},
      async authorize(credentials, req) {
        const res = await fetch(`${getserver}/api/AdminLogin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(credentials),
        });
        const user = await res.json();
        if (res.ok && user) return user;
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/projectJugler/admin",
  },
  secret: "@cugfinalyearproject23",
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
});
