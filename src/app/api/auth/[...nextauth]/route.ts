import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "merchant@nova.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                // This is a simulation for NovaCommerce
                if (credentials?.email === "admin@nova.com" && credentials?.password === "password123") {
                    return { id: "1", name: "Nova Merchant", email: "admin@nova.com" };
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: '/login',
    },
    session: {
        strategy: "jwt" as const,
    },
    callbacks: {
        async jwt({ token, user }: any) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token }: any) {
            if (session.user) {
                (session.user as any).id = token.id;
            }
            return session;
        }
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
