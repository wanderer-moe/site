<style lang="postcss">
.faqcontainer {
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
export let closeFAQ;

const faqEntries = [
  { question: "faq.purpose", answer: "faq.purposeAnswer" },
  {
    question: "faq.downloadMultipleOrAll",
    answer: "faq.downloadMultipleOrAllAnswer",
  },
  { question: "faq.downloadOnMobile", answer: "faq.downloadOnMobileAnswer" },
  { question: "faq.howToExtract", answer: "faq.howToExtractAnswer" },
  { question: "faq.issueNotFound", answer: "faq.issueNotFoundAnswer" },
];
</script>

<div bind:this="{visible}">
  <div
    class="faqcontainer left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
    in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
    out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}">
    <button
      class="close-button absolute right-0 top-[15px] rounded-lg bg-[#17171A] p-2 text-white"
      on:click="{closeFAQ}">X</button>
    <div class="mt-6 rounded-lg bg-[#141414] p-2 text-white">
      <div>
        <div class="flex justify-center">
          <div class="rtl flex items-center">
            <img
              src="https://cdn.wanderer.moe/genshin-impact/emotes/cyno-3.png"
              alt="cyno"
              class="h-12 w-12" />
            <p class="font-semibold">
              {$t("faq.title")}
            </p>
          </div>
        </div>
        <div class="mt-2">
          {#each faqEntries as entry}
            <div class="mb-2">
              <p class="text-sm font-semibold">
                {$t(entry.question)}
              </p>
              <p class="text-sm text-gray-400">
                {$t(entry.answer)}
              </p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class="blackbg fixed left-0 top-0 h-full w-full backdrop-blur-sm backdrop-filter"
    on:click="{closeFAQ()}">
  </div>
</div>
