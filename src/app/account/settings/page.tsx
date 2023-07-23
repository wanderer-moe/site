import { getSession } from '@/auth/getSession'
import { redirect } from 'next/navigation'

const SettingsPage = async () => {
    const session = await getSession()
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

export default SettingsPage
