<script>
import { t } from 'svelte-i18n'
import { cubicOut, quintOut } from 'svelte/easing'
import { fly, fade } from 'svelte/transition'

export let closeFAQ

const faqEntries = [
    { question: 'faq.purpose', answer: 'faq.purposeAnswer' },
    { question: 'faq.downloadOnMobile', answer: 'faq.downloadOnMobileAnswer' },
    { question: 'faq.issueNotFound', answer: 'faq.issueNotFoundAnswer' },
]
</script>

<div>
    <div
        class="fixed left-1/2 top-1/2 z-[60] w-3/4 -translate-x-1/2 -translate-y-1/2 transform"
        in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
        out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}">
        <button
            class="close-button absolute right-0 top-6 rounded-lg p-4 text-white"
            on:click="{closeFAQ}">✕</button>
        <div class="rounded-lg bg-main-600 p-8 text-white">
            <div>
                <div class="flex justify-center">
                    <div class="flex flex-row items-center gap-2">
                        <img
                            src="https://cdn.wanderer.moe/honkai-star-rail/emotes/pom-pom-gallery---second-closed-beta-9.png"
                            alt="emote"
                            class="h-12 w-12" />
                        <p class="text-lg font-semibold">
                            {$t('faq.title')}
                        </p>
                    </div>
                </div>
                <div
                    class="mt-4 flex max-h-[70vh] flex-col gap-4 overflow-y-auto hyphens-auto break-words p-2 lg:flex-row">
                    {#each faqEntries as entry}
                        <div class="mb-2 flex-1">
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
        class="fixed left-0 top-0 z-50 h-full w-full backdrop-blur-sm backdrop-filter"
        in:fade="{{ easing: quintOut, duration: 750 }}"
        out:fade="{{ easing: cubicOut, duration: 300 }}"
        on:click="{closeFAQ()}"
        on:keypress="{closeFAQ()}">
    </div>
</div>
