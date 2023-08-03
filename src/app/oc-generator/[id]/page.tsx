import { mapGame } from '@/lib/helpers/casing/mapping'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

async function GetGeneratorData(id: string): Promise<any> {
    // TODO: type this
    const res = await fetch(
        `https://v2-api-testing.wanderer.moe/oc-generator/${id}`,
    )
    const { status, data } = await res.json()
    return { status, data }
}

type Props = {
    params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = params
    const { data } = await GetGeneratorData(id)

    if (!data) return notFound()

    return {
        title: `${mapGame(id)} - wanderer.moe`,
        description: `OC Generator for ${mapGame(id)}`,
    }
}

async function OCGeneratorPage({ params: { id } }: { params: { id: string } }) {
    return (
        <main className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold">OC Generator</h1>
                <p className="text-xl">id {id}</p>
            </div>
        </main>
    )
}

export default OCGeneratorPage
