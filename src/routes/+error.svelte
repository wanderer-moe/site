<script>
import { page } from "$app/stores";
</script>

<svelte:head>
  <title>{$page.status}</title>
</svelte:head>

<div class="flex h-screen">
  <div class="m-auto text-center">
    <p class="text-5xl font-semibold text-red-400">{$page.status}</p>
    <p class="text-xl text-white">{$page.error.message}</p>

    {#if $page.status == "500"}
      <p class="text-sm text-gray-400">
        Not supposed to be seeing this? This site is still in heavy development
        & bugs are bound to occur. Check the <a
          href="https://discord.gg/659KAFfNd6"
          class="font-semibold text-white hover:text-indigo-500">discord</a
        > server for more information.
      </p>
    {/if}

    <p class="text-sm text-gray-400">
      Try refreshing the page, or <a
        href="/"
        class="font-semibold text-white hover:text-indigo-500">go back...</a
      >
    </p>
  </div>
</div>
