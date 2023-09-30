import { GamesList } from '@/components/game/games-list'
import { RecentAssets } from '@/components/search/assets/recent-assets'

function IndexPage() {
    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col gap-y-10">
                <GamesList />
                <RecentAssets />
            </div>
        </div>
    )
}

export default IndexPage
