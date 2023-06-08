<script>
import { onMount } from 'svelte'
import { locale, t } from 'svelte-i18n'
import { getCommitsRecent } from '@/lib/utils/github'
import { formatDateReadable } from '@/lib/utils/helpers'
import Contribute from './Contribute.svelte'

let dropDownMenu
let contributeOpen = false
let menuOpen = false

const currentYear = new Date().getFullYear()

// TODO: finish correct RTL arabic support
// { id: "ar", label: "العربية" }

const languages = [
    { id: 'en', label: 'English' },
    { id: 'nl', label: 'Nederlands' },
    { id: 'ja', label: '日本語' },
    { id: 'it', label: 'Italiano' },
    { id: 'ro', label: 'Română' },
    { id: 'sv', label: 'Svenska' },
    { id: 'vi', label: 'Tiếng Việt' },
    { id: 'lol', label: 'LOLCAT' },
]

$: currentLocale =
    $locale !== null
        ? languages.find((e) => e.id === $locale.substring(0, 3)) || {
              // substring 3 allows for lolcat
              id: 'en',
              label: 'English',
          }
        : ''

$: locales = languages.filter((e) => e.id !== currentLocale.id)

function changeLocale(lang) {
    locale.set(lang)
    console.log('Locale changed to ' + lang)
}

function toggleLocaleDropdown() {
    dropDownMenu.classList.toggle('hidden')
    menuOpen = !menuOpen
}

let commit = []
let commits = []
let authorInfo = {
    date: '',
    name: '',
    username: '',
}
let recentCommitMsg = ''
let sha

onMount(async () => {
    commits = await getCommitsRecent(1)
    try {
        commit = commits[0]
        authorInfo = commit.authorInfo
        recentCommitMsg = commit.commitMsg
        sha = commit.shaSpliced
    } catch (error) {
        commit = []
    }
})
</script>

<footer class="text-left text-gray-400">
    <div class="flex items-center justify-center p-6 lg:justify-center">
        <div class="px-3 text-center">
            <div class="mb-3">
                <div class="mb-3">
                    <p class="text-sm">
                        {$t('footer.fanmadeNotice')}
                    </p>
                    <p class="text-sm">
                        © 2022-{currentYear} — wanderer.moe by
                        <a
                            href="https://dromzeh.dev/"
                            class="text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                            >dromzeh</a
                        >. Powered by <a href = “https://cloudflare.com” class=“text-[#EC8224]" target=“_blank”><i class="fab fa-cloudflare"></i> Cloudflare</a>
                    </p>
                </div>
                <div class="text-sm">
                    <a
                        class="text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                        href="https://discord.wanderer.moe">Discord</a>
                    •
                    <a
                        class=" text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                        href="https://wanderer.moe/privacy-policy">Privacy</a>
                    •
                    <a
                        class=" text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                        href="https://wanderer.moe/asset-request-form/"
                        >Asset Request Form</a>
                    •
                    <a
                        class="text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                        href="https://git.wanderer.moe/">GitHub</a>
                    •
                    <span
                        on:click="{() => (contributeOpen = !contributeOpen)}"
                        on:keypress="{() => (contributeOpen = !contributeOpen)}"
                        class="animate-text cursor-pointer bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-sm text-transparent hover:font-bold">
                        Contribute
                    </span>
                </div>

                {#if authorInfo && recentCommitMsg && sha}
                    <a href="https://git.wanderer.moe/site/commit/{sha}">
                        <p class="mt-4 text-xs text-gray-500">
                            <i class="fab fa-github"></i> Last updated on {formatDateReadable(
                                authorInfo.date
                            )} by {authorInfo.username} ({authorInfo.name}) : "{recentCommitMsg}"
                        </p>
                    </a>
                {/if}

                <div class="select-none p-3">
                    <div
                        class="relative flex w-full cursor-pointer select-none items-center justify-center rounded-xl bg-main-700 p-1"
                        on:keypress="{toggleLocaleDropdown}"
                        on:click="{toggleLocaleDropdown}">
                        <img
                            class="mr-2 h-4 w-4 rounded-lg"
                            alt="{currentLocale.label}"
                            src="https://cdn.wanderer.moe/locales/{currentLocale.id}.png" />
                        <span class="text-white">{currentLocale.label}</span>
                        <div
                            class="absolute bottom-8 hidden w-full"
                            bind:this="{dropDownMenu}">
                            <div
                                class="mb-2 grid grid-cols-1 rounded-xl bg-main-700">
                                {#each locales as locale}
                                    <div
                                        class="flex items-center justify-center p-1"
                                        on:keypress="{() =>
                                            changeLocale(locale.id)}"
                                        on:click="{() =>
                                            changeLocale(locale.id)}">
                                        <img
                                            class="mr-2 h-4 w-4 rounded-lg"
                                            alt="{locale.label}"
                                            src="https://cdn.wanderer.moe/locales/{locale.id}.png" />
                                        <span
                                            class="cursor-pointer text-gray-400 hover:text-white"
                                            >{locale.label}</span>
                                    </div>
                                {/each}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

{#if contributeOpen}
    <Contribute closeContribute="{() => (contributeOpen = false)}" />
{/if}
