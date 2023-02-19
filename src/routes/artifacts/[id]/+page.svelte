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
  <section class="py-24">
    <div class="container mx-auto bg-[#121212] px-4">
      <p class="text-4xl font-semibold text-white">
        <span class="gifont">Artifact Set: {data.jsonFile.name}</span>
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
                class="max-w-full rounded-lg bg-[#1E1E1E] font-semibold text-gray-400 transition duration-150 ease-in-out hover:scale-105"
              >
                <p class="text-center">
                  <span class="text-white">2pc bonus:</span>
                  {data.jsonFile.default["2pc"]}
                </p>
              </div>

              <div
                class="max-w-full rounded-lg bg-[#1E1E1E] font-semibold text-gray-400   transition duration-150 ease-in-out hover:scale-105"
              >
                <p class="text-center">
                  <span class="text-white">4pc bonus:</span>
                  {data.jsonFile.default["4pc"]}
                </p>
              </div>
              <div class="grid grid-cols-1 gap-2">
                <!-- order: flower, plume, sands, goblet, circlet -->

                <div
                  class="flex items-center rounded-lg bg-[#1E1E1E] p-3 font-semibold   text-gray-400 transition duration-150 ease-in-out hover:scale-105 "
                >
                  <img
                    class="artifactImg object-left"
                    src="/images/artifacts/{id}/flower.png"
                    alt="flower from {data.jsonFile.default.name}"
                    loading="lazy"
                  />
                  <div>
                    <p class="gifont text-left text-xl text-white">
                      {data.jsonFile.flower.name}
                    </p>
                    <p class="text-left text-white">
                      "{data.jsonFile.flower.relictype}"
                    </p>
                    <p class="text-left italic text-gray-400">
                      "{data.jsonFile.flower.description}"
                    </p>
                  </div>
                </div>

                <div
                  class="flex items-center rounded-lg bg-[#1E1E1E] p-3 font-semibold   text-gray-400 transition duration-150 ease-in-out hover:scale-105 "
                >
                  <img
                    class="artifactImg object-left"
                    src="/images/artifacts/{id}/plume.png"
                    alt="plume from {data.jsonFile.default.name}"
                    loading="lazy"
                  />
                  <div>
                    <p class="gifont text-left text-xl text-white">
                      {data.jsonFile.plume.name}
                    </p>
                    <p class="text-left text-white">
                      "{data.jsonFile.plume.relictype}"
                    </p>
                    <p class="text-left italic text-gray-400">
                      "{data.jsonFile.plume.description}"
                    </p>
                  </div>
                </div>

                <div
                  class="flex items-center rounded-lg bg-[#1E1E1E] p-3 font-semibold   text-gray-400 transition duration-150 ease-in-out hover:scale-105 "
                >
                  <img
                    class="artifactImg object-left"
                    src="/images/artifacts/{id}/sands.png"
                    alt="sands from {data.jsonFile.default.name}"
                    loading="lazy"
                  />
                  <div>
                    <p class="gifont text-left text-xl text-white">
                      {data.jsonFile.sands.name}
                    </p>
                    <p class="text-left text-white">
                      "{data.jsonFile.sands.relictype}"
                    </p>
                    <p class="text-left italic text-gray-400">
                      "{data.jsonFile.sands.description}"
                    </p>
                  </div>
                </div>

                <div
                  class="flex items-center rounded-lg bg-[#1E1E1E] p-3 font-semibold  text-gray-400 transition duration-150 ease-in-out hover:scale-105 "
                >
                  <img
                    class="artifactImg object-left"
                    src="/images/artifacts/{id}/goblet.png"
                    alt="goblet from {data.jsonFile.default.name}"
                    loading="lazy"
                  />
                  <div>
                    <p class="gifont text-left text-xl text-white">
                      {data.jsonFile.goblet.name}
                    </p>
                    <p class="text-left text-white">
                      "{data.jsonFile.goblet.relictype}"
                    </p>
                    <p class="text-left italic text-gray-400">
                      "{data.jsonFile.goblet.description}"
                    </p>
                  </div>
                </div>

                <div
                  class="flex items-center rounded-lg bg-[#1E1E1E] p-3 font-semibold   text-gray-400 transition duration-150 ease-in-out hover:scale-105 "
                >
                  <img
                    class="artifactImg object-left"
                    src="/images/artifacts/{id}/circlet.png"
                    alt="circlet from {data.jsonFile.circlet.name}"
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
