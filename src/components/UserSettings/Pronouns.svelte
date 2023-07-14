<script lang="ts">
import PronounsDropdown from '@/components/UserSettings/PronounsDropdown.svelte'
import {
    subjectPronouns,
    possessivePronouns,
    objectPronouns,
} from '@/lib/helpers/user/pronouns'
import { onMount } from 'svelte'
export let user

let currentSubjectPronoun, currentObjectPronoun, currentPossessivePronoun

// check if user has pronouns, if not other separate them by / => he/him/his => he, him, his
onMount(() => {
    if (user.pronouns && user.pronouns !== 'other') {
        const pronouns = user.pronouns.split('/')
        console.log(pronouns)
        if (pronouns.length === 3) {
            ;[
                currentSubjectPronoun,
                currentObjectPronoun,
                currentPossessivePronoun,
            ] = pronouns
        }
    }
})
</script>

<div class="bg-main-500 border-2 border-main-400 rounded-md text-white p-2">
    <p class="text-lg font-bold">Pronouns</p>
    <p class="text-xs text-gray-400">
        Data collected from pronouns.page, not all pronouns are available due to
        limitations and to prevent misuse of this feature.
    </p>
    <div class="grid grid-cols-1 mt-2 gap-3">
        <div>
            <p class="text-lg font-bold">
                Subject <span class="text-xs text-gray-400"
                    >(he, she, they, etc.)</span>
            </p>
            <PronounsDropdown
                pronounsList="{subjectPronouns}"
                bind:currentSelected="{currentSubjectPronoun}" 
                type="subject"
                />
        </div>
        <div>
            <p class="text-lg font-bold">
                Object <span class="text-xs text-gray-400"
                    >(him, her, them, etc.)</span>
            </p>
            <PronounsDropdown
                pronounsList="{objectPronouns}"
                bind:currentSelected="{currentObjectPronoun}" 
                type="object"
                />
        </div>
        <div>
            <p class="text-lg font-bold">
                Possessive <span class="text-xs text-gray-400"
                    >(his, hers, theirs, etc.)</span>
            </p>
            <PronounsDropdown
                pronounsList="{possessivePronouns}"
                bind:currentSelected="{currentPossessivePronoun}" 
                type="possessive"
                />
        </div>
    </div>
</div>
