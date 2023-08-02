import { getSession } from '@/auth/getSession'
import { Separator } from '@/components/ui/separator'
import { redirect } from 'next/navigation'
import { DiscordConnection } from '@/components/connections/discordConnection'
import { TiktokConnection } from '@/components/connections/tiktokConnection'

const ConnectionsPage = async () => {
    const session = await getSession()
    if (!session) redirect('/account/login')
    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div>
                <h1 className="text-3xl font-bold">Connection Settings</h1>
                <p>Manage all your socials connections.</p>
                <Separator className="mt-4" />
            </div>
            <div className="mt-8 grid gap-4">
                <DiscordConnection session={session} />
                <TiktokConnection session={session} />
            </div>
        </main>
    )
}

export default ConnectionsPage
