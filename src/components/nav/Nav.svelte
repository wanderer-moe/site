<script>
import { t } from 'svelte-i18n'
</script>

<header
    class="sticky top-0 z-50 w-full border-b border-main-300 bg-main-500 bg-opacity-75 p-2 backdrop-blur-lg backdrop-filter transition-opacity">
    <div class="mx-auto flex flex-wrap items-center justify-between">
        <div class="md:px-12 lg:px-16">
            <a href="/" class="flex items-center gap-1" rel="external">
                <img src="/logo.png" alt="logo" class="h-12 w-12" />
                <div class="flex flex-col">
                    <span class="text text-xl font-bold text-white"
                        >wanderer.moe</span>
                </div>
            </a>
        </div>

        <div class="flex items-center md:px-20">
            <ul class="mt-4 flex flex-row space-x-4 font-medium md:mt-0">
                <div
                    class="rounded-lg border-[2px] border-main-400 transition-colors duration-150 hover:border-main-300">
                </div>
                <button class="hidden px-4 py-2 focus:outline-none lg:hidden">
                    <a
                        href="https://discord.wanderer.moe/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i
                            class="fa-brands fa-discord cursor-pointer text-white hover:text-indigo-300"
                        ></i>
                    </a>
                </button>
                <button class="hidden px-4 py-2 focus:outline-none lg:hidden">
                    <a
                        href="https://git.wanderer.moe/"
                        target="_blank"
                        rel="noopener noreferrer">
                        <i
                            class="fa-brands fa-github cursor-pointer text-white hover:text-indigo-300"
                        ></i>
                    </a>
                </button>
            </ul>

            <button class="px-4 focus:outline-none lg:block lg:pl-4 lg:pr-2">
                <a
                    href="https://discord.wanderer.moe/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i
                        class="fa-brands fa-discord cursor-pointer text-white hover:text-indigo-300"
                    ></i>
                </a>
            </button>
            <button class="px-4 focus:outline-none lg:block lg:pl-2 lg:pr-4">
                <a
                    href="https://git.wanderer.moe/"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i
                        class="fa-brands fa-github cursor-pointer text-white hover:text-indigo-300"
                    ></i>
                </a>
            </button>
        </div>
    </div>
</header>
