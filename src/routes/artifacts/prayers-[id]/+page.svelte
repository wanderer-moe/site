<script>
/** @type {import('./$types').PageData} */
export let data;

let id = data.id;

let rarity = "⭐".repeat(Math.max(...data.jsonFile.default.rarity));
</script>

<svelte:head>
  <title>{data.jsonFile.default.name} | wanderer.moe</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <section class="py-24 md:py-40">
    <div class="container mx-auto px-4">
      <p class="text-4xl font-semibold text-white">
        <span class="gifont">Artifact Set: {data.jsonFile.default.name}</span>
      </p>
      <p class="text-4xl text-white">{rarity}</p>
      <br />

      <!-- stats section -->
      <div class="flex flex-wrap justify-center">
        <div class="w-full">
          <div class="flex flex-col">
            <!-- container for artifact name -->
            <div class="grid items-center gap-2">
              <div
                class="max-w-full rounded-lg bg-[#1E1E1E] font-semibold text-gray-400 transition   duration-150 ease-in-out hover:scale-105"
              >
                <p class="text-center">
                  <span class="text-white">1pc bonus:</span>
                  {data.jsonFile.default["1pc"]}
                </p>
              </div>

              <div class="grid grid-cols-1 gap-2">
                <!-- circlet is the only present item in prayers-[id] artifacts. -->

                <div
                  class="flex items-center rounded-lg bg-[#1E1E1E] font-semibold  text-gray-400 transition duration-150 ease-in-out hover:scale-105 "
                >
                  <img
                    class="artifactImg object-left"
                    src="/images/artifacts/prayers-{id}/circlet.png"
                    alt="{data.jsonFile.circlet.name}"
                    loading="lazy"
                  />
                  <div>
                    <p class="gifont text-left text-xl text-white">
                      {data.jsonFile.circlet.name}
                    </p>
                    <p class="text-left text-white">
                      "{data.jsonFile.circlet.relictype}"
                    </p>
                    <p class="text-left italic text-gray-400">
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
