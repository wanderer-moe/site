<script context = "module">
  import data from "../data/updateList.json";
  import Ads from "../components/Ads.svelte";
</script>

<script>
  import { onMount } from "svelte";
  import axios from "axios";
  // gets current amount of online users in the discord server..
  let onlineUsers = "?";

  let timeEU;
  let timeNA;
  let timeAsia;

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

<div class="flex flex-col min-h-screen">
  <section class="py-24 md:py-40">
    <div class="container px-2 mx-auto">
      <p class="text-white gifont text-4xl text-left">wanderer.moe</p>
      <p class="text-white gifont text-xl text-left">
        A (pretty) useful website/database for Genshin Impact assets. <img
          class="h-8 w-8 inline"
          src="images/emotes/UI_EmotionIcon70.png"
          alt="genshin emote"
        />
      </p>
      <p class="text-gray-400 text-sm text-left">
        This website contains assets & content from
        Genshin Impact. If you've been redirected from wtf.dromzeh.dev or need
        help, you can join the <a
          href="https://discord.com/invite/659KAFfNd6"
          class="font-semibold text-white hover:text-indigo-300"
          >discord server</a
        >
        ({onlineUsers} online)
      </p>
      <br />
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        <div
          class="bg-[#1F1A1A] transition duration-150 lg:col-span-2 ease-in-out hover:scale-105 p-4 rounded-lg flex flex-col gap-1 justify-center text-indigo-200 hover:text-indigo-300"
        >
          <p class="text-sm font-semibold uppercase text-center">
            Character Parts
          </p>
          <p class="text-sm text-left text-white">
            View and download character "files/parts/sheets" extracted from the
            official preview pages (1.4+), web events, etc.
          </p>
          <div class="text-right md:text-left">
            <a href="/characterparts">
              <button
                class="bg-indigo-400 font-semibold text-white p-0.5 text-sm bg-opacity-75 rounded-lg text-center px-2.5 py-2.5 hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><i class="fa-solid fa-download" /> Download
                <i class="fa-solid fa-chevron-right" /></button
              >
            </a>
          </div>
        </div>

        <div
          class="bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 p-4 rounded-lg flex flex-col gap-1 justify-center text-indigo-200 hover:text-indigo-300"
        >
          <p class="text-sm font-semibold uppercase text-center">Splash Art</p>
          <p class="text-sm text-left text-white">
            View and download splash art of all playable characters, with &
            without the background.
          </p>
          <div class="text-right md:text-left">
            <a href="/splashart">
              <button
                class="bg-indigo-400 font-semibold text-white p-0.5 text-sm bg-opacity-75 rounded-lg text-center px-2.5 py-2.5 hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><i class="fa-solid fa-download" /> Download
                <i class="fa-solid fa-chevron-right" /></button
              >
            </a>
          </div>
        </div>

        <div
          class="bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 p-4 rounded-lg flex flex-col gap-1 justify-center text-indigo-200 hover:text-indigo-300"
        >
          <p class="text-sm font-semibold uppercase text-center">
            In Game Emotes
          </p>
          <p class="text-sm text-left text-white">
            View & download images of Genshin's in-game emotes (stickers) with
            transparent backgrounds.
          </p>
          <div class="text-right md:text-left">
            <a href="/emotes">
              <button
                class="bg-indigo-400 font-semibold text-white p-0.5 text-sm bg-opacity-75 rounded-lg text-center px-2.5 py-2.5 hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><i class="fa-solid fa-download" /> Download
                <i class="fa-solid fa-chevron-right" /></button
              >
            </a>
          </div>
        </div>

        <div
          class="bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 p-4 rounded-lg flex flex-col gap-1 justify-center text-indigo-200 hover:text-indigo-300"
        >
          <p class="text-sm font-semibold uppercase text-center">Artifacts</p>
          <p class="text-sm text-left text-white">
            Fetch information about artifacts, descriptions and all available
            artifact set bonuses.
          </p>
          <div class="text-right md:text-left">
            <a href="/artifacts">
              <button
                class="bg-indigo-400 font-semibold text-white p-0.5 text-sm bg-opacity-75 rounded-lg text-center px-2.5 py-2.5 hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><img
                  class="h-5 w-5 inline"
                  src="images/icons/artifacticon.png"
                  alt="artifact icon"
                />
                Artifacts <i class="fa-solid fa-chevron-right" /></button
              >
            </a>
          </div>
        </div>

        <div
          class="bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 p-4 rounded-lg flex flex-col gap-1 justify-center text-indigo-200 hover:text-indigo-300"
        >
          <p class="text-sm font-semibold uppercase text-center">Characters</p>
          <p class="text-sm text-left text-white">
            Fetch information, stats and level up materials about all the
            playable characters.
          </p>
          <div class="text-right md:text-left">
            <a href="/characters">
              <button
                class="bg-indigo-400 font-semibold text-white p-0.5 text-sm bg-opacity-75 rounded-lg text-center px-2.5 py-2.5 hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><img
                  class="h-5 w-5 inline"
                  src="images/icons/charactericon.png"
                  alt="character icon"
                />
                Characters <i class="fa-solid fa-chevron-right" /></button
              >
            </a>
          </div>
        </div>

        <div
          class="bg-[#1F1A1A] lg:col-span-2 transition duration-150 ease-in-out hover:scale-105 p-4 rounded-lg flex flex-col gap-1 justify-center text-indigo-200 hover:text-indigo-300"
        >
          <p class="text-sm font-semibold uppercase text-center">
            Discord Server
          </p>
          <p class="text-sm text-left text-white">
            ({onlineUsers} users online) Join the discord server to hear about updates,
            get help with the website or to just speak to others.
          </p>
          <div class="text-right md:text-left">
            <a href="https://discord.com/invite/659KAFfNd6">
              <button
                class="bg-indigo-400 font-semibold text-white p-0.5 text-sm only:bg-opacity-75 rounded-lg text-center px-2.5 py-2.5 hover:bg-indigo-500 focus:shadow focus:outline-none"
                ><i class="fab fa-discord" /> Join
                <i class="fa-solid fa-chevron-right" /></button
              >
            </a>
          </div>
        </div>
      </div>

      <br />
      <br />
      <p class="text-white gifont text-2xl text-left">
        <i class="fas fa-circle-info" /> New Features
      </p>
      <p class="text-gray-400 text-sm text-left">
        View the full <a
          href="updates"
          class="font-semibold text-white hover:text-indigo-300">changelog</a
        > here.
      </p>

      <br />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        {#each updatelist as update}
          <div
            class="bg-[#1F1A1A] transition duration-150 ease-in-out p-4 rounded-lg justify-center text-indigo-200 hover:text-indigo-300"
          >
            <p class="text-sm font-semibold uppercase text-center">
              {update.updateDate}
            </p>
            <p class="text-sm text-left text-white">{update.details}</p>
            <div class="text-right md:text-left" />
          </div>
        {/each}
      </div>

      <br />
      <br />
      <p class="text-white gifont text-2xl text-left">
        <i class="fa fa-clock" /> Server Reset Countdown
      </p>
      <br />

      <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div
          class="bg-[#1F1A1A] transition duration-150 ease-in-out p-4 rounded-lg justify-center text-indigo-200 hover:text-indigo-300"
        >
          <p class="text-sm font-semibold uppercase text-center">
            North America
          </p>
          <p class="text-sm text-center text-white">{timeNA}</p>
        </div>

        <div
          class="bg-[#1F1A1A] transition duration-150 ease-in-out p-4 rounded-lg justify-center text-indigo-200 hover:text-indigo-300"
        >
          <p class="text-sm font-semibold uppercase text-center">Europe</p>
          <p class="text-sm text-center text-white">{timeEU}</p>
        </div>

        <div
          class="bg-[#1F1A1A] transition duration-150 ease-in-out p-4 rounded-lg justify-center text-indigo-200 hover:text-indigo-300"
        >
          <p class="text-sm font-semibold uppercase text-center">Asia</p>
          <p class="text-sm text-center text-white">{timeAsia}</p>
        </div>
      </div>
    </div>
  </section>
</div>
