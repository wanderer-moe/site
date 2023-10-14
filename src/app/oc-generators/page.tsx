import { OCGeneratorList } from '@/components/oc-generators/oc-generator-list'
import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'

export default function OCGeneratorPage() {
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
                    <Link href={`/oc-generators`}>OC Generators</Link>
                </div>
            </div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold tracking-tight">
                    OC Generators
                </h1>
                <p className=" text-muted-foreground">
                    Create, save and share unique Original Characters with our
                    OC Generators.
                </p>
                <p className="text-muted-foreground">
                    Need assets for your OC? Check out{' '}
                    <Link
                        className="text-white"
                        href={`/search?asset=character-sheets,splash-art`}>
                        Character Sheets and Splash Art
                    </Link>{' '}
                    from our asset database.
                </p>
            </div>
            <OCGeneratorList />
        </div>
    )
}
