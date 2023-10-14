'use client'
// TODO: clean up
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'
import { Checkbox } from '@/components/ui/checkbox'
import { useReducer, useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { useRouter, useSearchParams } from 'next/navigation'

// using dummy data until new API types are finished
const dummyData = {
    games: [
        'genshin-impact',
        'honkai-star-rail',
        'honkai-impact-3rd',
        'dislyte',
    ],
    categories: ['splash-art', 'character-sheets'],
    tags: ['official', 'fanmade'],
}

interface State {
    query: string
    games: string[]
    categories: string[]
    tags: string[]
}

type Action =
    | { type: 'SET_QUERY'; payload: string }
    | { type: 'ADD_GAME'; payload: string }
    | { type: 'REMOVE_GAME'; payload: string }
    | { type: 'ADD_ASSET_CATEGORY'; payload: string }
    | { type: 'REMOVE_ASSET_CATEGORY'; payload: string }
    | { type: 'ADD_TAG'; payload: string }
    | { type: 'REMOVE_TAG'; payload: string }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'SET_QUERY':
            return { ...state, query: action.payload }
        case 'ADD_GAME':
            if (!state.games.includes(action.payload)) {
                return { ...state, games: [...state.games, action.payload] }
            }
            return state
        case 'REMOVE_GAME':
            return {
                ...state,
                games: state.games.filter((game) => game !== action.payload),
            }
        case 'ADD_ASSET_CATEGORY':
            if (!state.categories.includes(action.payload)) {
                return {
                    ...state,
                    categories: [...state.categories, action.payload],
                }
            }
            return state
        case 'REMOVE_ASSET_CATEGORY':
            return {
                ...state,
                categories: state.categories.filter(
                    (category) => category !== action.payload,
                ),
            }
        case 'ADD_TAG':
            if (!state.tags.includes(action.payload)) {
                return { ...state, tags: [...state.tags, action.payload] }
            }
            return state
        case 'REMOVE_TAG':
            return {
                ...state,
                tags: state.tags.filter((tag) => tag !== action.payload),
            }
        default:
            return state
    }
}

function getGames() {
    return fetch(`${siteConfig.urls.api}/games/all`, {
        next: {
            revalidate: 5,
        },
    }).then((res) => res.json())
}

export function AssetSearchHandler() {
    const [state, dispatch] = useReducer(reducer, {
        query: '',
        games: [],
        categories: [],
        tags: [],
    })

    const router = useRouter()
    const searchParams = useSearchParams()
    const [games, setGames] = useState<any[]>([])
    const [categories, setCategories] = useState<any[]>([])

    useEffect(() => {
        getGames().then((data) => setGames(data))
    }, [])

    useEffect(() => {
        const queryParam = searchParams.get('query') || null
        const gamesParam = searchParams.get('game')?.split(',') || null
        const categoriesParam = searchParams.get('asset')?.split(',') || null
        const tagsParam = searchParams.get('tags')?.split(',') || null

        if (queryParam) {
            dispatch({ type: 'SET_QUERY', payload: queryParam })
        }
        if (gamesParam) {
            gamesParam.forEach((game) => {
                dispatch({ type: 'ADD_GAME', payload: game })
            })
        }
        if (categoriesParam) {
            categoriesParam.forEach((category) => {
                dispatch({ type: 'ADD_ASSET_CATEGORY', payload: category })
            })
        }
        if (tagsParam) {
            tagsParam.forEach((tag) => {
                dispatch({ type: 'ADD_TAG', payload: tag })
            })
        }
    }, [searchParams])

    const handleSearch = () => {
        const searchParams = new URLSearchParams()
        if (state.query) {
            searchParams.set('query', state.query)
        }
        if (state.games.length) {
            searchParams.set('game', state.games.join(','))
        }
        if (state.categories.length) {
            searchParams.set('asset', state.categories.join(','))
        }
        if (state.tags.length) {
            searchParams.set('tags', state.tags.join(','))
        }
        router.push('/search?' + searchParams.toString())
    }

    return (
        <section className="mb-6 md:mb-0 md:w-1/3">
            <div className="md:mr-10">
                <div className="flex flex-col gap-3">
                    <h1 className={'text-xl font-bold'}>Search Assets</h1>
                    <Input
                        placeholder="Search"
                        value={state.query}
                        onChange={(e) =>
                            dispatch({
                                type: 'SET_QUERY',
                                payload: e.target.value,
                            })
                        }
                    />
                    <Separator />
                </div>
                <Accordion type="multiple" className="w-full">
                    <AccordionItem id="gamesitem" value="gamesitem">
                        <AccordionTrigger className="text-zinc-200">
                            Games
                        </AccordionTrigger>
                        <AccordionContent>
                            {dummyData.games.map((game: string) => (
                                <div
                                    onClick={() => {
                                        if (state.games.includes(game)) {
                                            dispatch({
                                                type: 'REMOVE_GAME',
                                                payload: game,
                                            })
                                        } else {
                                            dispatch({
                                                type: 'ADD_GAME',
                                                payload: game,
                                            })
                                        }
                                    }}
                                    key={game}
                                    className="mt-2 flex flex-row items-center rounded-md bg-primary/10 p-2 transition-colors hover:cursor-pointer hover:bg-primary/5">
                                    <Checkbox
                                        className={'mr-2'}
                                        checked={state.games.includes(game)}
                                    />{' '}
                                    {game}
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem id="categoriesitem" value="categoriesitem">
                        <AccordionTrigger className="text-zinc-200">
                            Categories
                        </AccordionTrigger>
                        <AccordionContent>
                            {dummyData.categories.map((category: string) => (
                                <div
                                    onClick={() => {
                                        if (
                                            state.categories.includes(category)
                                        ) {
                                            dispatch({
                                                type: 'REMOVE_ASSET_CATEGORY',
                                                payload: category,
                                            })
                                        } else {
                                            dispatch({
                                                type: 'ADD_ASSET_CATEGORY',
                                                payload: category,
                                            })
                                        }
                                    }}
                                    key={category}
                                    className="mt-2 flex flex-row items-center rounded-md bg-primary/10 p-2 transition-colors hover:cursor-pointer hover:bg-primary/5">
                                    <Checkbox
                                        className={'mr-2'}
                                        checked={state.categories.includes(
                                            category,
                                        )}
                                    />{' '}
                                    {category}
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem id="tagsitem" value="tagsitem">
                        <AccordionTrigger className="text-zinc-200">
                            Tags
                        </AccordionTrigger>
                        <AccordionContent>
                            {dummyData.tags.map((tag: string) => (
                                <div
                                    onClick={() => {
                                        if (state.tags.includes(tag)) {
                                            dispatch({
                                                type: 'REMOVE_TAG',
                                                payload: tag,
                                            })
                                        } else {
                                            dispatch({
                                                type: 'ADD_TAG',
                                                payload: tag,
                                            })
                                        }
                                    }}
                                    key={tag}
                                    className="mt-2 flex flex-row items-center rounded-md bg-primary/10 p-2 transition-colors hover:cursor-pointer hover:bg-primary/5">
                                    <Checkbox
                                        className={'mr-2'}
                                        checked={state.tags.includes(tag)}
                                    />{' '}
                                    {tag}
                                </div>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <Button
                    className="mt-4 w-full"
                    onClick={handleSearch}
                    variant="outline">
                    Search
                </Button>
            </div>
        </section>
    )
}
