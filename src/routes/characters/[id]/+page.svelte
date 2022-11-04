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

<div class="flex flex-col min-h-screen">
  <div class="p-5">
    <div class="relative">
      <img
        src="/images/characters/{id}/Banner.png"
        class="absolute inset-0 object-cover w-full h-full"
        alt="{data.jsonFile.fullname}" />
      <div class="relative bg-[#1A1A1A] bg-opacity-10">
        <div class="p-5">
          <div class="flex flex-row">
            <!-- -->
            <div class="flex">
              <img
                class="w-48 h-48 iconImg hidden xl:block"
                src="/images/characters/{id}/Icon.png"
                alt="{data.jsonFile.fullname}" />
              <div
                class="bg-[#1A1A1A] bg-opacity-70 text-white rounded shadow-2xl p-7 w-full">
                <div class="flex items-center">
                  <div>
                    <img
                      class="w-8 h-8"
                      src="/images/elements/{data.jsonFile.element.toLowerCase()}.png"
                      alt="{data.jsonFile.element} symbol"
                      loading="lazy" />
                  </div>
                  <p class="text-white text-2xl gifont">
                    {data.jsonFile.fullname}
                  </p>
                </div>
                <!-- <p class="text-xs">{rarity}</p> -->

                <p class="text-white text-l gifont">
                  "{data.jsonFile.title}"
                  <span class="text-l justify-right align-right gifont"
                    >{rarity}</span>
                </p>

                <hr class="text-white m-1 opacity-30" />

                <p class="text-white gifont">
                  Constellation: {data.jsonFile.constellation}
                </p>
                <p class="text-white gifont">
                  Affiliation: {data.jsonFile.affiliation}
                </p>
                <p class="text-white gifont">
                  Birthday: {data.jsonFile.birthday}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container px-2 mx-auto p-4">
    <p class="text-white text-xl gifont">Ascension Materials</p>
    <div
      class="bg-[#1E1E1E] transition duration-150 ease-in-out hover:scale-105 p-2 rounded-lg max-w-full text-gray-400 font-semibold">
      <div class="flex flex-wrap gap-10 justify-center">
        <img
          class="object-contain h-16 w-16"
          src="/images/items/{data.jsonFile.costs.ascend5[1].name
            .replace(/\s+/g, '-')
            .replace("'", '')
            .toLowerCase()}.png"
          alt="{data.jsonFile.costs.ascend5[1].name}"
          loading="lazy" />
        <img
          class="object-contain h-16 w-16"
          src="/images/items/{data.jsonFile.costs.ascend5[2].name
            .replace(/\s+/g, '-')
            .replace("'", '')
            .toLowerCase()}.png"
          alt="{data.jsonFile.costs.ascend5[2].name}"
          loading="lazy" />
        <img
          class="object-contain h-16 w-16"
          src="/images/items/{data.jsonFile.costs.ascend5[3].name
            .replace(/\s+/g, '-')
            .replace("'", '')
            .toLowerCase()}.png"
          alt="{data.jsonFile.costs.ascend5[3].name}"
          loading="lazy" />
        <img
          class="object-contain h-16 w-16"
          src="/images/items/{data.jsonFile.costs.ascend5[4].name
            .replace(/\s+/g, '-')
            .replace("'", '')
            .toLowerCase()}.png"
          alt="{data.jsonFile.costs.ascend5[4].name}"
          loading="lazy" />
      </div>
    </div>
  </div>

  <div class="container px-2 mx-auto p-4">
    <p class="text-white text-xl gifont">Stats</p>
    <div
      class="bg-[#1E1E1E] transition duration-150 container ease-in-out hover:scale-105 p-2 rounded-lg max-w-full text-gray-400">
      <div>
        <!-- table to store stats -->
        <div class="overflow-x-auto relative">
          <table class="w-full text-sm text-left text-white gifont">
            <tbody>
              <tr class="border-b border-opacity-5">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium whitespace-nowrap text-white">
                  Ascension Substat
                </th>
                <td class="py-4 px-6 text-right"> {data.jsonFile.substat} </td>
              </tr>
              <tr class="border-b border-opacity-5">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium whitespace-nowrap text-white">
                  Element
                </th>
                <td class="py-4 px-6 text-right"> {data.jsonFile.element} </td>
              </tr>
              <tr class="border-b border-opacity-5">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium whitespace-nowrap text-white">
                  Weapon Type
                </th>
                <td class="py-4 px-6 text-right">
                  {data.jsonFile.weapontype}
                </td>
              </tr>
              <tr class="border-b border-opacity-5">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium whitespace-nowrap text-white">
                  Region
                </th>
                <td class="py-4 px-6 text-right"> {data.jsonFile.region} </td>
              </tr>
              <tr class="border-opacity-5">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium whitespace-nowrap text-white">
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
    <div class="container px-2 mx-auto p-4">
      <p class="text-white text-xl gifont">Reccomended Artifact</p>
      <div
        class="bg-[#1E1E1E] transition duration-150 ease-in-out hover:scale-105 rounded-lg text-white p-5">
        <div class="flex gap-10 justify-center items-center">
          <img
            class="object-left h-16 w-16"
            src="/images/artifacts/{data.jsonFile.artifactSet
              .replace(/\s+/g, '-')
              .replace("'", '')
              .toLowerCase()}/flower.png"
            alt="{data.jsonFile.artifactSet}"
            loading="lazy" />
          <a
            href="/artifacts/{data.jsonFile.artifactSet
              .replace(/\s+/g, '-')
              .replace("'", '')
              .toLowerCase()}"
            ><p class="hover:text-indigo-500 text-white text-2xl gifont">
              {data.jsonFile.artifactSet}
            </p></a>
        </div>
      </div>
    </div>
  {/if}
</div>
