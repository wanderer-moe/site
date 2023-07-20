import { cache } from 'react'
import { cookies } from 'next/headers'
import { auth } from '@/auth/lucia'

export const getSession = cache(() => {
    const authRequest = auth.handleRequest({
        request: null,
        cookies,
    })
    return authRequest.validate()
})
