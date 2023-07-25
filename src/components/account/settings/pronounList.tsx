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
import { Session } from 'lucia'

export function PronounList({
    session,
    type,
}: {
    session: Session
    type: string
}) {
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
                                    <span className="text-xs text-gray-400">
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
                                    <span className="text-xs text-gray-400">
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
                                    <span className="text-xs text-gray-400">
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
