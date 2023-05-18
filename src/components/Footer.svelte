<style lang="postcss">
.locale-dropdown {
  @apply absolute bottom-8 w-40;
}
</style>

<script>
import { locale, t } from "svelte-i18n";
let dropDownMenu;
let menuOpen = false;

const languages = [
  { id: "en", label: "English" },
  { id: "nl", label: "Nederlands" },
  { id: "ja", label: "日本語" },
  { id: "it", label: "Italiano" },
  // { id: "ar", label: "العربية" },
  { id: "ro", label: "Română" },
  { id: "sv", label: "Svenska" },
  { id: "vi", label: "Tiếng Việt" },
  { id: "lol", label: "LOLCAT" },
];

const navLinks = [
  { name: "Discord Server", url: "/discord" },
  { name: "Donate", url: "/donate" },
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Asset Request Form", url: "/asset-request-form" },
];

$: currentLocale =
  $locale !== null
    ? languages.find((e) => e.id === $locale.substring(0, 3)) || {
        // allows for lolcat
        id: "en",
        label: "English",
      }
    : "";

$: locales = languages.filter((e) => e.id !== currentLocale.id);

function changeLocale(lang) {
  locale.set(lang);
  console.log("Locale changed to " + lang);
}

function toggleLocaleDropdown() {
  dropDownMenu.classList.toggle("hidden");
  menuOpen = !menuOpen;
}
</script>

<footer class="bg-[#141414] p-3 text-left text-gray-400">
  <div class="flex flex-col justify-between sm:flex-row">
    <div class="justify-start">
      <p class="text-sm">
        © 2022-2023 - <a
          href="https://wanderer.moe/"
          class="font-semibold text-white hover:text-indigo-300">wanderer.moe</a
        >. Created and programmed by
        <a
          href="https://dromzeh.dev/"
          class="font-semibold text-white hover:text-indigo-300">dromzeh</a
        >.
      </p>

      <p class="text-sm">
        {$t("footer.fanmadeNotice")}
      </p>

      <div class="mt-4">
        {#each navLinks as link}
          <a
            href="{link.url}"
            target="_blank"
            class="mr-4 text-sm font-semibold text-white hover:text-indigo-300"
            >{link.name}</a
          >
        {/each}
      </div>
    </div>
    <div class="p-03">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <div
        class="sigfont relative flex w-40 cursor-pointer items-center justify-center rounded-xl bg-black p-1"
        on:click="{toggleLocaleDropdown}"
      >
        <img
          class="mr-2 h-4 w-4 rounded-lg"
          alt="{currentLocale.label}"
          src="https://cdn.wanderer.moe/locales/{currentLocale.id}.png"
        />
        <span class="text-white"
          >{currentLocale.label}
          <!--
          {#if menuOpen}
            <span class="text-white"
              ><i class="fa-solid fa-chevron-up"></i></span
            >
          {:else}
            <span class="text-white"
              ><i class="fa-solid fa-chevron-down"></i></span
            >
          {/if}
          -->
        </span>
        <div class="locale-dropdown hidden" bind:this="{dropDownMenu}">
          <div class="mb-2 grid grid-cols-1 rounded-xl bg-black">
            {#each locales as locale}
              <!-- svelte-ignore a11y-click-events-have-key-events -->
              <div
                class="sigfont flex items-center justify-center p-1"
                on:click="{() => changeLocale(locale.id)}"
              >
                <img
                  class="mr-2 h-4 w-4 rounded-lg"
                  alt="{locale.label}"
                  src="https://cdn.wanderer.moe/locales/{locale.id}.png"
                />
                <span
                  class="sigfont cursor-pointer text-gray-400 hover:text-white"
                  >{locale.label}</span
                >
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
