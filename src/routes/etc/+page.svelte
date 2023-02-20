<script>
import { writable } from "svelte/store";
import { browser } from "$app/environment";

let unreleasedContent;

const developers = [
  {
    name: "dromzeh#1337",
    description: "Site Developer, Creator & Maintainer",
  },
];

const contributors = [
  {
    name: "ambre ⦻#4959",
    description: "Contributor",
  },
  {
    name: "asfoxrye#9021",
    description: "Contributor",
  },
  {
    name: "ben dover#3641",
    description: "Contributor",
  },
  {
    name: "char#5541",
    description: "Contributor",
  },
  {
    name: "𝘊𝘰𝘪𝘯 𝘖𝘱𝘦𝘳𝘢𝘵𝘦𝘥 𝘎𝘪𝘳𝘭 📎#3755",
    description: "Contributor",
  },
  {
    name: "genpro#0802",
    description: "Contributor",
  },
  {
    name: "genna#2005",
    description: "Contributor",
  },
  {
    name: "lieke#0005",
    description: "Contributor",
  },
  {
    name: "Shirayuki#4472",
    description: "Contributor",
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
  <section class="py-24">
    <div class="container mx-auto bg-[#121212] px-4">
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

      <h1 class="gifont font-semibold text-white">Credits:</h1>
      <h1 class="gifont text-xl font-semibold text-white">Developers</h1>

      <ul class="list-inside list-disc">
        {#each developers as developer}
          <p class="text-gray-400">
            <span class="indent-5 font-semibold text-white"
              >{developer.name}</span
            >
            {developer.description}
          </p>
        {/each}
        <br />

        <h1 class="gifont text-xl font-semibold text-white">Contributors</h1>
        <ul class="list-inside list-disc">
          {#each contributors as contributor}
            <p class="text-gray-400">
              <span class="indent-5 font-semibold text-white"
                >{contributor.name}</span
              >
              {contributor.description}
            </p>
          {/each}
        </ul>
        <p class="text-sm italic text-gray-400">
          A big thank you to all of the amazing people who have helped
          contribute to the site <i class="fa fa-heart text-red-300"></i>
        </p>

        <br />
        <p class="text-m text-gray-400">
          You can view the update changelog <a
            href="/updates"
            class="font-semibold text-white  hover:text-indigo-500">here</a
          >.
        </p>
      </ul>
    </div>
  </section>
</div>
