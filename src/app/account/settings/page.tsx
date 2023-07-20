import { getPageSession } from '@/auth/lucia'
import { redirect } from 'next/navigation'

const Page = async () => {
    const session = await getPageSession()
    if (!session) redirect('/login')
    return (
        <>
            <p>
                user: {session.user.username} (userid {session.user.userId})
            </p>
            <form action="/auth/logout">
                <input type="submit" value="Sign out" />
            </form>
        </>
    )
}

export default Page
