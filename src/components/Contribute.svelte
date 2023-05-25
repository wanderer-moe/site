<style lang="postcss">
.contributecontainer {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  z-index: 1000;
}

.blackbg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
}
</style>

<script>
import { t } from "svelte-i18n";
let visible = "";
import { fly } from "svelte/transition";
import { cubicOut, quintOut } from "svelte/easing";
export let closeContribute;
</script>

<div bind:this="{visible}">
  <div
    class="contributecontainer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
    in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
    out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}">
    <button
      class="close-button absolute right-0 top-[15px] rounded-lg bg-[#17171A] p-2 text-white"
      on:click="{closeContribute}">X</button>
    <div class="mt-6 rounded-lg bg-[#141414] p-2 text-gray-400">
      <div>
        <div class="flex justify-center">
          <div class="rtl flex items-center">
            <img
              src="https://cdn.wanderer.moe/genshin-impact/emotes/cat.png"
              alt="cat"
              class="h-12 w-12" />
            <p
              class="bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-lg font-semibold text-transparent">
              Contribute
            </p>
          </div>
        </div>
        <div class="mt-2">
          <div class="mb-2 grid gap-3">
            <p class="text-sm">
              wanderer.moe <span class="font-semibold text-white"
                >will always be free to use, untracked, and (mostly) ad-free.</span>
              If you like this website, please consider contributing or
              <a
                href="https://buymeacoffee.com/marcelmd"
                target="_blank"
                class="font-semibold text-white">donating</a> to help keep it running.
            </p>
            <p class="text-sm">
              All donations go directly towards server costs, maintenance, and
              development of new assets & features for wanderer.moe, this
              project is not and won't ever be to gain profit, but to provide
              for the communities who use this website.
            </p>
            <p class="text-sm">
              If you're interested in reading more, there is a <a
                class="font-semibold text-white hover:text-indigo-400"
                target="_blank"
                href="https://dromzeh.dev/posts/wanderer-moe-website-breakdown/"
                >blog post here</a> about the website, breaking down the costs and
              how it works.
            </p>
            <p class="text-sm">
              If you want to help Contribute by providing assets for other users
              of the site (datamined or fan-made!) or for translations, please
              join the <a
                class="font-semibold text-white hover:text-indigo-400"
                target="_blank"
                href="https://discord.wanderer.moe/">discord server</a> and contact
              me there, you will be credited for your contributions on the site and
              on the discord.
            </p>
            <p class="text-xs">
              and for any other inquires, <a
                class="font-semibold text-white hover:text-indigo-400"
                href="mailto:marcel@wanderer.moe">send an email</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="blackbg fixed left-0 top-0 h-full w-full backdrop-blur-sm backdrop-filter"
    on:click="{closeContribute()}"
    on:keypress="{closeContribute()}">
  </div>
</div>
