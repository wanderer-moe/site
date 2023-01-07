<style lang="postcss">
.iconImg {
  max-width: none;
}
</style>

<script>
/** @type {import('./$types').PageData} */
export let data;

let id = data.id;

let rarity = "★".repeat(data.jsonFile.rarity);
</script>

<svelte:head>
  <title>{data.jsonFile.fullname} | wanderer.moe</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <div class="p-5">
    <div class="relative">
      <img
        src="/images/characters/{id}/Banner.png"
        class="absolute inset-0 h-full w-full object-cover"
        alt="{data.jsonFile.fullname}"
      />
      <div class="relative bg-[#1A1A1A] bg-opacity-10">
        <div class="p-5">
          <div class="flex flex-col">
            <!-- -->
            <div class="flex">
              <img
                class="iconImg hidden h-48 w-48 xl:block"
                src="/images/characters/{id}/Icon.png"
                alt="{data.jsonFile.fullname}"
              />
              <div
                class="w-full rounded bg-[#1A1A1A] bg-opacity-70 p-7 text-white shadow-2xl"
              >
                <div class="flex items-center">
                  <div>
                    <img
                      class="h-8 w-8"
                      src="/images/elements/{data.jsonFile.element.toLowerCase()}.png"
                      alt="{data.jsonFile.element} symbol"
                      loading="lazy"
                    />
                  </div>
                  <p class="gifont text-2xl text-white">
                    {data.jsonFile.fullname}
                  </p>
                </div>
                <!-- <p class="text-xs">{rarity}</p> -->

                <p class="text-l gifont text-white">
                  "{data.jsonFile.title}"
                  <span class="text-l justify-right align-right gifont"
                    >{rarity}</span
                  >
                </p>

                <hr class="m-1 text-white opacity-30" />

                <p class="gifont text-white">
                  Constellation: {data.jsonFile.constellation}
                </p>
                <p class="gifont text-white">
                  Affiliation: {data.jsonFile.affiliation}
                </p>
                <p class="gifont text-white">
                  Birthday: {data.jsonFile.birthday}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container mx-auto p-4 px-2">
    <p class="gifont text-xl text-white">Ascension Materials</p>
    <div
      class="max-w-full rounded-lg bg-[#1E1E1E] p-2 font-semibold text-gray-400 transition duration-150 ease-in-out hover:scale-105"
    >
      <div class="flex flex-wrap justify-center gap-10">
        <img
          class="h-16 w-16 object-contain"
          src="/images/items/{data.jsonFile.costs.ascend5[1].name
            .replace(/\s+/g, '-')
            .replace("'", '')
            .toLowerCase()}.png"
          alt="{data.jsonFile.costs.ascend5[1].name}"
          loading="lazy"
        />
        <img
          class="h-16 w-16 object-contain"
          src="/images/items/{data.jsonFile.costs.ascend5[2].name
            .replace(/\s+/g, '-')
            .replace("'", '')
            .toLowerCase()}.png"
          alt="{data.jsonFile.costs.ascend5[2].name}"
          loading="lazy"
        />
        <img
          class="h-16 w-16 object-contain"
          src="/images/items/{data.jsonFile.costs.ascend5[3].name
            .replace(/\s+/g, '-')
            .replace("'", '')
            .toLowerCase()}.png"
          alt="{data.jsonFile.costs.ascend5[3].name}"
          loading="lazy"
        />
        <img
          class="h-16 w-16 object-contain"
          src="/images/items/{data.jsonFile.costs.ascend5[4].name
            .replace(/\s+/g, '-')
            .replace("'", '')
            .toLowerCase()}.png"
          alt="{data.jsonFile.costs.ascend5[4].name}"
          loading="lazy"
        />
      </div>
    </div>
  </div>

  <div class="container mx-auto p-4 px-2">
    <p class="gifont text-xl text-white">Stats</p>
    <div
      class="container max-w-full rounded-lg bg-[#1E1E1E] p-2 text-gray-400 transition duration-150 ease-in-out hover:scale-105"
    >
      <div>
        <!-- table to store stats -->
        <div class="relative overflow-x-auto">
          <table class="gifont w-full text-left text-sm text-white">
            <tbody>
              <tr class="border-b border-opacity-5">
                <th
                  scope="row"
                  class="whitespace-nowrap py-4 px-6 font-medium text-white"
                >
                  Ascension Substat
                </th>
                <td class="py-4 px-6 text-right"> {data.jsonFile.substat} </td>
              </tr>
              <tr class="border-b border-opacity-5">
                <th
                  scope="row"
                  class="whitespace-nowrap py-4 px-6 font-medium text-white"
                >
                  Element
                </th>
                <td class="py-4 px-6 text-right"> {data.jsonFile.element} </td>
              </tr>
              <tr class="border-b border-opacity-5">
                <th
                  scope="row"
                  class="whitespace-nowrap py-4 px-6 font-medium text-white"
                >
                  Weapon Type
                </th>
                <td class="py-4 px-6 text-right">
                  {data.jsonFile.weapontype}
                </td>
              </tr>
              <tr class="border-b border-opacity-5">
                <th
                  scope="row"
                  class="whitespace-nowrap py-4 px-6 font-medium text-white"
                >
                  Region
                </th>
                <td class="py-4 px-6 text-right"> {data.jsonFile.region} </td>
              </tr>
              <tr class="border-opacity-5">
                <th
                  scope="row"
                  class="whitespace-nowrap py-4 px-6 font-medium text-white"
                >
                  Gender
                </th>
                <td class="py-4 px-6 text-right">
                  {data.jsonFile.gender}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  {#if data.jsonFile.artifactSet != "undefined" || data.jsonFile.artifactSet}
    <div class="container mx-auto p-4 px-2">
      <p class="gifont text-xl text-white">Reccomended Artifact</p>
      <div
        class="rounded-lg bg-[#1E1E1E] p-5 text-white transition duration-150 ease-in-out hover:scale-105"
      >
        <div class="flex items-center justify-center gap-10">
          <img
            class="h-16 w-16 object-left"
            src="/images/artifacts/{data.jsonFile.artifactSet
              .replace(/\s+/g, '-')
              .replace("'", '')
              .toLowerCase()}/flower.png"
            alt="{data.jsonFile.artifactSet}"
            loading="lazy"
          />
          <a
            href="/artifacts/{data.jsonFile.artifactSet
              .replace(/\s+/g, '-')
              .replace("'", '')
              .toLowerCase()}"
            ><p class="gifont text-2xl text-white hover:text-indigo-500">
              {data.jsonFile.artifactSet}
            </p></a
          >
        </div>
      </div>
    </div>
  {/if}
</div>
