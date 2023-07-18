import NextAuth from 'next-auth'
import { authOptions } from '@/lib/auth'

// @ts-expect-error - i don't know what is going on here
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
