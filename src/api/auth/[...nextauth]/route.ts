import NextAuth from 'next-auth/next'
import { authOptions } from '@/api/auth/login/authOptions'

// @ts-expect-error
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
