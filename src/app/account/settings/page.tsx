import { getSession } from '@/auth/getSession'
import { Separator } from '@/components/ui/separator'
import { redirect } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { ProfileSettings } from '@/components/account/settings/profileSettings'
import { AdvancedSettings } from '@/components/account/settings/advancedSettings'

const SettingsPage = async () => {
    const session = await getSession()
    if (!session) redirect('/account/login')
    return (
        <main className="min-h-screen p-5 max-w-screen-xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold">Account Settings</h1>
                <p>Manage all your account settings here.</p>
                <Separator className="mt-4" />
            </div>
            <ProfileSettings session={session} />
            <AdvancedSettings session={session} />
        </main>
    )
}

export default SettingsPage
