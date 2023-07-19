import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '@/lib/prisma'
import DiscordProvider, { DiscordProfile } from 'next-auth/providers/discord'
import bcrypt from 'bcrypt'
import { generateUserId } from '@/lib/generateUserId'

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        // TODO: get discord auth working :333333333333
        // DiscordProvider({
        //     profile(profile: DiscordProfile) {
        //         return {
        //             id: i need to figure this out,
        //             username: profile.username,
        //             email: profile.email,
        //             avatar_url: profile.avatar,
        //         }
        //     },
        //     clientId: process.env.DISCORD_CLIENT_ID as string,
        //     clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
        // }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Invalid credentials')
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email,
                    },
                })
                if (!user || !user?.hashed_password) {
                    throw new Error('Invalid credentials')
                }
                const passwordValid = await bcrypt.compare(
                    credentials.password,
                    user.hashed_password,
                )
                if (!passwordValid) {
                    throw new Error('Invalid credentials')
                }
                return user
            },
        }),
    ],
    // pages: {
    //     signIn: '/login',
    //     signOut: '/logout',
    //     error: '/login/error',
    //     verifyRequest: '/login/verify',
    //     newUser: '/onboarding',
    // },
    callbacks: {
        session: ({ session, token }) => {
            console.log('Session Callback', { session, token })
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                },
            }
        },
        jwt: ({ token, user }) => {
            console.log({ token, user })
            if (user) {
                const u = user as unknown as any
                return {
                    ...token,
                    id: u.id,
                }
            }
            return token
        },
    },
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
}
