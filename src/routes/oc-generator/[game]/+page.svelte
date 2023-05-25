<script>
import axios from "axios";
import { onMount } from "svelte";
// import { t } from "svelte-i18n"; todo: i18n support
import { writable } from "svelte/store";
import { fixCasing } from "../../../lib/utils/helpers.js";

export let data;
let response = "";
let options = writable([]);

const { game, jsonFile } = data;

const gameSplit = fixCasing(game);

function randomize() {
  console.log("randomize");
  options.update((opts) => {
    return opts.map((option) => {
      if (!option.locked) {
        const randomIndex = Math.floor(Math.random() * option.entries.length);
        return { ...option, value: option.entries[randomIndex] };
      }
      return option;
    });
  });
}

function copyToClipboard(options) {
  const text = options
    .filter((option) => option.value)
    .map((option) => `${option.name} - ${option.value}`)
    .join("\n");
  const textWithPath = `${text}\n\n${window.location.href}`;
  navigator.clipboard.writeText(textWithPath);
}

function toggleLock(option) {
  options.update((opts) => {
    return opts.map((opt) => {
      if (opt.name === option.name) {
        return { ...opt, locked: !opt.locked };
      }
      return opt;
    });
  });
}

onMount(async () => {
  response = await axios.get(jsonFile);
  console.log(response.data.options);
  options.set(response.data.options);
  // add 'None' to each option.value
  options.update((opts) => {
    return opts.map((opt) => {
      return { ...opt, value: "None" };
    });
  });
});
</script>

<svelte:head>
  {#if response.data}
    <title>OC Generator ({gameSplit}) | wanderer.moe</title>
  {:else}
    <title>wanderer.moe</title>
  {/if}
</svelte:head>

<div class="min-h-screen">
  <div class="mb-8">
    <div class="relative">
      <img
        src="https://cdn.wanderer.moe/{game}/cover.png"
        class="absolute inset-0 h-64 w-full object-cover object-center transition ease-in-out"
        alt="" />
      <!-- bg gradient opacity from 0 to 100-->
      <div
        class="relative h-64 bg-gradient-to-t from-[#17171A] to-[#17171A]/50">
        <div
          class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
          <div class="flex flex-col items-center justify-between xl:flex-row">
            <div class="">
              <h2
                class="flex max-w-lg items-start text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                <span class="mr-3">{gameSplit}</span>
              </h2>
              <p class="max-w-xl text-xl font-semibold text-white">
                OC Generator
              </p>
              <p class="max-w-xl text-sm font-semibold text-white">
                You can lock and unlock entries by pressing the <i
                  class="fas fa-lock"></i>
                and <i class="fas fa-unlock"></i> buttons.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-2 md:px-12 lg:px-24">
      <div class="mb-2 rounded-lg bg-[#141414] p-2 text-white">
        <div class="mb-3 flex flex-wrap gap-2 text-sm">
          <button
            class="mt-2 rounded-lg bg-indigo-400 bg-opacity-70 p-2.5 font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
            on:click="{() => randomize()}">
            <i class="fa fa-random"></i> Randomize
          </button>
          <button
            class="mt-2 rounded-lg bg-indigo-400 bg-opacity-70 p-2.5 font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
            on:click="{copyToClipboard($options)}">
            <i class="fa-regular fa-clipboard"></i> Copy
          </button>
          <button
            class="mt-2 rounded-lg bg-indigo-400 bg-opacity-70 p-2.5 font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
            on:click="{() =>
              options.update((opts) =>
                opts.map((opt) => ({ ...opt, locked: true }))
              )}">
            <i class="fa fa-unlock"></i> Lock All
          </button>
          <button
            class="mt-2 rounded-lg bg-indigo-400 bg-opacity-70 p-2.5 font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
            on:click="{() =>
              options.update((opts) =>
                opts.map((opt) => ({ ...opt, locked: false }))
              )}">
            <i class="fa fa-lock"></i> Unlock All
          </button>
        </div>
        <div>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
            {#if $options}
              {#each $options as option, i}
                <div class="">
                  <p class="font-semibold text-white">{option.name}</p>
                  <div class="flex items-center">
                    <button
                      class="mr-2 rounded-lg bg-indigo-400 bg-opacity-70 p-1 px-2 py-1 pl-2 pr-2 font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                      on:click="{() => toggleLock(option)}">
                      {#if option.locked}
                        <i class="fas fa-lock"></i>
                      {:else}
                        <i class="fas fa-unlock"></i>
                      {/if}
                    </button>
                    <input
                      type="text"
                      class="h-10 w-full rounded-lg bg-[#121212] text-center text-indigo-400 {option.value &&
                      option.locked
                        ? 'text-red-500'
                        : 'text-indigo-400'} focus:shadow focus:outline-none"
                      value="{option.value}"
                      readonly />
                  </div>
                </div>
              {/each}
            {:else}
              <p class="text-white">
                Loading options, try refreshing the page if it takes too long.
              </p>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
