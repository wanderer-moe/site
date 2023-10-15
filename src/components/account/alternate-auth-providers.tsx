import { Button } from '@/components/ui/button'
import { DiscordLogoIcon } from '@radix-ui/react-icons'

export function AlternateAuthProviders() {
    return (
        <>
            <div className="mt-2 flex flex-row items-center gap-2">
                <Button
                    className="flex w-full items-center"
                    variant="secondary"
                    disabled>
                    <DiscordLogoIcon className="mr-2 h-4 w-4" />
                    Login with Discord
                </Button>
                <Button
                    className="flex w-full items-center"
                    variant="secondary"
                    disabled>
                    {/* lol */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                        width="19"
                        height="19"
                        viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            fill-rule="evenodd"
                            d="M12 2.25c-5.384 0-9.75 4.366-9.75 9.75s4.366 9.75 9.75 9.75s9.75-4.366 9.75-9.75a10.2 10.2 0 0 0-.19-1.946a.75.75 0 0 0-.735-.604H12a.75.75 0 0 0-.75.75v3.6c0 .414.336.75.75.75h3.883a4.68 4.68 0 0 1-1.05 1.132h-.002l.002.002A4.616 4.616 0 0 1 12 16.65a4.65 4.65 0 0 1 0-9.3c1.184 0 2.26.446 3.084 1.178a.75.75 0 0 0 1.029-.03l2.545-2.546a.75.75 0 0 0-.019-1.079A9.708 9.708 0 0 0 12 2.25Zm3.202 15a6.148 6.148 0 0 1-8.573-2.252L4.952 16.29A8.246 8.246 0 0 0 12 20.25c1.821 0 3.505-.59 4.87-1.59l-1.668-1.41Zm2.803.406A8.221 8.221 0 0 0 20.25 12c0-.348-.023-.704-.065-1.05H12.75v2.1h4.336a.75.75 0 0 1 .707 1a6.166 6.166 0 0 1-1.397 2.245l1.61 1.361ZM5.02 7.601A8.244 8.244 0 0 1 12 3.75c1.892 0 3.63.642 5.023 1.716l-1.5 1.5A6.105 6.105 0 0 0 12 5.85a6.147 6.147 0 0 0-5.281 2.997l-1.7-1.246Zm-.69 1.354A8.227 8.227 0 0 0 3.75 12a8.23 8.23 0 0 0 .53 2.914l1.767-1.362A6.16 6.16 0 0 1 5.85 12c0-.606.088-1.192.251-1.746l-1.77-1.299Z"
                            clip-rule="evenodd"
                        />
                    </svg>
                    Login with Google
                </Button>
            </div>
        </>
    )
}
