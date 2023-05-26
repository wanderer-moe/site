<script>
import Contribute from "./Contribute.svelte";
import { locale, t } from "svelte-i18n";
import { onMount } from "svelte";
import { getCommitRecent } from "../lib/utils/commit";
import { formatDateReadable } from "../lib/utils/helpers";
let dropDownMenu;
let contributeOpen = false;
let menuOpen = false;

const currentYear = new Date().getFullYear();

function toggleContribute() {
  contributeOpen = !contributeOpen;
}

// TODO: finish correct RTL arabic support
const languages = [
  { id: "en", label: "English" },
  { id: "nl", label: "Nederlands" },
  { id: "ja", label: "日本語" },
  { id: "it", label: "Italiano" },
  // { id: "ar", label: "العربية" }
  { id: "ro", label: "Română" },
  { id: "sv", label: "Svenska" },
  { id: "vi", label: "Tiếng Việt" },
  { id: "lol", label: "LOLCAT" },
];

const navLinks = [
  { name: "Discord Server", url: "/discord" },
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

let recentCommitMsg = "";
let shaSpliced = "";
let sha = "";
let authorInfo = [];

onMount(async () => {
  const {
    recentCommitMsg: msg,
    shaSpliced: spliced,
    sha: shaValue,
    authorInfo: author,
  } = await getCommitRecent();
  authorInfo = author;
  recentCommitMsg = msg;
  shaSpliced = spliced;
  sha = shaValue;
});
</script>

<footer class="bg-[#141414] p-3 text-left text-gray-400">
  <div class="flex flex-col justify-between sm:flex-row">
    <div class="justify-start">
      <p class="text-sm">
        © 2022-{currentYear} - Created and programmed by
        <a
          href="https://dromzeh.dev/"
          class="font-semibold text-white hover:text-indigo-300">dromzeh</a
        >.
      </p>

      <p class="text-sm">
        {$t("footer.fanmadeNotice")}
      </p>

      {#if recentCommitMsg}
        <a href="https://git.dromzeh.dev/wanderer.moe/commit/{sha}">
          <p class="mt-1 text-xs text-gray-500">
            <i class="fab fa-github"></i> Last updated {formatDateReadable(
              authorInfo.date
            )} by {authorInfo.name} ({authorInfo.username}): "{recentCommitMsg}"
          </p>
        </a>
      {/if}

      <div class="mt-4">
        {#each navLinks as link}
          <a
            href="{link.url}"
            target="_blank"
            class="mr-4 text-sm font-semibold text-white hover:text-indigo-300"
            >{link.name}</a>
        {/each}
        <span
          on:click="{toggleContribute}"
          on:keypress="{toggleContribute}"
          class="mr-4 animate-text cursor-pointer bg-gradient-to-tr from-violet-500 to-orange-300 bg-clip-text text-sm font-bold text-transparent">
          Contribute
        </span>
      </div>
    </div>
    <div class="p-3">
      <div
        class="sigfont relative flex w-full cursor-pointer items-center justify-center rounded-xl bg-black p-1 sm:w-40"
        on:keypress="{toggleLocaleDropdown}"
        on:click="{toggleLocaleDropdown}">
        <img
          class="mr-2 h-4 w-4 rounded-lg"
          alt="{currentLocale.label}"
          src="https://cdn.wanderer.moe/locales/{currentLocale.id}.png" />
        <span class="text-white">{currentLocale.label} </span>
        <div
          class="absolute bottom-8 hidden w-full sm:w-40"
          bind:this="{dropDownMenu}">
          <div class="mb-2 grid grid-cols-1 rounded-xl bg-black">
            {#each locales as locale}
              <div
                class="sigfont flex items-center justify-center p-1"
                on:keypress="{() => changeLocale(locale.id)}"
                on:click="{() => changeLocale(locale.id)}">
                <img
                  class="mr-2 h-4 w-4 rounded-lg"
                  alt="{locale.label}"
                  src="https://cdn.wanderer.moe/locales/{locale.id}.png" />
                <span
                  class="sigfont cursor-pointer text-gray-400 hover:text-white"
                  >{locale.label}</span>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

{#if contributeOpen}
  <Contribute closeContribute="{() => (contributeOpen = false)}" />
{/if}
