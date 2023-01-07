<script>
import { onMount } from "svelte";
import axios from "axios";
// gets current amount of online users in the discord server..
let onlineUsers = "?";

let timeEU;
let timeNA;
let timeAsia;

export let data;

async function getDiscordData() {
  try {
    // make get request to json of widget then get the presence count ( how many members online )
    let response = await axios
      .get("https://discord.com/api/guilds/982385887000272956/widget.json")
      .then(function (response) {
        console.log("request successful");
        onlineUsers = response.data.presence_count;
        //console.log(onlineUsers);
      });
  } catch (e) {
    console.log("Error fetching data");
    onlineUsers = "?";
  }
}

// the code following this is incredibly messy and I'm sorry, but it works. I'm sorry if you're seeing this.
async function getdateEU() {
  var start = new Date();
  start.setUTCHours(3, 0, 0); // 4am

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function tickEU() {
    var now = new Date();
    if (now > start) {
      // if it's after 4am
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);

    timeEU = hh + "h " + mm + "m " + ss + "s";

    setTimeout(tickEU, 1000);
  }

  tickEU();
}

async function getdateNA() {
  var start = new Date();
  start.setUTCHours(9, 0, 0); // 10am

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function tickNA() {
    var now = new Date();
    if (now > start) {
      // if it's after 10am
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);

    timeNA = hh + "h " + mm + "m " + ss + "s";

    setTimeout(tickNA, 1000);
  }

  tickNA();
}

async function getdateAsia() {
  var start = new Date();
  start.setUTCHours(20, 0, 0); // 9pm

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function tickAsia() {
    var now = new Date();
    if (now > start) {
      // if it's after 9pm
      start.setDate(start.getDate() + 1);
    }
    var remain = (start - now) / 1000;
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);

    timeAsia = hh + "h " + mm + "m " + ss + "s";

    setTimeout(tickAsia, 1000);
  }

  tickAsia();
}

// runs when the page loads.
onMount(() => {
  getDiscordData();
  getdateEU();
  getdateNA();
  getdateAsia();
});

let updatelist = data.updates.slice(0, 3);
</script>

<svelte:head>
  <title>wanderer.moe</title>
</svelte:head>

<div class="flex min-h-screen flex-col">
  <section class="py-24 md:py-40">
    <div class="container mx-auto px-2">
      <p class="gifont text-left text-4xl text-white">wanderer.moe</p>
      <p class="gifont text-left text-xl text-white">
        A (pretty) useful website/database for Genshin Impact assets. <img
          class="inline h-8 w-8"
          src="/images/emotes/kazuha-collab7.png"
          alt="genshin emote"
        />
      </p>
      <p class="text-left text-sm text-gray-400">
        This website contains assets & content from Genshin Impact. If you've
        been redirected from wtf.dromzeh.dev or need help, you can join the <a
          href="https://discord.com/invite/659KAFfNd6"
          class="font-semibold text-white hover:text-indigo-300"
          >discord server</a
        >
        ({onlineUsers} online)
      </p>
      <br />
      <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        <div
          class="flex flex-col justify-center gap-1 rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-300 lg:col-span-2"
        >
          <p class="text-center text-sm font-semibold uppercase">
            Character Parts
          </p>
          <p class="text-left text-sm text-white">
            Assets in a files/parts/sheets format extracted from all of the
            official web events/preview pages including fanmade assets.
          </p>
          <div class="text-right md:text-left">
            <a href="/characterparts">
              <button
                class="rounded-lg bg-indigo-400 bg-opacity-75 p-0.5 px-2.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><i class="fa-solid fa-download"></i> Download
                <i class="fa-solid fa-chevron-right"></i></button
              >
            </a>
          </div>
        </div>

        <div
          class="flex flex-col justify-center gap-1 rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-300"
        >
          <p class="text-center text-sm font-semibold uppercase">
            Genius Invokation TCG
          </p>
          <p class="text-left text-sm text-white">
            Genius Invokation TCG assets that've been extracted from the game
            files.
          </p>
          <div class="text-right md:text-left">
            <a href="/tcg">
              <button
                class="rounded-lg bg-indigo-400 bg-opacity-75 p-0.5 px-2.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><i class="fa-solid fa-download"></i> Download
                <i class="fa-solid fa-chevron-right"></i></button
              >
            </a>
          </div>
        </div>

        <div
          class="flex flex-col justify-center gap-1 rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-300"
        >
          <p class="text-center text-sm font-semibold uppercase">Splash Art</p>
          <p class="text-left text-sm text-white">
            Splash art of all 'playable' characters, with and without their
            backgrounds.
          </p>
          <div class="text-right md:text-left">
            <a href="/splashart">
              <button
                class="rounded-lg bg-indigo-400 bg-opacity-75 p-0.5 px-2.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><i class="fa-solid fa-download"></i> Download
                <i class="fa-solid fa-chevron-right"></i></button
              >
            </a>
          </div>
        </div>

        <div
          class="flex flex-col justify-center gap-1 rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-300"
        >
          <p class="text-center text-sm font-semibold uppercase">
            In Game Emotes
          </p>
          <p class="text-left text-sm text-white">
            View and download images of Genshin's in-game emotes (stickers) with
            transparent backgrounds.
          </p>
          <div class="text-right md:text-left">
            <a href="/emotes">
              <button
                class="rounded-lg bg-indigo-400 bg-opacity-75 p-0.5 px-2.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><i class="fa-solid fa-download"></i> Download
                <i class="fa-solid fa-chevron-right"></i></button
              >
            </a>
          </div>
        </div>

        <div
          class="flex flex-col justify-center gap-1 rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-300"
        >
          <p class="text-center text-sm font-semibold uppercase">Artifacts</p>
          <p class="text-left text-sm text-white">
            Fetch information about artifacts, descriptions and all available
            artifact set bonuses.
          </p>
          <div class="text-right md:text-left">
            <a href="/artifacts">
              <button
                class="rounded-lg bg-indigo-400 bg-opacity-75 p-0.5 px-2.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><img
                  class="inline h-5 w-5"
                  src="images/icons/artifacticon.png"
                  alt="artifact icon"
                />
                Artifacts <i class="fa-solid fa-chevron-right"></i></button
              >
            </a>
          </div>
        </div>

        <div
          class="flex flex-col justify-center gap-1 rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-300"
        >
          <p class="text-center text-sm font-semibold uppercase">Characters</p>
          <p class="text-left text-sm text-white">
            Fetch information, stats and level up materials about all the
            playable characters.
          </p>
          <div class="text-right md:text-left">
            <a href="/characters">
              <button
                class="rounded-lg bg-indigo-400 bg-opacity-75 p-0.5 px-2.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><img
                  class="inline h-5 w-5"
                  src="images/icons/charactericon.png"
                  alt="character icon"
                />
                Characters <i class="fa-solid fa-chevron-right"></i></button
              >
            </a>
          </div>
        </div>

        <div
          class="flex flex-col justify-center gap-1 rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:scale-105 hover:text-indigo-300"
        >
          <p class="text-center text-sm font-semibold uppercase">
            Discord Server
          </p>
          <p class="text-left text-sm text-white">
            ({onlineUsers} users online) Join the discord server to hear about updates,
            ask questions & talk to others.
          </p>
          <div class="text-right md:text-left">
            <a href="https://discord.com/invite/659KAFfNd6">
              <button
                class="rounded-lg bg-indigo-400 p-0.5 px-2.5 py-2.5 text-center text-sm font-semibold text-white only:bg-opacity-75 hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><i class="fab fa-discord"></i> Join
                <i class="fa-solid fa-chevron-right"></i></button
              >
            </a>
          </div>
        </div>
      </div>

      <br />
      <br />
      <p class="gifont text-left text-2xl text-white">
        <i class="fas fa-circle-info"></i> New Features
      </p>
      <p class="text-left text-sm text-gray-400">
        View the full <a
          href="updates"
          class="font-semibold text-white hover:text-indigo-300">changelog</a
        > here.
      </p>

      <br />

      <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
        {#each updatelist as update}
          <div
            class="justify-center rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:text-indigo-300"
          >
            <p class="text-center text-sm font-semibold uppercase">
              {update.updateDate}
            </p>
            <p class="text-left text-sm text-white">{update.details}</p>
            <div class="text-right md:text-left"></div>
          </div>
        {/each}
      </div>

      <br />
      <br />
      <p class="gifont text-left text-2xl text-white">
        <i class="fa fa-clock"></i> Server Reset Countdown
      </p>
      <br />

      <div class="grid grid-cols-1 gap-3 md:grid-cols-3">
        <div
          class="justify-center rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:text-indigo-300"
        >
          <p class="text-center text-sm font-semibold uppercase">
            North America
          </p>
          <p class="text-center text-sm text-white">{timeNA}</p>
        </div>

        <div
          class="justify-center rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:text-indigo-300"
        >
          <p class="text-center text-sm font-semibold uppercase">Europe</p>
          <p class="text-center text-sm text-white">{timeEU}</p>
        </div>

        <div
          class="justify-center rounded-lg bg-[#1E1E1E] p-4 text-indigo-200 transition duration-150 ease-in-out hover:text-indigo-300"
        >
          <p class="text-center text-sm font-semibold uppercase">Asia</p>
          <p class="text-center text-sm text-white">{timeAsia}</p>
        </div>
      </div>
    </div>
  </section>
</div>
