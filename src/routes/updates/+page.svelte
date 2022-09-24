<script context = "module">
  import data from "../../data/updateList.json";
  import Ads from "../../components/Ads.svelte";
</script>

<script>
  let updatelist = data.updates;
</script>

<svelte:head>
  <title>changelog | wanderer.moe</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <section class="py-24 md:py-40">
    <div class="container px-4 mx-auto">
      <h1 class="text-white font-semibold gifont">Changelog</h1>
      <br />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        {#each updatelist as update}
          <div
            class="bg-[#1E1E1E] transition duration-150 ease-in-out p-4 rounded-lg justify-center text-indigo-200 hover:text-indigo-300"
          >
            <p class="text-sm font-semibold uppercase text-center">
              {update.updateDate}
            </p>
            <p class="text-sm text-left text-white">{update.details}</p>
            <div class="text-right md:text-left" />
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
