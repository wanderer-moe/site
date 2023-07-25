import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Navitems } from './navitems'
import { Session } from 'lucia'
import { SearchBar } from './search'
interface HeaderProps {
    session: Session
}

export function Navbar(props: HeaderProps) {
    const { session } = props
    console.log(session)
    return (
        <div className="sticky top-0 z-[100] border-b border-zinc-100/20 bg-zinc-950/70 pb-0 pt-0 backdrop-blur-lg backdrop-filter">
            <div className="flex h-14 items-center justify-between px-5 md:px-16 lg:px-36">
                <div className="flex items-center gap-2">
                    <Link href="/" passHref>
                        <p className="font-semibold">wanderer.moe</p>
                    </Link>
                    <SearchBar />
                </div>
                <div className="flex gap-2">
                    <Navitems {...props} />
                </div>
            </div>
        </div>
    )
}
