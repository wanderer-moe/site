'use client'

import { Button } from '@/components/ui/button'
import { Circle } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Status(): React.ReactElement {
    const [status, setStatus] = useState<string>('Pending API Status')

    useEffect(() => {
        fetch('https://api.wanderer.moe/')
            .then((res: Response) => res.json())
            .then((data: { status: string }) => {
                setStatus(data.status === 'ok' ? 'online' : 'offline')
            })
            .catch((err: Error) => {
                console.error(err)
                setStatus('offline')
            })
    }, [])

    return (
        <Link href="https://status.wanderer.moe">
            <Button variant="outline" className="w-full">
                <Circle
                    className={`${
                        status === 'online' ? 'text-green-200' : 'text-red-200'
                    } animate-pulse`}
                    size={12}
                    fill="currentColor"
                />
                <span className="ml-2">
                    API: {status === 'online' ? 'Online' : 'Degraded'}
                </span>
            </Button>
        </Link>
    )
}
