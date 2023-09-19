import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'

export function AdvancedSettings({ session }: { session: any }) {
    // TODO: validation
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold">Advanced Settings</h2>
            <p>Advanced settings for your account.</p>
            <Separator className="mt-4" />

            <div className="mt-4 grid gap-2">
                <div>
                    <p className="font-bold">Password</p>
                    <p className="font-xs">
                        Your password is used to log in to your account. Must be
                        at least 8 characters long, and contain at least one
                        number, one uppercase letter, symbol, and one lowercase
                        letter.
                    </p>
                    <Input
                        className="my-2"
                        type="password"
                        placeholder="•••••••••••"
                    />
                </div>
            </div>
            <div className="flex justify-end">
                <Button className="mt-4 font-semibold">Save Changes</Button>
            </div>
        </div>
    )
}
