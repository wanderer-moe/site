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

const assetlinks = [
  {
    name: "Character Sheets / Parts",
    url: "/characterparts",
  },
  {
    name: "Splash Art",
    url: "/splashart",
  },
  {
    name: "Genius Invokation TCG",
    url: "/tcg",
  },
  {
    name: "Emotes / Stickers",
    url: "/emotes",
  },
];

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
  <section class="py-24">
    <div class="container mx-auto bg-[#121212] px-4">
      <div class="grid gap-8 md:grid-cols-1 lg:grid-cols-2 lg:px-0">
        <div class="flex flex-col gap-4">
          <div class="mb-6">
            <p class="gifont text-left text-4xl text-white">wanderer.moe</p>
            <p class="gifont text-left text-xl text-white">
              A (pretty) useful website/database for Genshin Impact assets.
            </p>
          </div>

          <div>
            <p class="text-xl font-semibold text-white">ASSET LINKS</p>
            <div class="mb-6 rounded-lg bg-[#1E1E1E] p-2 text-white">
              <div class="p-2">
                <div class="grid grid-cols-1 gap-3">
                  {#each assetlinks as assetlink}
                    <a href="{assetlink.url}">
                      <button
                        class="h-10 w-full rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                      >
                        {assetlink.name}
                      </button>
                    </a>
                  {/each}
                </div>
              </div>
            </div>
          </div>

          <div>
            <p class="text-xl font-semibold text-white">OC GENERATOR</p>
            <div class="mb-6 rounded-lg bg-[#1E1E1E] p-2 text-white">
              <div class="p-2">
                <p>
                  Create your own OC using the OC generator! Generates
                  Statistics and Characteristics for your character. You can
                  lock certain stats and keep generating until you get the
                  perfect character.
                </p>

                <a href="/oc-generator">
                  <button
                    class="mt-2 h-10 w-full rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                  >
                    Go to OC Generator
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p class="text-xl font-semibold text-white">CHARACTERS</p>
            <div class="mb-6 rounded-lg bg-[#1E1E1E] p-2 text-white">
              <div class="p-2">
                <p>
                  Fetch information, stats and level up materials about all the
                  current playable characters.
                </p>

                <a href="/characters">
                  <button
                    class="mt-2 h-10 w-full rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                  >
                    View Characters
                  </button>
                </a>
              </div>
            </div>
          </div>

          
        </div>
        <div class="flex flex-col gap-4">
          <div>
            <p class="text-xl font-semibold text-white">ARTIFACTS</p>
            <div class="mb-6 rounded-lg bg-[#1E1E1E] p-2 text-white">
              <div class="p-2">
                <p>
                  Fetch information about artifacts, descriptions and all
                  available artifact set bonuses.
                </p>

                <a href="/artifacts">
                  <button
                    class="mt-2 h-10 w-full rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                  >
                    View Characters
                  </button>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <p class="text-xl font-semibold text-white">DISCORD SERVER</p>
            <div class="mb-6 rounded-lg bg-[#1E1E1E] p-2 text-white">
              <div class="p-2">
                <p>
                  Join the discord server to hear about site updates, ask
                  questions & talk to others about anything. ({onlineUsers} online)
                </p>

                <a href="https://discord.wanderer.moe/">
                  <button
                    class="mt-2 h-10 w-full rounded-lg bg-indigo-400 bg-opacity-70 px-5 text-left font-semibold text-white hover:bg-indigo-500 focus:shadow focus:outline-none"
                  >
                    Join Discord
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div>
            <p class="text-xl font-semibold text-white">UPDATES</p>
            <div class="mb-6 rounded-lg bg-[#1E1E1E] p-2 text-white">
              <div class="p-2">
                {#each updatelist as update}
                  <p class="m-2">
                    <span class="font-semibold">{update.updateDate}</span> - {update.details}
                  </p>
                {/each}
              </div>
            </div>
          </div>

          <div>
            <p class="text-xl font-semibold text-white">
              SERVER RESET COUNTDOWN
            </p>
            <div class="mb-6 rounded-lg bg-[#1E1E1E] p-2 text-white">
              <div class="p-2">
                <p class="m-2">
                  <span class="font-semibold">NA</span> - {timeNA}
                </p>
                <p class="m-2">
                  <span class="font-semibold">EU</span> - {timeEU}
                </p>
                <p class="m-2">
                  <span class="font-semibold">ASIA</span> - {timeAsia}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
