import GoogleProvider from "next-auth/providers/google";
import db from "@/lib/prismadb";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }

        const user = await db.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user?.hashedPassword) {
          throw new Error("Invalid credentials");
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        if (!isCorrectPassword) {
          throw new Error("Invalid credentials");
        }

        return user;
      },
    }),
  ],
  // callbacks: {
  //   async session({ session }) {
  //     const sessionUser = await db.user?.findUnique({
  //       where: {
  //         email: profile.email,
  //       },
  //     });
  //     session.user.id = sessionUser._id;
  //     return session;
  //   },
  // async signIn({ profile }) {
  //   console.log(profile);
  //   try {
  //     const userExists = await db.user?.findUnique({
  //       where: {
  //         email: profile.email,
  //       },
  //     });
  //     if (!userExists) {
  //       const user = await db.user.create({
  //         data: {
  //           email: profile.email,
  //           name: profile.name,
  //           image: profile.image,
  //         },
  //       });
  //     }
  //     return true;
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  // },
  // },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.SECRET,
};