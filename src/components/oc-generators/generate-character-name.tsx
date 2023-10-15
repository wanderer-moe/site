import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    generateMixedName,
    generateFeminineName,
    generateMasculineName,
} from '@/lib/helpers/name/generateCharacterName'
import { Lock, Unlock, Shuffle } from 'lucide-react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import * as React from 'react'

interface GenerateCharacterNameProps {
    name: string
    setName: (name: string) => void
}

interface NamePreferenceProps {
    preference: string
    handlePreferenceChange: (preference: string) => void
    locked: boolean
}

export function GenerateCharacterName({
    name,
    setName,
}: GenerateCharacterNameProps) {
    const [locked, setLocked] = React.useState(false)
    const [preference, setPreference] = React.useState<string>('mixed')

    const toggleLock = () => setLocked(!locked)

    const shuffleOption = (preference: string) => () => {
        console.log(`${preference}: preference`)

        if (preference === 'masc') {
            setName(generateMasculineName())
        } else if (preference === 'fem') {
            setName(generateFeminineName())
        } else {
            setName(generateMixedName())
        }
    }

    const handlePreferenceChange = (selectedPreference: string) => {
        console.log(`${selectedPreference}: selectedPreference`)
        setPreference(selectedPreference)
    }

    return (
        <div className="rounded-lg border bg-[#09090B] p-4">
            <Label htmlFor="name">
                <p
                    className={`text-lg font-semibold ${
                        locked ? 'text-muted-foreground' : 'text-foreground'
                    }`}>
                    Character Name
                </p>
            </Label>
            <div className="mt-2 flex flex-row space-x-2">
                <Input
                    id="name"
                    name="name"
                    className="flex w-full"
                    disabled={locked}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <div>
                    <NamePreference
                        preference={preference}
                        handlePreferenceChange={handlePreferenceChange}
                        locked={locked}
                    />
                </div>
            </div>
            <div className="mt-2 flex gap-2">
                <Button
                    variant="secondary"
                    className="w-full"
                    onClick={shuffleOption(preference)}
                    disabled={locked}>
                    <Shuffle size={16} />
                </Button>

                <Button
                    variant="secondary"
                    onClick={toggleLock}
                    className="w-full">
                    {locked ? <Lock size={16} /> : <Unlock size={16} />}
                </Button>
            </div>
        </div>
    )
}

export function NamePreference({
    preference,
    handlePreferenceChange,
    locked,
}: NamePreferenceProps) {
    return (
        <Select
            defaultValue="mixed"
            onValueChange={handlePreferenceChange}
            disabled={locked}>
            <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Preference" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Preference</SelectLabel>
                    <SelectItem value="masc">Masculine [EN]</SelectItem>
                    <SelectItem value="fem">Feminine [EN]</SelectItem>
                    <SelectItem value="mixed">Mixed [EN]</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
