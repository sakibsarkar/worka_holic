import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import ConnectDB from "@/config/db/ConnectDB";
import User from "@/models/UserModel";
import bcrypt from "bcrypt"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        // GithubProvider({
        //   clientId: process.env.GITHUB_ID,
        //   clientSecret: process.env.GITHUB_SECRET,
        // }),
        CredentialsProvider({
            name: "credentials",
            credentials: {},
    
            async authorize(credentials) {
            const { email, password } = credentials;
    
                try {
                    await ConnectDB();
                    const user = await User.findOne({ email });
        
                    if (!user) {
                        return null;
                    }
        
                    const passwordsMatch = await bcrypt.compare(password, user.password);  
                    if (!passwordsMatch) {
                        return null;
                    }
                    console.log("user", user);
                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                }
            },
        }),
    ],

    callbacks: {
        async jwt({ token, user }) {
            if(user){
                token.role = user?.role;
            }
            return token
        },
        async session({ session, token }) {
            // console.log("Sesson CallBack:" , session);
            session.user.role = token.role;
            // session.user.avater = 'token.image';
            return session
        },
       
    },

    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
    },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };