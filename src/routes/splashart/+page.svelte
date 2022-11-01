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

<script>
import JSZip from "jszip";
import saveAs from "file-saver";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
export let data;

let selectedItems = [];

let splashArts = data.splashArt;
splashArts = splashArts.map((splash) => splash.name + ".png");

let searchTerm = "";
let filteredSplashArts = [];

const errorToast = Toastify({
  text: "Something went wrong while downloading the .zip, please send a screenshot of this message in the discord server.",
  duration: 5000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  backgroundColor: "#F56565",
  stopOnFocus: true, // Prevents dismissing of toast on hover
  onClick: function () {}, // Callback after click
});

const downloadToast = Toastify({
  text: "Downloading files into a .zip file, this can take a while - please be patient! ☺️",
  duration: 15000,
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "center", // `left`, `center` or `right`
  backgroundColor: "#6366F1",
  stopOnFocus: true, // Prevents dismissing of toast on hover
  onClick: function () {}, // Callback after click
});

$: {
  if (searchTerm) {
    filteredSplashArts = splashArts.filter((splashArt) => {
      return splashArt
        .toLowerCase()
        .includes(searchTerm.toLowerCase().replace(" ", "-"));
    });
  } else {
    filteredSplashArts = splashArts;
  }
}

// function to download all splashart
async function downloadAll() {
  console.log("downloading all splashart");
  downloadToast.showToast();

  const zip = new JSZip();
  const folder = zip.folder("splashart");
  for (let i = 0; i < splashArts.length; i++) {
    const response = await fetch(`/images/splashart/${splashArts[i]}`);
    const blob = await response.blob();
    folder.file(splashArts[i], blob);
  }
  try {
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // try to save the zip file, if it doesn't work, show an error message
      try {
        saveAs(content, "splashart.zip");
        setTimeout(() => {
          downloadToast.hideToast();
        }, 5000);
      } catch (error) {
        console.log(error);
        errorToast.showToast();
      }
    });
  } catch (error) {
    console.log(error);
    errorToast.showToast();
  }
}

// download selected splash art
async function downloadSelected() {
  console.log("downloading selected splashart");
  downloadToast.showToast();

  const zip = new JSZip();
  const folder = zip.folder("splashart-selected");
  for (let i = 0; i < selectedItems.length; i++) {
    const response = await fetch(`/images/splashart/${selectedItems[i]}`);
    const blob = await response.blob();
    folder.file(selectedItems[i], blob);
  }
  try {
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // try to save the zip file, if it doesn't work, show an error message
      try {
        saveAs(content, "splashart-selected.zip");
        setTimeout(() => {
          downloadToast.hideToast();
        }, 5000);
      } catch (error) {
        console.log(error);
        errorToast.showToast();
      }
    });
  } catch (error) {
    console.log(error);
    errorToast.showToast();
  }
}
</script>

<svelte:head>
  <title>splash art | wanderer.moe</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <section class="py-24 md:py-40">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap justify-between gap-4">
        <h1 class="text-white font-semibold">
          <span class="gifont">Splash Art</span><br /><span
            class="text-sm font-normal text-gray-400"
            >You can download <button
              on:click="{downloadAll}"
              class="font-semibold text-white hover:text-indigo-400"
              >all splash art (.zip) here</button
            >.</span>

          <!-- check if there are any entries inside the selectedItems array -->
          {#if selectedItems.length > 0}
            <span class="text-xs font-normal text-gray-400"
              >You can also download <button
                on:click="{downloadSelected}"
                class="font-semibold text-white hover:text-indigo-400"
                >selected splash art (.zip) here</button
              >.</span>

            <!-- if there are no entries inside the selectedItems array -->
          {:else}
            <span class="text-xs font-normal text-gray-400"
              >You can also select multiple splashart and download as .zip</span>
          {/if}
        </h1>

        <input
          class="bg-[#1E1E1E] text-indigo-400 h-14 w-96 rounded text-center focus:shadow focus:outline-none"
          bind:value="{searchTerm}"
          placeholder="🔎 Search for a File" />
      </div>
      <br />

      <!-- grid section that contains (filtered) splash art -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {#each filteredSplashArts as entry}
          <div
            class="p-3 bg-[#1E1E1E] transition duration-150 ease-in-out hover:scale-105 rounded-lg text-gray-400 font-semibold flex items-center">
            <img
              class="object-left object-contain previewImg p-1"
              src="./images/splashart/{entry}"
              alt="{entry}"
              loading="lazy" />
            <div>
              <p class="text-white text-m">
                {entry.replace(".png", "")}
                <!-- checkbox that will be checked if entry exists in selectedItems -->
              </p>
              <a
                href="/images/splashart/{entry}"
                target="_blank"
                rel="noreferrer"
                download>
                <button
                  class="bg-indigo-400 bg-opacity-70 justify-right font-semibold text-white rounded-lg px-5 py-2.5 hover:bg-indigo-500 focus:shadow focus:outline-none">
                  <i class="fa-solid fa-download"></i> Download
                </button>
              </a>
              <input
                type="checkbox"
                class="ml-2 accent-indigo-500  w-6 h-6 p-1 justify-left"
                checked="{selectedItems.includes(entry)}"
                on:click="{() => {
                  if (selectedItems.includes(entry)) {
                    selectedItems = selectedItems.filter(
                      (item) => item !== entry
                    );
                  } else {
                    selectedItems = [...selectedItems, entry];
                  }
                  console.log(selectedItems);
                }}" />
            </div>
          </div>
        {/each}
      </div>

      <!-- check if filteredSplashArts is empty -->
      {#if filteredSplashArts.length === 0}
        <div class="text-center">
          <img
            class="emote h-24 w-24 inline"
            src="./images/emotes/xingqiu-3.png"
            alt="genshin emote" />
          <p class="text-gray-400">
            No results were found for '{searchTerm}'. <br />Think something
            should be here? Feel free to join the
            <a
              href="https://discord.com/invite/659KAFfNd6"
              class="font-semibold text-white hover:text-indigo-400"
              >discord server</a> and ask!
          </p>
        </div>
      {/if}
    </div>
  </section>
</div>
