<script>
import { t } from 'svelte-i18n'
import { cubicOut, quintOut } from 'svelte/easing'
import { fly } from 'svelte/transition'

let visible = ''
export let closeFAQ

const faqEntries = [
    { question: 'faq.purpose', answer: 'faq.purposeAnswer' },
    {
        question: 'faq.downloadMultipleOrAll',
        answer: 'faq.downloadMultipleOrAllAnswer',
    },
    { question: 'faq.downloadOnMobile', answer: 'faq.downloadOnMobileAnswer' },
    { question: 'faq.howToExtract', answer: 'faq.howToExtractAnswer' },
    { question: 'faq.issueNotFound', answer: 'faq.issueNotFoundAnswer' },
]
</script>

<div bind:this="{visible}">
    <div
        class="popupcontainer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}">
        <button
            class="close-button absolute right-0 top-6 rounded-lg p-4 text-white"
            on:click="{closeFAQ}">✕</button>
        <div class="mt-6 rounded-lg bg-main-600 p-2 text-white p-8">
            <div>
                <div class="rtl flex justify-center">
                    <div class="flex flex-col gap-2 items-center">
                        <img
                            src="https://cdn.wanderer.moe/genshin-impact/emotes/cyno-3.png"
                            alt="cyno"
                            class="h-12 w-12" />
                        <p class="font-semibold">
                            {$t('faq.title')}
                        </p>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row break-words hyphens-auto gap-4 mt-4 {$t('direction')}">
                    {#each faqEntries as entry}
                        <div class="flex-1 mb-2">
                            <p class="text-sm font-semibold">
                                Q. {$t(entry.question)}
                            </p>
                            <p class="text-sm text-gray-400">
                                A. {$t(entry.answer)}
                            </p>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div
        class="blackbg fixed left-0 top-0 h-full w-full backdrop-blur-sm backdrop-filter"
        on:click="{closeFAQ()}"
        on:keypress="{closeFAQ()}">
    </div>
</div>
