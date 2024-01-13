<script>
import { t } from 'svelte-i18n'
import LocaleDropdown from '@/components/dropdowns/LocaleDropdown.svelte'
import Status from '@/components/Status.svelte'
import Contribute from '@/components/popouts/Contribute.svelte'
const currentYear = new Date().getFullYear()
import Faq from '@/components/popouts/Faq.svelte'

let contributeOpen = false
let isFaqOpen = false
</script>

<footer
    class="border-t border-main-300 bg-main-500 bg-opacity-75 p-3 text-gray-400 backdrop-blur-lg backdrop-filter transition-opacity">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a href="/" class="flex items-center gap-1" rel="external"
                    ><img src="/logo.png" alt="logo" class="h-12 w-12" />
                    <span class="text text-xl font-semibold text-white"
                        >wanderer.moe</span
                    ></a>
                <div class="mt-2 grid gap-2">
                    <Status />
                    <LocaleDropdown />
                </div>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
                <div>
                    <p class="mb-6 font-semibold text-white">Socials</p>
                    <ul>
                        <li class="mb-4">
                            <a
                                href="https://twitter.com/dromzeh"
                                target="_blank"
                                class="text-white transition-all hover:underline"
                                >Dev Twitter</a>
                        </li>
                        <li class="mb-4">
                            <a
                                href="https://tiktok.com/@dromzeh"
                                target="_blank"
                                class="text-white transition-all hover:underline"
                                >Dev TikTok</a>
                        </li>
                        <li class="mb-4">
                            <a
                                href="https://discord.wanderer.moe/"
                                target="_blank"
                                class="text-white transition-all hover:underline"
                                >Discord Server</a>
                        </li>
                        <li class="mb-4">
                            <a
                                href="https://git.wanderer.moe/"
                                target="_blank"
                                class="text-white transition-all hover:underline"
                                >GitHub</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="mb-6 font-semibold text-white">Legal</p>
                    <ul>
                        <li class="mb-4">
                            <a
                                href="/privacy-policy"
                                class="text-white transition-all hover:underline"
                                >Privacy Policy</a>
                        </li>
                        <li class="mb-4">
                            <a
                                href="/terms-of-service"
                                class="text-white transition-all hover:underline"
                                >Terms of Service</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="mb-6 font-semibold text-white">Other</p>
                    <ul>
                        <li class="mb-4">
                            <a
                                href="https://wanderer.moe/asset-request-form"
                                target="_blank"
                                class="text-white transition-all hover:underline"
                                >Asset Request Form</a>
                        </li>
                        <li class="mb-4">
                            <a
                                href="/contributors"
                                class="text-white transition-all hover:underline"
                                >Contributors</a>
                        </li>
                        <li class="mb-4">
                            <p
                                on:keypress="{() => (contributeOpen = true)}"
                                on:click="{() => (contributeOpen = true)}"
                                class="cursor-pointer text-white transition-all hover:underline">
                                Contribute
                            </p>
                        </li>
                        <li class="mb-4">
                            <p
                                on:keypress="{() => (isFaqOpen = true)}"
                                on:click="{() => (isFaqOpen = true)}"
                                class="cursor-pointer text-white transition-all hover:underline">
                                FAQ
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-main-300 sm:mx-auto lg:my-8" />
        <div class="text-center">
            <div>
                <p class="text-sm">
                    © 2022-{currentYear} — {$t('footer.fanmadeNotice')}
                </p>
                <p class="">
                    Created with <i class="fas fa-heart text-red-500"></i> by
                    <a
                        href="https://dromzeh.dev/?ref=wanderer.moe"
                        class="text-white transition-all hover:underline"
                        >dromzeh</a
                    >, powered by
                    <a
                        href="https://cloudflare.com/"
                        class="text-white transition-all hover:underline"
                        >Cloudflare</a>
                </p>
            </div>
        </div>
    </div>
</footer>

{#if contributeOpen}
    <Contribute closeContribute="{() => (contributeOpen = false)}" />
{/if}

{#if isFaqOpen}
    <Faq closeFAQ="{() => (isFaqOpen = false)}" />
{/if}
