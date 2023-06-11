<script>
// import { onMount } from 'svelte'
import { locale, t } from 'svelte-i18n'
// import { getCommitsRecent } from '@/lib/utils/github'
import { formatDateReadable } from '@/lib/utils/helpers'
// import Contribute from './Contribute.svelte'
import LocaleDropdown from './LocaleDropdown.svelte'

// let contributeOpen = false

const currentYear = new Date().getFullYear()

// let commit = []
// let commits = []
// let authorInfo = {
//     date: '',
//     name: '',
//     username: '',
// }
// let recentCommitMsg = ''
// let sha

// onMount(async () => {
//     commits = await getCommitsRecent(1)
//     try {
//         commit = commits[0]
//         authorInfo = commit.authorInfo
//         recentCommitMsg = commit.commitMsg
//         sha = commit.shaSpliced
//     } catch (error) {
//         commit = []
//     }
// })
</script>

<footer class="border-t border-main-300 bg-main-500 p-3 text-gray-400">
    <div class="px-3">
        <div class="align-left">
            <p class="text-sm">
                © 2022-{currentYear} — wanderer.moe by
                <a
                    href="https://dromzeh.dev/"
                    class="text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                    >dromzeh</a
                >. Powered by
                <a
                    href="https://cloudflare.com"
                    class="text-[#EC8224] hover:font-semibold"
                    target="_blank"
                    ><i class="fab fa-cloudflare"></i> Cloudflare</a>
                & our
                <a
                    href="/contributors"
                    class="animate-text cursor-pointer bg-gradient-to-tr from-accent-500 to-accent-100 bg-clip-text text-sm text-transparent hover:font-bold">
                    Contributors
                </a>
            </p>
            <p class="text-sm">
                {$t('footer.fanmadeNotice')}
            </p>
        </div>
        <div class="mt-2 text-sm">
            <a
                class="text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                href="https://discord.wanderer.moe">Discord</a>
            •
            <a
                class=" text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                href="/privacy-policy">Privacy</a>
            •
            <a
                class=" text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                href="https://wanderer.moe/asset-request-form/"
                >Asset Request Form</a>
            •
            <a
                class="text-neutral-100/80 hover:font-bold hover:text-neutral-100/90"
                href="https://git.wanderer.moe/">GitHub</a>
        </div>
    </div>
</footer>

<!-- {#if contributeOpen}
    <Contribute closeContribute="{() => (contributeOpen = false)}" />
{/if} -->
