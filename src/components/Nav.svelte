<style lang="postcss">
.active {
  @apply text-indigo-300;
}
</style>

<script>
import { page } from "$app/stores";
const nav = [
  { title: "Character Parts", path: "/characterparts" },
  { title: "Splash Art", path: "/splashart" },
  { title: "Artifacts", path: "/artifacts" },
  { title: "Characters", path: "/characters" },
  { title: "OC Generator", path: "/oc-generator" },
];

let mobileMenu;
let navBarButton;

function mobileClick(e) {
  if (mobilemenu.classList.contains("hidden")) {
    mobilemenu.classList.remove("hidden");
    mobilemenu.classList.add("visible");
    navBarButton.classList.replace("text-white", "text-indigo-300");
    navBarButton.classList.replace("fa-bars", "fa-xmark");
  } else {
    mobilemenu.classList.remove("visible");
    mobilemenu.classList.add("hidden");
    navBarButton.classList.replace("text-indigo-300", "text-white");
    navBarButton.classList.replace("fa-xmark", "fa-bars");
  }
}
</script>

<header>
  <div class="">
    <div class="bg-[#1E1E1E] p-5 shadow-lg">
      <div
        class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between"
      >
      <div>
        <a href="/" class="flex items-center">
          <img src="/favicon.png" alt="logo" />
          <span class="text-white font-semibold text-xl">wanderer.moe</span>
        </a>
      </div>

        <div class="flex items-center md:order-2">
          <ul class="mt-4 flex flex-row space-x-4 font-medium md:mt-0">
            {#each nav as item}
              <li>
                <a
                  href="{item.path}"
                  class:active="{$page.url.pathname == item.path}"
                  class="bg-primary-700 lg:text-primary-700 hidden w-full rounded  bg-opacity-0 p-1 py-2 pr-4 pl-3 font-semibold text-white hover:bg-opacity-5 hover:text-indigo-300 lg:block"
                  >{item.title}</a
                >
              </li>
            {/each}
          </ul>

          <button
            class="px-4 py-2 focus:outline-none lg:ml-auto lg:mr-0 lg:mt-4 lg:hidden lg:h-12 lg:w-12 lg:px-5 lg:py-2.5"
            on:click="{mobileClick}"
            aria-label="menu"
          >
            <i
              bind:this="{navBarButton}"
              class="fa-solid fa-bars cursor-pointer rounded  bg-opacity-0 text-white hover:bg-opacity-5 hover:text-indigo-300"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

<div id="mobilemenu" class="hidden" bind:this="{mobileMenu}">
  <div class="bg-[#1E1E1E] p-4 lg:hidden">
    <ul class="flex grid-cols-1 flex-col gap-3 font-medium">
      {#each nav as item}
        <li>
          <a
            href="{item.path}"
            class:active="{$page.url.pathname == item.path}"
            class="bg-primary-700 lg:text-primary-700 w-full rounded  bg-opacity-0 p-1 py-2 pr-4 pl-3 font-semibold text-white hover:bg-opacity-5 hover:text-indigo-300 lg:hidden"
            >{item.title}</a
          >
        </li>
      {/each}
    </ul>
  </div>
</div>
