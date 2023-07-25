import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Session } from 'lucia'
import { Button } from '@/components/ui/button'
import { PronounHandler } from './pronounHandler'

export function ProfileSettings({ session }: { session: Session }) {
    // TODO: validation
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold">Profile</h2>
            <p>
                This is where you can change your profile picture, username, and
                other profile settings.
            </p>
            <Separator className="mt-4" />

            <div className="mt-4 grid gap-2">
                <div>
                    <p className="font-bold">Username</p>
                    <p className="font-xs">
                        Your username is how other users will see you on the
                        site. It must be between 3 and 20 characters long.
                    </p>
                    <Input className="my-2" placeholder="Username" />
                </div>
                <PronounHandler session={session} />
                <div>
                    <p className="font-bold">Bio</p>
                    <p className="font-xs">Maximum of 150 characters long.</p>
                    <Textarea
                        className="my-2 h-20 resize-none"
                        placeholder="Bio"
                    />
                </div>
                <div>
                    <p className="font-bold">Email Address</p>
                    <p className="font-xs">
                        Your email address is used to log in to your account. It
                        is also used to send you important notifications.
                    </p>
                    <Input className="my-2" placeholder={session.user.email} />
                </div>
            </div>
            <div className="flex justify-end">
                <Button className="mt-4 font-semibold">Save Changes</Button>
            </div>
        </div>
    )
}
