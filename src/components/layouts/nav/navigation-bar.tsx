import Image from 'next/image'
import Link from 'next/link'
import { NavItems } from './navigation-items'

export function NavBar() {
    return (
        <div className="sticky top-0 z-[100] border-b border-zinc-100/20 bg-zinc-950/70 pb-0 pt-0 backdrop-blur-lg backdrop-filter">
            <div className="mx-auto flex h-14 max-w-screen-xl justify-between px-5">
                <div id="left" className="flex items-center gap-3">
                    <Link href="/" passHref>
                        <Image
                            src="/icon.svg"
                            alt="wanderer.moe"
                            width={35}
                            height={35}
                        />
                    </Link>
                </div>
                <div id="right" className="flex items-center gap-3">
                    <NavItems />
                </div>
            </div>
        </div>
    )
}
