<script>
import { t } from 'svelte-i18n'
import LocaleDropdown from '@/components/LocaleDropdown.svelte'
const currentYear = new Date().getFullYear()
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
            </div>
            <div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
                <div>
                    <p class="mb-6 font-semibold text-white">Socials</p>
                    <ul>
                        <li class="mb-4">
                            <a
                                href="https://git.wanderer.moe/"
                                class="hover:font-semibold hover:text-white"
                                >GitHub</a>
                        </li>
                        <li>
                            <a
                                href="https://discord.wanderer.moe/"
                                class="hover:font-semibold hover:text-white"
                                >Discord</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="mb-6 font-semibold text-white">Legal</p>
                    <ul>
                        <li class="mb-4">
                            <a
                                href="/privacy-policy"
                                class="hover:font-semibold hover:text-white"
                                >Privacy Policy</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <p class="mb-6 font-semibold text-white">Other</p>
                    <ul>
                        <li class="mb-4">
                            <a
                                href="https://wanderer.moe/asset-request-form"
                                class="hover:font-semibold hover:text-white"
                                >Asset Request Form</a>
                        </li>
                        <li>
                            <a
                                href="/contributors"
                                class="hover:font-semibold hover:text-white"
                                >Contributors</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-main-300 sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm sm:text-center"
                >© 2022-{currentYear} — {$t('footer.fanmadeNotice')}
            </span>
            <div class="mt-4 flex justify-center">
                <LocaleDropdown />
            </div>
        </div>
    </div>
</footer>
