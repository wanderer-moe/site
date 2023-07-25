import {
    possessivePronouns,
    subjectPronouns,
    objectPronouns,
    formatPronouns,
} from '@/lib/helpers/user/pronouns'
import { Session } from 'lucia'
import { Separator } from '@/components/ui/separator'
import { PronounList } from './pronounList'

export function PronounHandler({ session }: { session: Session }) {
    const pronounsOptions = ['subject', 'object', 'possessive']
    return (
        <div>
            <p className="font-bold">Pronouns</p>
            <p>
                This is where you can change your pronouns. Not all options are
                available.{' '}
                {session.user.pronouns
                    ? `Your current pronouns are ${session.user.pronouns}.`
                    : `You have not set your pronouns yet.`}
            </p>
            <div className="mt-2 flex flex-row flex-wrap gap-2">
                {pronounsOptions.map((pronoun) => (
                    <PronounList
                        session={session}
                        type={pronoun}
                        key={pronoun}
                    />
                ))}
            </div>
        </div>
    )
}
