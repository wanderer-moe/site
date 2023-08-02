import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Navitems } from './navitems'
import Image from 'next/image'
import { Session } from 'lucia'
import { SearchBar } from './search'
import { LocaleChanger } from '@/components/localeChanger'
// interface HeaderProps {
// session: Session
// }

export function Navbar() {
    return (
        <div className="sticky top-0 z-[100] border-b border-zinc-100/20 bg-zinc-950/70 pb-0 pt-0 backdrop-blur-lg backdrop-filter">
            <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between gap-5 px-5">
                <Link href="/" passHref>
                    <Image
                        src="/icon.svg"
                        alt="wanderer.moe"
                        width={50}
                        height={50}
                    />
                </Link>
                <SearchBar />
                <LocaleChanger />
                <Navitems />
            </div>
        </div>
    )
}
