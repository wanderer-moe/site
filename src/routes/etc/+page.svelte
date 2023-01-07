<script>
import { writable } from "svelte/store";
import { browser } from "$app/environment";

let unreleasedContent;

const contributors = [
  {
    name: "dromzeh#1337",
    description: "Site creator and developer.",
  },
  {
    name: "gothiccbiscuit#0802",
    description: "Created fanmade Character Sheets.",
  },
  {
    name: "truck kun#3755",
    description: "Created fanmade Character Sheets.",
  },
  {
    name: "Ms. Universe#6684",
    description: "Created fanmade Character Sheets.",
  },
  {
    name: "asfoxyre#9021",
    description: "Contributed towards character parts / sheets.",
  },
];

/* check for unreleasedContent in localStorage */
if (browser) {
  if (localStorage.getItem("unreleasedContent") === null) {
    localStorage.setItem("unreleasedContent", "false");
    unreleasedContent = false;
  } else {
    unreleasedContent = localStorage.getItem("unreleasedContent") === "true";
  }
}

/* creating a writable store */
export const unreleasedContentStore = writable(unreleasedContent);

/* update localStorage when store changes */
unreleasedContentStore.subscribe((value) => {
  if (browser) {
    localStorage.setItem("unreleasedContent", value);
  }
});

/* check when unreleasedContent is toggled */
function toggleUnreleasedContent() {
  unreleasedContentStore.update((value) => !value);
}
</script>

<svelte:head>
  <title>etc | wanderer.moe</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <section class="py-24 md:py-40">
    <div class="container mx-auto px-4">
      <h1 class="gifont font-semibold text-white">Settings:</h1>

      <!-- checkbox -->
      <div class="flex flex-col">
        <label class="flex items-center">
          <input
            type="checkbox"
            class="form-checkbox ml-2 h-5 w-5 text-indigo-300 accent-indigo-500"
            bind:checked="{unreleasedContent}"
            on:click="{toggleUnreleasedContent}"
          />
          <span class="ml-2 text-white">View 'Unreleased Content'</span>
        </label>
      </div>
      <br />

      <h1 class="gifont font-semibold text-white">Contributors:</h1>

      <ul class="list-inside list-disc">
        {#each contributors as contributor}
          <li class="text-sm text-gray-400">
            <span class="indent-5 font-semibold text-white"
              >{contributor.name}</span
            >
            - {contributor.description}
          </li>
        {/each}
      </ul>

      <br />
      <p class="text-m text-gray-400">
        You can view the update changelog <a
          href="/updates"
          class="font-semibold text-white  hover:text-indigo-500">here</a
        >.
      </p>
    </div>
  </section>
</div>
