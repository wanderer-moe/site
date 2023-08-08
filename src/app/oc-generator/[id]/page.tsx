import { mapGame } from '@/lib/helpers/casing/mapping'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { OCGeneratorResponse } from '@/interfaces/ocGenerator'

async function GetGeneratorData(id: string): Promise<OCGeneratorResponse> {
    const res = await fetch(
        `https://v2-api-testing.wanderer.moe/oc-generator/${id}`,
    )
    const { success, status, data, error, message } = await res.json()

    if (!success) return notFound()

    return {
        success,
        status,
        uploaded: new Date().toISOString(),
        key: `oc-generators/${id}/list.json`,
        data,
    }
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
    const {
        uploaded,
        data: { options },
    } = await GetGeneratorData(id)

    return (
        <div className="mx-auto min-h-screen max-w-screen-xl p-5">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-xl font-bold">
                    OC Generator: {mapGame(id)}
                </h1>
            </div>
        </div>
    )
}

export default OCGeneratorPage
