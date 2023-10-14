'use client'

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    objectPronouns,
    possessivePronouns,
    subjectPronouns,
} from '@/lib/helpers/user/pronouns'

export function PronounList({ session, type }: { session: any; type: string }) {
    return (
        <Select>
            <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder={type} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {type === 'subject' &&
                        subjectPronouns.map((pronoun) => (
                            <SelectItem key={pronoun} value={pronoun}>
                                <SelectLabel>
                                    {pronoun}
                                    <span className="text-xs text-muted-foreground">
                                        {' '}
                                        (subject)
                                    </span>
                                </SelectLabel>
                            </SelectItem>
                        ))}
                    {type === 'object' &&
                        objectPronouns.map((pronoun) => (
                            <SelectItem key={pronoun} value={pronoun}>
                                <SelectLabel>
                                    {pronoun}
                                    <span className="text-xs text-muted-foreground">
                                        {' '}
                                        (object)
                                    </span>
                                </SelectLabel>
                            </SelectItem>
                        ))}
                    {type === 'possessive' &&
                        possessivePronouns.map((pronoun) => (
                            <SelectItem key={pronoun} value={pronoun}>
                                <SelectLabel>
                                    {pronoun}
                                    <span className="text-xs text-muted-foreground">
                                        {' '}
                                        (possessive)
                                    </span>
                                </SelectLabel>
                            </SelectItem>
                        ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
