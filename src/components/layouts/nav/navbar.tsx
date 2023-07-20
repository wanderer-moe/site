import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Navitems } from './navitems'
import { Session } from 'lucia'
interface HeaderProps {
    session: Session
}

export function Navbar(props: HeaderProps) {
    const { session } = props
    console.log(session)
    return (
        <div className="sticky top-0 z-[100] border-b border-zinc-100/20 bg-zinc-950/70 pb-0 pt-0 backdrop-blur-lg backdrop-filter">
            <div className="flex items-center justify-between px-4 py-2">
                <div>
                    <Link href="/" passHref>
                        <p className="font-bold">:3</p>
                    </Link>
                </div>
                <Navitems session={session} />
            </div>
        </div>
    )
}
