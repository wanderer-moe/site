<style lang="postcss">
#assetimg {
  object-fit: fit;
  height: 256px;
  width: 256px;
}
</style>

<script>
import axios from "axios";
import { onMount } from "svelte";
import Lazy from "svelte-lazy";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { t } from "svelte-i18n";
import {
  bytesToFileSize,
  fixCasing,
  formatDateReadable,
  iso8601ToUnix,
} from "../../../lib/utils/helpers";
import Faq from "../../../components/Faq.svelte";
import LoadPlaceHolder from "../../../components/LoadPlaceHolder.svelte";
import ViewImage from "../../../components/ViewImage.svelte";
let isFaqOpen = false;
let sortOptionMenu;
let sortMenuOpen = false;
import { browser } from "$app/environment";

function toggleFaq() {
  isFaqOpen = !isFaqOpen;
}

export let data;
const { game, asset, images } = data;
console.log(game, asset);

let selectedItems = [];
let isMobile = false;

const gameSplit = fixCasing(game);
let assetSplit = fixCasing(asset);

let filteredImages = images;
let query = "";
let imageUrl = "";
let statusText = "";
let imageDoubleClicked = false;
let totalImagesSizeHumanReadable = "?";
let selectedFilesSize = 0;

const sortingOptions = [
  { name: "dateNewest", text: $t("details.sortByUploaded") },
  { name: "dateOldest", text: $t("details.sortByUploadedReverse") },
  { name: "fileSizeStoL", text: $t("details.sortBySize") },
  { name: "fileSizeLtoS", text: $t("details.sortBySizeReverse") },
  { name: "nameAtoZ", text: $t("details.sortByAlphabetical") },
  { name: "nameZtoA", text: $t("details.sortByAlphabeticalReverse") },
];

let selectedSortingOption = sortingOptions[0];

// check if selectedSortedOption exists in localstorage
if (browser) {
  if (localStorage.getItem("selectedSortingOption")) {
    selectedSortingOption = JSON.parse(
      localStorage.getItem("selectedSortingOption")
    );
    updateFilter();
  } else {
    localStorage.setItem(
      "selectedSortingOption",
      JSON.stringify(selectedSortingOption)
    );
    selectedSortingOption = sortingOptions[0];
  }
}

function toggleSortDropdown() {
  sortOptionMenu.classList.toggle("hidden");
  sortMenuOpen = !sortMenuOpen;
}

function changeSort(option) {
  selectedSortingOption = option;
  if (browser) {
    localStorage.setItem(
      "selectedSortingOption",
      JSON.stringify(selectedSortingOption)
    );
  }
  updateFilter();
}

function updateFilter() {
  filteredImages = images.filter((image) => {
    return image.name.toLowerCase().includes(query.toLowerCase());
  });

  switch (selectedSortingOption.name) {
    case "fileSizeStoL":
      filteredImages.sort((a, b) => a.size - b.size);
      break;
    case "fileSizeLtoS":
      filteredImages.sort((a, b) => b.size - a.size);
      break;
    case "nameAtoZ":
      filteredImages.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case "nameZtoA":
      filteredImages.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case "dateNewest":
      filteredImages.sort((a, b) => {
        const dateA = iso8601ToUnix(a.uploaded);
        const dateB = iso8601ToUnix(b.uploaded);
        return dateB - dateA;
      });
      break;
    case "dateOldest":
      filteredImages.sort((a, b) => {
        const dateA = iso8601ToUnix(a.uploaded);
        const dateB = iso8601ToUnix(b.uploaded);
        return dateA - dateB;
      });
      break;
    default:
      break;
  }
}

function handleInput(event) {
  query = event.target.value;
  updateFilter();
}

if (assetSplit === "Character Sheets") {
  assetSplit = "Character Sheets (Parts)";
} else if (assetSplit === "Tcg") {
  assetSplit = "Genius Invokation TCG";
}

async function downloadSelected() {
  let zip = new JSZip();
  let folder = zip.folder(`${game}-${asset}-selected`);
  let selectedProgress = 0;
  for (const item of selectedItems) {
    try {
      const response = await fetch(
        `https://cdn.wanderer.moe/${game}/${asset}/${item.name}.png`
      );
      const blob = await response.blob();
      folder.file(`${item.name}.png`, blob);
      selectedProgress += 1;
      statusText = `Downloading selected files... ${selectedProgress}/${selectedItems.length}`;
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, `${game}-${asset}-selected.zip`);
    statusText = "Downloaded selected files as a zip file.";
  } catch (error) {
    console.log(error);
    statusText = "Error downloading selected files as a zip file.";
  }
}

async function downloadAll() {
  let zip = new JSZip();
  let folder = zip.folder(`${game}-${asset}-all`);
  let allProgress = 0;
  for (const item of images) {
    try {
      const response = await fetch(
        `https://cdn.wanderer.moe/${game}/${asset}/${item.name}.png`
      );
      const blob = await response.blob();
      folder.file(`${item.name}.png`, blob);
      allProgress += 1;
      statusText = `Downloading all files... ${allProgress}/${images.length}`;
    } catch (error) {
      console.log(error);
    }
  }

  try {
    const content = await zip.generateAsync({ type: "blob" });
    saveAs(content, `${game}-${asset}-all.zip`);
    statusText = "Downloaded all files as a zip file.";
  } catch (error) {
    console.log(error);
    statusText = "Error downloading all files as a zip file.";
  }
}

onMount(() => {
  if (window.innerWidth < 500) {
    isMobile = true;
  }
  // get the bytes value of each image and add set it to 'totalImagesSize'
  const totalImagesSize = images.reduce((acc, image) => {
    return acc + image.size;
  }, 0);
  // convert the bytes value to a human readable format
  totalImagesSizeHumanReadable = bytesToFileSize(totalImagesSize);
  console.log(totalImagesSizeHumanReadable);

  updateFilter();
});

//
</script>

<svelte:head>
  {#if images.length > 0}
    <title>{assetSplit} ({gameSplit}) | wanderer.moe</title>
  {:else}
    <title>wanderer.moe</title>
  {/if}
</svelte:head>

{#if imageDoubleClicked}
  <ViewImage
    imageUrl="{imageUrl}"
    closeImageView="{() => (imageDoubleClicked = false)}" />
{/if}

<div class="min-h-screen">
  <div class="mb-8">
    <div class="relative">
      <img
        src="https://cdn.wanderer.moe/{game}/cover.png"
        class="absolute inset-0 h-64 w-full object-cover object-center transition ease-in-out"
        alt="cover" />
      <div
        class="relative h-64 bg-gradient-to-t from-[#17171A] to-[#17171A]/50">
        <div
          class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="">
              <h2
                class="flex max-w-lg items-start text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                {gameSplit}
                <i
                  class="fa fa-info-circle cursor-pointer text-sm"
                  on:keypress="{toggleFaq}"
                  on:click="{toggleFaq}"></i>
              </h2>

              <p class="max-w-xl text-xl font-semibold text-white">
                {assetSplit}
              </p>
              <p class="max-w-xl text-sm font-semibold text-white">
                {$t("asset.info")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-2 md:px-12 lg:px-24">
      <div class="mb-2 rounded-lg bg-[#141414] p-2 text-white">
        <div>
          <div
            class="relative mb-2 flex w-full cursor-pointer items-center justify-center rounded-xl bg-black p-1"
            on:keypress="{toggleSortDropdown}"
            on:click="{toggleSortDropdown}">
            <span class="text-white"
              >{$t("details.sortBy")}: {selectedSortingOption.text}</span>
            <div
              class="absolute bottom-8 hidden w-full"
              bind:this="{sortOptionMenu}">
              <div class="mb-2 grid grid-cols-1 rounded-xl bg-black">
                {#each sortingOptions as sortingOption}
                  <div
                    class="flex items-center justify-center p-1"
                    on:keypress="{() => changeSort(sortingOption)}"
                    on:click="{() => changeSort(sortingOption)}">
                    <span
                      class="cursor-pointer hover:text-white {sortingOption ==
                      selectedSortingOption
                        ? 'text-white'
                        : 'text-gray-400'}">{sortingOption.text}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
          <p
            class="text-center text-sm font-semibold text-gray-400 {$t(
              'direction'
            )}">
            {$t("asset.main", {
              values: {
                filteredImagesCount: filteredImages.length,
                imagesCount: images.length,
                selectedItemsCount: selectedItems.length,
              },
            })}
          </p>
          {#if isMobile}
            <p class="mt-2 text-center text-sm text-red-100 {$t('direction')}">
              {$t("asset.onMobile")}
            </p>
          {/if}
          {#if statusText !== ""}
            <p class="mt-2 text-center text-sm text-gray-400 {$t('direction')}">
              {statusText}
            </p>
          {/if}
        </div>
      </div>

      <div class="mb-2 rounded-lg bg-[#141414] p-2 text-white">
        <input
          class="h-14 w-full rounded-lg bg-[#17171A] text-center text-indigo-400 focus:shadow focus:outline-none {$t(
            'direction'
          )}"
          placeholder="&#x1F50D; {$t('asset.searchBar')}"
          on:input="{handleInput}"
          bind:value="{query}" />
      </div>

      <div class="mb-6 rounded-lg bg-[#141414] p-2 text-white">
        <div class="flex flex-wrap gap-1 text-sm">
          <button
            on:click="{downloadSelected}"
            class="rounded-lg bg-indigo-400 px-2.5 py-2.5 font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none {$t(
              'direction'
            )}">
            <i class="fa-solid fa-download"></i>
            {#if selectedItems.length >= 1}
              {$t("asset.downloadSelectedSize", {
                values: {
                  size: bytesToFileSize(selectedFilesSize),
                },
              })}
            {:else}
              {$t("asset.downloadSelected")}
            {/if}
          </button>
          <button
            on:click="{downloadAll}"
            class="rounded-lg bg-indigo-400 px-2.5 py-2.5 font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none {$t(
              'direction'
            )}">
            <i class="fa-solid fa-download"></i>
            {$t("asset.downloadAllSize", {
              values: {
                size: totalImagesSizeHumanReadable,
              },
            })}
          </button>
        </div>
      </div>
      <!-- asset containers -->
      <div class="mt-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          {#each filteredImages as image}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div
              class="relative flex cursor-pointer items-center rounded-lg border-[3px] bg-[#141414] p-3 font-semibold text-gray-400 transition-colors duration-150 {selectedItems.includes(
                image
              )
                ? 'border-indigo-400'
                : 'border-[#141414]'}"
              on:click="{(event) => {
                if (!event.target.closest('button')) {
                  // check if the click was on the download button
                  if (selectedItems.includes(image)) {
                    selectedFilesSize -= image.size;
                    selectedItems = selectedItems.filter(
                      (item) => item !== image
                    );
                  } else {
                    selectedItems = [...selectedItems, image];
                    selectedFilesSize += image.size;
                  }
                  console.log(selectedItems);
                  console.log(selectedFilesSize);
                }
              }}">
              <Lazy
                height="{128}"
                placeholder="{LoadPlaceHolder}"
                fadeOption="{{ delay: 100, duration: 1000 }}">
                <img
                  id="assetimg"
                  class="previewImg object-contain object-left p-1"
                  src="{image.path}"
                  alt="{image.name}"
                  on:dblclick="{() => {
                    imageDoubleClicked = true;
                    imageUrl = `${image.path}`;
                  }}" />
              </Lazy>
              <div class="p-2">
                <div class="">
                  <div class="whitespace-normal break-all">
                    <div class="flex items-center">
                      <p class="mr-2 text-left text-sm lowercase text-white">
                        {image.name.replace(".png", "")}
                      </p>
                    </div>
                  </div>
                  <p class="text-xs font-bold uppercase {$t('direction')}">
                    {image.name.includes("fanmade")
                      ? `${$t("asset.fanmadeAsset")}`
                      : `${$t("asset.officialAsset")}`}
                  </p>
                  <p class="text-xs uppercase {$t('direction')}">
                    {$t("details.dateUploaded", {
                      values: { date: formatDateReadable(image.uploaded) },
                    })}
                  </p>
                  <a
                    href="https://cdn.wanderer.moe/{game}/{asset}/{image.name}.png"
                    rel="noreferrer"
                    target="_blank"
                    download>
                    <button
                      class="mt-2 rounded-lg bg-indigo-400 bg-opacity-70 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none {$t(
                        'direction'
                      )}"
                      onclick="{(event) => {
                        event.stopPropagation();
                      }}">
                      <i class="fa-solid fa-download {$t('direction')}"></i>
                      {$t("asset.downloadSize", {
                        values: { size: bytesToFileSize(image.size) },
                      })}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          {/each}
        </div>

        {#if filteredImages.length == 0}
          <div class="flex flex-col items-center justify-center">
            <p class="text-2xl text-white">
              {$t("asset.nothingFound", { values: { query } })}
            </p>
            <p class="text-sm text-gray-400">
              {$t("asset.nothingFoundSuggestions")}
            </p>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>

{#if isFaqOpen}
  <Faq closeFAQ="{() => (isFaqOpen = false)}" />
{/if}
