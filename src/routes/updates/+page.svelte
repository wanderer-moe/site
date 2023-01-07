<script>
export let data;
let updatelist = data.updates;
</script>

<svelte:head>
  <title>changelog | wanderer.moe</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <section class="py-24 md:py-40">
    <div class="container mx-auto px-4">
      <h1 class="gifont font-semibold text-white">Changelog</h1>
      <br />

      <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
        {#each updatelist as update}
          <div
            class="justify-center rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:text-indigo-300"
          >
            <p class="text-center text-sm font-semibold uppercase">
              {update.updateDate}
            </p>
            <p class="text-left text-sm text-white">{update.details}</p>
            <div class="text-right md:text-left"></div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
