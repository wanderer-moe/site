<script>
  const helpfulSites = [
    { url: "Dimbreath/GenshinData", details: "Overall data." },
    { url: "theBowja/genshin-db", details: "Organized data from GenshinData" },
    { url: "tailwindlabs/tailwindcss", details: "CSS Framework used" },
    { url: "sveltejs/sveltekit", details: "What the website is made with" },
    { url: "frzyc/genshin-optimizer", details: "Image Assets" },
    { url: "genshin-impact.fandom.com", details: "Image Assets" },
    { url: "genshin.hoyoverse.com", details: "Preview Pages - where the 'Character Parts' come from.." }
  ];
</script>

<svelte:head>
  <title>info | wanderer.moe</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <section class="py-24 md:py-40">
    <div class="container px-4 mx-auto">
      <h1 class="text-white font-semibold gifont">Site Information</h1>
      <p class="text-gray-400">
        This website was made thanks to the help of the following:
      </p>
      <br />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        {#each helpfulSites as site}
          <div
            class="bg-[#1F1A1A] transition duration-150 ease-in-out p-4 rounded-lg justify-center text-indigo-200 hover:text-indigo-300"
          >
            <p class="text-sm font-semibold uppercase text-center">
              {site.url}
            </p>
            <p class="text-sm text-left text-white">{site.details}</p>
            <div class="text-right md:text-left" />
          </div>
        {/each}
      </div>

      <p class="text-gray-400 text-m">
        You can view the update changelog <a
          href="/updates"
          class="font-semibold text-white  hover:text-indigo-500">here</a
        >.
      </p>
    </div>
  </section>
</div>
