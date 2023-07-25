'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useEffect, useState } from 'react'
import { Circle } from 'lucide-react'

export function Status() {
    const [status, setStatus] = useState('Pending API Status')

    useEffect(() => {
        fetch('https://api.wanderer.moe/')
            .then((res) => res.json())
            .then((data) => {
                if (data.status === 'ok') {
                    setStatus('online')
                } else {
                    setStatus('offline')
                }
            })
            .catch((err) => {
                console.error(err)
                setStatus('offline')
            })
    }, [])

    return (
        <Link href="https://status.wanderer.moe">
            <Button variant="outline">
                <Circle
                    className={`${
                        status === 'online' ? 'text-green-200' : 'text-red-200'
                    } animate-pulse`}
                    size={12}
                    fill={status === 'online' ? '#BBF7D0' : '#FECACA'}
                />
                <span className="ml-2">
                    API: {status === 'online' ? 'Online' : 'Degraded'}
                </span>
            </Button>
        </Link>
    )
}
