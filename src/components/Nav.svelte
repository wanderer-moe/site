<style lang="postcss">
.active {
  @apply text-indigo-300;
}

header {
  z-index: 500;
}
</style>

<script>
import { t } from "svelte-i18n";
import { page } from "$app/stores";
import SearchBar from "./SearchBar.svelte";

let isSearchOpen = false;

function toggleSearch() {
  console.log("toggleSearch");
  isSearchOpen = !isSearchOpen;
}

let is_ctrl_down = false;
let is_k_down = false;

function on_bind() {
  toggleSearch();
}

function on_key_down(event) {
  if (event.repeat) return;
  // In the switch-case we're updating our boolean flags whenever the
  // desired bound keys are pressed.
  switch (event.key) {
    case "Control":
      is_ctrl_down = true;
      // By using `preventDefault`, it tells the Browser not to handle the
      // key stroke for its own shortcuts or text input.
      event.preventDefault();
      break;

    case "k":
      is_k_down = true;

      event.preventDefault();
      break;
  }
  // If both of boolean flags were truthy, that means our
  // keybind can be activated.
  if (is_ctrl_down && is_k_down) {
    on_bind();
  }
}

function on_key_up(event) {
  // `keyup` is the reverse, it fires whenever the physical key was let.
  // go after being held down
  // Just like our `keydown` handler, we need to update the boolean
  // flags, but in the opposite direction.
  switch (event.key) {
    case "Control":
      is_ctrl_down = false;

      event.preventDefault();
      break;

    case "k":
      is_k_down = false;

      event.preventDefault();
      break;
  }
}
</script>

<svelte:window on:keydown="{on_key_down}" on:keyup="{on_key_up}" />

<header class="relative w-full">
  <div>
    <div class="bg-[#141414] p-2">
      <div class="mx-auto flex flex-wrap items-center justify-between">
        <div class="md:px-12 lg:px-16">
          <a href="/" class="flex items-center" rel="external">
            <img src="/favicon.png" alt="logo" class="h-10 w-10" />
            <span class="text font-semibold text-white">wanderer.moe</span>
          </a>
        </div>

        <div class="flex items-center md:px-20">
          <ul class="mt-4 flex flex-row space-x-4 font-medium md:mt-0">
            <input
              class="hidden h-14 w-72 rounded-lg bg-black px-4 py-2 text-center text-xs text-white lg:block {$t(
                'direction'
              )}"
              readonly
              placeholder="{$t('globalSearch.searchBar')} (Ctrl + K)"
              on:click="{toggleSearch}" />
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
          </ul>

          <button
            class="px-4 py-2 focus:outline-none lg:ml-auto lg:mr-0 lg:mt-4 lg:hidden lg:h-12 lg:w-12 lg:px-5 lg:py-2.5"
            on:click="{toggleSearch}"
            aria-label="menu">
            <i
              class="fa-solid fa-search cursor-pointer text-white hover:text-indigo-300"
            ></i>
          </button>
          <button class="px-4 py-2 focus:outline-none lg:block">
            <a
              href="https://discord.wanderer.moe/"
              target="_blank"
              rel="noopener noreferrer">
              <i
                class="fa-brands fa-discord cursor-pointer text-white hover:text-indigo-300"
              ></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

{#if isSearchOpen}
  <SearchBar closeSearchBar="{() => (isSearchOpen = false)}" />
{/if}
