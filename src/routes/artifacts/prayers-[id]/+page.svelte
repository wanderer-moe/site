<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let id = data.id;

  let rarity = "⭐".repeat(Math.max(...data.jsonFile.default.rarity));
</script>

<svelte:head>
  <title>{data.jsonFile.default.name} | wanderer.moe</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <section class="py-24 md:py-40">
    <div class="container px-4 mx-auto">
      <p class="text-white text-4xl font-semibold">
        <span class="gifont">Artifact Set: {data.jsonFile.default.name}</span>
      </p>
      <p class="text-white text-4xl">{rarity}</p>
      <br />

      <!-- stats section -->
      <div class="flex flex-wrap justify-center">
        <div class="w-full">
          <div class="flex flex-col">
            <!-- container for artifact name -->
            <div class="grid gap-2 items-center">
              <div
                class="bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg   max-w-full text-gray-400 font-semibold"
              >
                <p class="text-center">
                  <span class="text-white">1pc bonus:</span>
                  {data.jsonFile.default["1pc"]}
                </p>
              </div>

              <div class="grid grid-cols-1 gap-2">
                <!-- circlet is the only present item in prayers-[id] artifacts. -->

                <div
                  class="bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105  rounded-lg text-gray-400 font-semibold flex items-center "
                >
                  <img
                    class="object-left artifactImg"
                    src="/images/artifacts/prayers-{id}/circlet.png"
                    alt={data.jsonFile.circlet.name}
                    loading="lazy"
                  />
                  <div>
                    <p class="text-white gifont text-xl text-left">
                      {data.jsonFile.circlet.name}
                    </p>
                    <p class="text-white text-left">
                      "{data.jsonFile.circlet.relictype}"
                    </p>
                    <p class="text-gray-400 text-left italic">
                      "{data.jsonFile.circlet.description}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
