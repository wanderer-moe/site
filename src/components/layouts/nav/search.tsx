import { Input } from '@/components/ui/input'

export function SearchBar() {
    // TODO: this search bar will allow for searching by assets name, username, asset category & game name.
    /* example interface:
    interface NavbarSearchResponse {
        assets?: Asset[]
        users?: User[]
        games?: Game[]
        categories?: string[]
    }*/

    return (
        <>
            <Input className="mr-3" placeholder="Search everywhere.." />
        </>
    )
}
