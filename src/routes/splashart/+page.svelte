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

let searchTerm = "";
let filteredassets = [];
let selectedItems = [];

let assets = data.splashart;
assets = assets.map((part) => part.name + ".png");

const errorToast = Toastify({
  text: "Something went wrong while downloading the .zip.",
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
  text: "Downloading files into a .zip file, this can take a while - please be patient!",
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
  filteredassets = assets;
  if (searchTerm) {
    searchTerm = searchTerm.toLowerCase().replace(" ", "-");
    filteredassets = assets.filter((asset) => {
      return asset.toLowerCase().includes(searchTerm);
    });
  }
}

async function downloadAll() {
  downloadToast.showToast();

  const zip = new JSZip();
  const folder = zip.folder("splashart");
  for (let i = 0; i < assets.length; i++) {
    try {
      const response = await fetch(`/images/splashart/${assets[i]}`);
      const blob = await response.blob();
      folder.file(assets[i], blob);
    } catch (error) {
      console.log(error);
      errorToast.showToast();
    }
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

// download selected character parts
async function downloadSelected() {
  console.log("downloading selected character parts");
  downloadToast.showToast();

  const zip = new JSZip();
  const folder = zip.folder("splashart-selected");

  // Loop through all the selected items and download them
  for (let i = 0; i < selectedItems.length; i++) {
    const response = await fetch(`/images/splashart/${selectedItems[i]}`);
    const blob = await response.blob();
    folder.file(`${selectedItems[i]}`, blob);
  }

  // Try to save the zip file
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
  <title>splashart | wanderer.moe</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <section class="py-24">
    <div class="container mx-auto bg-[#121212] px-4">
      <div class="mb-6">
        <h1 class="gifont font-semibold text-white">Splash Art</h1>
        <p class="text-sm text-gray-400">
          Splash art for characters including with and without the background.
        </p>
        <p class="text-sm text-gray-400">
          To download several assets at once, checkmark them and click the
          'Download Selected' Files button.
        </p>
      </div>

      <!-- filters box, box that spans across the whole section -->
      <p class="text-xl font-semibold text-white">FILTERS</p>
      <div class="mb-6 rounded-lg bg-[#1E1E1E] p-2 text-white">
        <input
          class="h-14 w-full rounded-lg bg-[#121212] text-center text-indigo-400 focus:shadow focus:outline-none"
          bind:value="{searchTerm}"
          placeholder="🔎 Search for a File"
        />
        <div class="mt-2">
          <!-- download all and download selected buttons -->
          <div class="flex justify-start gap-3">
            <button
              class="h-10 w-1/2 rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
              on:click="{downloadAll}"
            >
              <i class="fas fa-download"></i>
              All Files
            </button>
            {#if selectedItems.length > 0}
              <button
                class="h-10 w-1/2 rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none md:w-auto"
                on:click="{downloadSelected}"
              >
                <i class="fas fa-download"></i>
                Selected Files
              </button>
            {/if}
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
        {#each filteredassets as asset}
          <div
            class="relative flex items-center rounded-lg bg-[#1E1E1E] p-3 font-semibold text-gray-400"
          >
            <img
              class="previewImg object-contain object-left p-1"
              src="/images/splashart/{asset}"
              alt="{asset}"
              loading="lazy"
            />
            <div class="">
              <div class="">
                <div class="whitespace-normal break-all">
                  <p class="text-m text-left lowercase text-white">
                    {asset.replace(".png", "")}
                  </p>
                </div>
                <a
                  href="/images/splashart/{asset}"
                  rel="noreferrer"
                  target="_blank"
                  download
                >
                  <button
                    class="rounded-lg bg-indigo-400 bg-opacity-70 px-5 py-2.5 font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                  >
                    <i class="fa-solid fa-download"></i> Download
                  </button>
                </a>
                <input
                  type="checkbox"
                  class="absolute top-2 right-2 h-6 w-6 accent-indigo-500"
                  checked="{selectedItems.includes(asset)}"
                  on:click="{() => {
                    if (selectedItems.includes(asset)) {
                      selectedItems = selectedItems.filter(
                        (item) => item !== asset
                      );
                    } else {
                      selectedItems = [...selectedItems, asset];
                    }
                    console.log(selectedItems);
                  }}"
                />
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
</div>
