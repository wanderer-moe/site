import { GamesList } from '@/components/game/games-list'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'

export default function GamesPage() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                <div className="whitespace-nowrap transition-colors hover:text-foreground">
                    <Link href={`/`}>
                        <Home size={16} />
                    </Link>
                </div>
                <ChevronRight size={16} />
                <div className="whitespace-nowrap text-foreground">
                    <Link href={`/game`}>Games</Link>
                </div>
            </div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold tracking-tight">Games</h1>
                <p className=" text-muted-foreground">
                    List of all supported games with available fan-made and
                    datamined assets to download.
                </p>
            </div>
            <GamesList />
        </div>
    )
}
