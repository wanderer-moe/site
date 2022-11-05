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

let characterParts = data.characterParts;
characterParts = characterParts.map((part) => part.name + ".png");

let searchTerm = "";
let filteredCharacterParts = [];

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
async function downloadAll() {
  console.log("downloading all character parts");
  downloadToast.showToast();

  const zip = new JSZip();
  const folder = zip.folder("characterparts");
  for (let i = 0; i < characterParts.length; i++) {
    const response = await fetch(`/images/characterparts/${characterParts[i]}`);
    const blob = await response.blob();
    folder.file(characterParts[i], blob);
  }
  try {
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // try to save the zip file, if it doesn't work, show an error message
      try {
        saveAs(content, "characterparts.zip");
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
  const folder = zip.folder("characterparts-selected");
  for (let i = 0; i < selectedItems.length; i++) {
    const response = await fetch(`/images/characterparts/${selectedItems[i]}`);
    const blob = await response.blob();
    folder.file(`${selectedItems[i]}`, blob);
  }
  try {
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // try to save the zip file, if it doesn't work, show an error message
      try {
        saveAs(content, "characterparts-selected.zip");
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
  <title>character parts | wanderer.moe</title>
</svelte:head>

<div class="flex flex-col min-h-screen">
  <section class="py-24 md:py-40">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap justify-between gap-4">
        <h1 class="text-white font-semibold">
          <!-- TODO: Fix the layout/CSS for the title & search section. -->
          <span class="gifont">Character Parts</span><br /><span
            class="text-sm font-normal text-gray-400"
            >You can download <button
              on:click="{downloadAll}"
              class="font-semibold text-white hover:text-indigo-400"
              >all character parts (.zip) here</button
            >.</span>

          <!-- check if there are any entries inside the selectedItems array -->
          {#if selectedItems.length > 0}
            <span class="text-xs font-normal text-gray-400"
              >You can also download <button
                on:click="{downloadSelected}"
                class="font-semibold text-white hover:text-indigo-400"
                >selected character parts (.zip)</button
              >.</span>

            <!-- if there are no entries inside the selectedItems array -->
          {:else}
            <span class="text-xs font-normal text-gray-400"
              >You can also select multiple characterparts and download as .zip</span>
          {/if}
        </h1>

        <input
          class="bg-[#1E1E1E] text-indigo-400 h-14 w-96 rounded text-center focus:shadow focus:outline-none"
          bind:value="{searchTerm}"
          placeholder="🔎 Search for a File" />
      </div>
      <br />

      <!-- grid section that contains (filtered) character parts -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {#each filteredCharacterParts as entry}
          <div
            class="p-3 bg-[#1E1E1E] transition duration-150 ease-in-out hover:scale-105 rounded-lg text-gray-400 font-semibold flex items-center">
            <img
              class="object-left object-contain previewImg p-1"
              src="/images/characterparts/{entry}"
              alt="{entry}"
              loading="lazy" />
            <div class="">
              <p class="text-white text-m text-left">
                {entry.replace(".png", "")}
              </p>
              <a
                href="/images/characterparts/{entry}"
                target="_blank"
                rel="noreferrer"
                download>
                <button
                  class="bg-indigo-400 bg-opacity-70 font-semibold text-white rounded-lg px-5 py-2.5 hover:bg-indigo-500 focus:shadow focus:outline-none">
                  <i class="fa-solid fa-download"></i> Download
                </button>
              </a>
              <!-- checkbox that will be checked if entry exists in selectedItems -->
              <input
                type="checkbox"
                class="ml-2 accent-indigo-500 w-6 h-6 p-1 justify-left"
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

      <!-- checks  if filteredCharacterParts is empty -->
      {#if filteredCharacterParts.length === 0}
        <div class="text-center">
          <img
            class="emote h-24 w-24 inline"
            src="./images/emotes/xingqiu-3.png"
            alt="genshin emote" />
          <p class="text-gray-400">
            No results were found for '{searchTerm}', you may be able to find
            the
            <span class="text-indigo-500"
              ><a
                href="/splashart"
                class="font-semibold text-white hover:text-indigo-400"
                >splash art version</a
              ></span>
            instead. <br />Think something should be here? Feel free to join the
            <a
              href="https://discord.com/invite/659KAFfNd6"
              class="font-semibold text-white hover:text-indigo-400"
              >discord server</a> and ask!
          </p>
        </div>
      {/if}
      <div class="faq">
        <!-- faq box -->
        <div class="bg-[#1E1E1E] rounded-lg p-4 mt-4">
          <h2 class="text-white font-semibold">FAQ</h2>
          <p class="text-white">
            <span class="font-semibold">Q: </span>How do I download these?<br />
            <span class="font-semibold">A: </span><span class="text-gray-400"
              >You can download each file by clicking on the download button of
              the specific file, it should automatically request to download. If
              it doesn't and just opens the image in a new tab, right click /
              hold down on the image and choose "Save image (as)"
            </span><br />
            <span class="font-semibold">Q: </span> How do I download all of the
            files?<br />
            <span class="font-semibold">A: </span><span class="text-gray-400"
              >You can download all of the files by clicking on the 'download
              all' text at the top of the page.</span
            ><br />
            <span class="font-semibold">Q: </span> How do I download selected
            files?<br />
            <span class="font-semibold">A: </span><span class="text-gray-400"
              >Click on the 'download selected files' text at the top of the
              page, after you have selected the files you want to download by
              clicking on the checkbox on each file.</span
            ><br />
            <span class="font-semibold">Q: </span> When searching for a file,
            the incorrect image shows?<br />
            <span class="font-semibold">A: </span><span class="text-gray-400"
              >This occurs when the image you search for hasn't finished
              downloading so it shows a placeholder. Wait around 30-60 seconds,
              refresh the page and search again.</span
            ><br />
            <span class="font-semibold">Q: </span> When downloading all /
            selected files, it says it may take a while, I've waited for a
            couple minutes and it hasn't done anything.<br />
            <span class="font-semibold">A: </span><span class="text-gray-400"
              >This can happen sometimes, allow time for every single image to
              appear and then try downloading again, it then should be instant
              as the image files are stored in your browser.</span
            ><br />
            <span class="text-gray-400 italic text-sm"
              >For help with anything else, join the discord server and check
              #info-faq or ask in #general-en or dm me: dromzeh#1337.</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
