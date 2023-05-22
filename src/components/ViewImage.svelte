<style>
.image-holder {
  background-blend-mode: overlay;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 90%;
  max-height: 90%;
  z-index: 1000;
}

img {
  height: 256px;
  width: 256px;
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
import { fly } from "svelte/transition";
import { cubicOut, quintOut } from "svelte/easing";
import { t } from "svelte-i18n";

export let imageUrl;
export let closeImageView;
</script>

<div class="image-holder fixed">
  <div
    in:fly="{{ y: 50, easing: quintOut, duration: 750 }}"
    out:fly="{{ y: 50, easing: cubicOut, duration: 300 }}">
    <img src="{imageUrl}" class="object-contain" alt="full view" />
    <p class="sigfont text-center text-white">{$t("viewImage.closeText")}</p>
  </div>
</div>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="blackbg fixed left-0 top-0 h-full w-full backdrop-blur-sm backdrop-filter"
  on:click="{closeImageView}">
</div>
