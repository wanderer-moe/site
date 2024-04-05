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
import { useRouter, useSearchParams } from 'next/navigation'
import { APIClient } from '@/lib/api-client/client'
import type {
    get_V2gameall,
    get_V2categoryall,
    get_V2tagsall,
} from '@/lib/api-client/openapi'
import { z } from 'zod'

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

export function AssetSearchHandler() {
    const [state, dispatch] = useReducer(reducer, {
        query: '',
        games: [],
        categories: [],
        tags: [],
    })

    const router = useRouter()
    const searchParams = useSearchParams()

    const [games, setGames] = useState<z.infer<get_V2gameall['response']>>()
    const [categories, setCategories] =
        useState<z.infer<get_V2categoryall['response']>>()
    const [tags, setTags] = useState<z.infer<get_V2tagsall['response']>>()

    useEffect(() => {
        APIClient.get('/v2/game/all').then((res) => {
            setGames(res)
        })
        APIClient.get('/v2/category/all').then((res) => {
            setCategories(res)
        })
        APIClient.get('/v2/tags/all').then((res) => {
            setTags(res)
        })
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
            searchParams.set('name', state.query)
        }
        if (state.games.length) {
            searchParams.set('game', state.games.join(','))
        }
        if (state.categories.length) {
            searchParams.set('category', state.categories.join(','))
        }
        if (state.tags.length) {
            searchParams.set('tags', state.tags.join(','))
        }
        router.push('/search?' + searchParams.toString())
    }

    return (
        <section className="mb-6 md:mb-0 md:w-1/3">
            <div className="flex flex-col gap-4 md:mr-10">
                <h1 className={'text-xl font-bold'}>Search Assets</h1>
                <Button
                    className="w-full"
                    onClick={handleSearch}
                    variant="secondary">
                    Update Search
                </Button>
                <Input
                    placeholder="Search..."
                    value={state.query}
                    onChange={(e) =>
                        dispatch({
                            type: 'SET_QUERY',
                            payload: e.target.value,
                        })
                    }
                />
                <div className="rounded-md border bg-secondary-dark">
                    <span className="flex items-center justify-center gap-2 rounded-t-md border-b bg-background py-2 text-base">
                        Filters
                    </span>
                    <div className="px-4">
                        <Accordion type="multiple" className="w-full">
                            <AccordionItem id="gamesitem" value="gamesitem">
                                <AccordionTrigger className="text-foreground">
                                    Games
                                </AccordionTrigger>
                                <AccordionContent>
                                    {games?.games.map((game) => (
                                        <div
                                            onClick={() => {
                                                if (
                                                    state.games.includes(
                                                        game.id,
                                                    )
                                                ) {
                                                    dispatch({
                                                        type: 'REMOVE_GAME',
                                                        payload: game.id,
                                                    })
                                                } else {
                                                    dispatch({
                                                        type: 'ADD_GAME',
                                                        payload: game.id,
                                                    })
                                                }
                                            }}
                                            key={game.id}
                                            className={`mt-2 flex flex-row items-center rounded-md bg-primary/10 p-2 transition-colors hover:cursor-pointer hover:bg-primary/5 ${game.possibleSuggestiveContent ? 'text-red-300' : ''}`}>
                                            <Checkbox
                                                className={'mr-2'}
                                                checked={state.games.includes(
                                                    game.id,
                                                )}
                                            />{' '}
                                            {game.formattedName}
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                id="categoriesitem"
                                value="categoriesitem">
                                <AccordionTrigger className="text-foreground">
                                    Categories
                                </AccordionTrigger>
                                <AccordionContent>
                                    {categories?.categories.map((category) => (
                                        <div
                                            onClick={() => {
                                                if (
                                                    state.categories.includes(
                                                        category.id,
                                                    )
                                                ) {
                                                    dispatch({
                                                        type: 'REMOVE_ASSET_CATEGORY',
                                                        payload: category.id,
                                                    })
                                                } else {
                                                    dispatch({
                                                        type: 'ADD_ASSET_CATEGORY',
                                                        payload: category.id,
                                                    })
                                                }
                                            }}
                                            key={category.id}
                                            className="mt-2 flex flex-row items-center rounded-md bg-primary/10 p-2 transition-colors hover:cursor-pointer hover:bg-primary/5">
                                            <Checkbox
                                                className={'mr-2'}
                                                checked={state.categories.includes(
                                                    category.id,
                                                )}
                                            />{' '}
                                            {category.formattedName}
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem
                                id="tagsitem"
                                value="tagsitem"
                                className="border-none">
                                <AccordionTrigger className="text-foreground">
                                    Tags
                                </AccordionTrigger>
                                <AccordionContent>
                                    {tags?.tags.map((tag) => (
                                        <div
                                            onClick={() => {
                                                if (
                                                    state.tags.includes(tag.id)
                                                ) {
                                                    dispatch({
                                                        type: 'REMOVE_TAG',
                                                        payload: tag.id,
                                                    })
                                                } else {
                                                    dispatch({
                                                        type: 'ADD_TAG',
                                                        payload: tag.id,
                                                    })
                                                }
                                            }}
                                            key={tag.id}
                                            className="mt-2 flex flex-row items-center rounded-md bg-primary/10 p-2 transition-colors hover:cursor-pointer hover:bg-primary/5">
                                            <Checkbox
                                                className={'mr-2'}
                                                checked={state.tags.includes(
                                                    tag.id,
                                                )}
                                            />{' '}
                                            {tag.formattedName}
                                        </div>
                                    ))}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
