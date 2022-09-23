<script>
  import JSZip from 'jszip';
  import saveAs from 'file-saver';
  import Toastify from 'toastify-js'
  import "toastify-js/src/toastify.css"
  export let data;
  
  let characterParts = data.characterParts;
  characterParts = characterParts.map((part) => part.name + ".png");

  let searchTerm = "";
  let filteredCharacterParts = [];

  $: {
    if (searchTerm) {
      filteredCharacterParts = characterParts.filter((characterPart) => {
        return characterPart
          .toLowerCase()
          .includes(searchTerm.toLowerCase().replace(" ", "-"));
      });
    } else {
      filteredCharacterParts = characterParts;
    }
  }

  // function to download all character parts
  async function downloadAll(){
    console.log('downloading all character parts')

    Toastify({
        text: "Downloading all character parts, this can take a while dependant on your internet connection, please be patient! ☺️",
        duration: 10000,
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        backgroundColor: "#6366F1",
        stopOnFocus: true, // Prevents dismissing of toast on hover
        onClick: function(){} // Callback after click
      }).showToast();

    const zip = new JSZip();
    const folder = zip.folder("characterparts");
    for (let i = 0; i < characterParts.length; i++) {
      const response = await fetch(`/images/characterparts/${characterParts[i]}`);
      const blob = await response.blob();
      folder.file(characterParts[i], blob);
    }
    zip.generateAsync({type:"blob"}).then(function(content) {
      saveAs(content, "characterparts.zip");
    });
  }
</script>

<svelte:head>
  <title>character parts | wanderer.moe</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <section class="py-24 md:py-40">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap justify-between gap-4">
        <h1 class="text-white font-semibold">
          <span class="gifont">Character Parts</span><br /><span
            class="text-sm font-normal text-gray-400"
            >You can download <button
              on:click = {downloadAll}
              class="font-semibold text-white hover:text-indigo-400"
              >all character parts (.zip) here</button
            >.</span
          >
        </h1>

        <input
          class="bg-[#1F1A1A] text-indigo-400 h-14 w-96 rounded text-center focus:shadow focus:outline-none"
          bind:value={searchTerm}
          placeholder="🔎 Search for a File"
        />
      </div>
      <br />

      <!-- grid section that contains (filtered) character parts -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {#each filteredCharacterParts as entry}
          <div
            class="p-3 bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg text-gray-400 font-semibold flex items-center"
          >
            <img
              class="object-left object-contain previewImg p-1"
              src="/images/characterparts/{entry}"
              alt={entry}
              loading="lazy"
            />
            <div class="">
              <p class="text-white text-m text-left">{entry}</p>
              <a href="/images/characterparts/{entry}" target="_blank" download>
                <button
                  class="bg-indigo-400 bg-opacity-70 justify-right font-semibold text-white rounded-lg px-5 py-2.5 hover:bg-indigo-500 focus:shadow focus:outline-none"
                >
                  <i class="fa-solid fa-download" /> Download
                </button>
              </a>
            </div>
          </div>
        {/each}
      </div>

      <!-- checks  if filteredCharacterParts is empty -->
      {#if filteredCharacterParts.length === 0}
        <div class="text-center">
          <img
            class="emote h-24 w-24 inline"
            src="images/emotes/UI_EmotionIcon223.png"
            alt="genshin emote"
          />
          <p class="text-gray-400">
            No results were found for '{searchTerm}', you may be able to find
            the
            <span class="text-indigo-500"
              ><a
                href="/splashart"
                class="font-semibold text-white hover:text-indigo-400"
                >splash art version</a
              ></span
            >
            instead. <br />Think something should be here? Feel free to join the
            <a
              href="https://discord.com/invite/659KAFfNd6"
              class="font-semibold text-white hover:text-indigo-400"
              >discord server</a
            > and ask!
          </p>
        </div>
      {/if}
    </div>
  </section>
</div>

<style lang="postcss">
  .emote {
    width: 64px !important;
    height: 64px !important;
  }
  img {
    object-fit: fit;
    height: 256px;
    width: 256px;
  }
</style>
