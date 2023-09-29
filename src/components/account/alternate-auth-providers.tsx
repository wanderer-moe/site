import { Button } from '@/components/ui/button'
import { DiscordLogoIcon, GlobeIcon } from '@radix-ui/react-icons'

export function AlternateAuthProviders() {
    return (
        <>
            <div className="mt-2 flex flex-row items-center gap-2">
                <Button
                    className="flex w-full items-center"
                    variant="outline"
                    disabled>
                    <DiscordLogoIcon className="mr-2 h-4 w-4" />
                    Login with Discord
                </Button>
                <Button
                    className="flex w-full items-center"
                    variant="outline"
                    disabled>
                    {/* TODO(dromzeh): google icon lib :3 */}
                    <GlobeIcon className="mr-2 h-4 w-4" />
                    Login with Google
                </Button>
            </div>
        </>
    )
}
