<script>
  import { page } from "$app/stores";
</script>

<svelte:head>
  <title>{$page.status}</title>
</svelte:head>

<div class="flex h-screen">
  <div class="m-auto text-center">
    <img
      class="h-16 w-16 inline"
      src="/images/emotes/UI_EmotionIcon10.png"
      alt="genshin emote"
    />
    <p class="text-red-400 text-5xl font-semibold">{$page.status}</p>
    <p class="text-white text-xl">{$page.error.message}</p>

    {#if $page.status == "500"}
      <p class="text-gray-400 text-sm">
        Not supposed to be seeing this? This site is still in heavy development
        & bugs are bound to occur. Check the <a
          href="https://discord.gg/659KAFfNd6"
          class="font-semibold text-white hover:text-indigo-500">discord</a
        > server for more information.
      </p>
    {/if}

    <p class="text-gray-400 text-sm">
      Try refreshing the page, or <a
        href="/"
        class="font-semibold text-white hover:text-indigo-500">go back...</a
      >
    </p>
  </div>
</div>
