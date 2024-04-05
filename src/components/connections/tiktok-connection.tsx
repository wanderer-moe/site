import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { PlusIcon } from '@radix-ui/react-icons'
import { Link as LinkIcon } from 'lucide-react'

export function TiktokConnection(connection: any) {
    return (
        <Card>
            <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                <div className="space-y-1">
                    <CardTitle>
                        <div className="flex items-center text-lg">
                            {/* <div className="mr-3 h-6 w-6 text-primary fill-current">
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                                    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z" />
                                </svg>
                            </div> */}
                            Tiktok
                        </div>
                    </CardTitle>
                    <CardDescription>Connected as username</CardDescription>
                </div>
            </CardHeader>
            <CardContent>
                <div className="flex space-x-4 text-sm text-muted-foreground">
                    <Button variant="secondary" className="shadow-none">
                        <PlusIcon className="mr-2 h-4 w-4" />
                        Refresh Connection
                    </Button>
                    <Button variant="secondary" className="shadow-none">
                        <LinkIcon className="mr-2 h-4 w-4" />
                        Unlink
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
