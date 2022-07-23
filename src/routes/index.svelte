<script>
import { onMount } from "svelte";
import axios from "axios";
// gets current amount of online users in the discord server..
  let onlineUsers = '?';

  let timeEU;
  let timeNA;
  let timeAsia;

  async function getDiscordData() {
	try {
		// make get request to json of widget then get the presence count ( how many members online )
    let response = await axios.get('https://discord.com/api/guilds/982385887000272956/widget.json')
	.then(function (response) {
		console.log("request successful");
		onlineUsers = response.data.presence_count;
		//console.log(onlineUsers);
	})
  } catch (e) {
    console.log('Error fetching data')
	onlineUsers = '?';
  }
  }

// the code following this is incredibly messy and I'm sorry, but it works. I'm sorry if you're seeing this.
async function getdateEU() {
  var start = new Date;
  start.setUTCHours(3, 0, 0); // 4am

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function tickEU() {
    var now = new Date;
    if (now > start) { // if it's after 4am
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);

    timeEU = hh + "h " + mm + "m " + ss + "s";

    setTimeout(tickEU, 1000);
  }

  tickEU();
}

async function getdateNA() {
  var start = new Date;
  start.setUTCHours(9, 0, 0); // 10am

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function tickNA() {
    var now = new Date;
    if (now > start) { // if it's after 10am
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
    var hh = pad((remain / 60 / 60) % 60);
    var mm = pad((remain / 60) % 60);
    var ss = pad(remain % 60);

    timeNA = hh + "h " + mm + "m " + ss + "s";

    setTimeout(tickNA, 1000);
  }

  tickNA();
}

async function getdateAsia() {
  var start = new Date;
  start.setUTCHours(20, 0, 0); // 9pm 

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function tickAsia() {
    var now = new Date;
    if (now > start) { // if it's after 9pm
      start.setDate(start.getDate() + 1);
    }
    var remain = ((start - now) / 1000);
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

</script>

<svelte:head>
	<title>wanderer.moe - a genshin database</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-2 mx-auto">
	  <p class = "text-blue-400 gifont text-4xl text-left">wanderer.moe</p>
	  <p class = "text-white gifont text-2xl text-left">A useful database for Genshin Impact</p>
	  <p class = "text-white text-left">Get data about Genshin Impact Characters, Artifacts and Character Image Files.</p>
	  <br>
	  <p class = "text-gray-400 text-sm text-left">Redirected from wtf.dromzeh.dev? This is the new site, join the <a href = "https://discord.com/invite/659KAFfNd6" class = "font-semibold text-white hover:text-blue-400">discord</a> ({onlineUsers} online) for more info.</p>
 
	  <br>


		<div class="grid grid-cols-1 md:grid-cols-6 gap-3">

			<div class = "bg-[#2a303c] transition duration-150 ease-in-out hover:scale-105 p-4 rounded-lg flex flex-col gap-1 justify-center text-blue-400 hover:text-blue-500">
				<p class = "text-sm font-semibold uppercase text-center">Character Parts</p>
				<br>
				<p class = "text-sm text-left text-white">View and download character files / parts extracted from the official preview pages.</p>
				<br>
				<div class = "flex justify-center mt-auto">
				<a href = "/characterparts">
				<button class="bg-gray-900 font-semibold text-white p-0.5 rounded-lg text-center px-5 py-2.5 hover:bg-gray-500 focus:shadow focus:outline-none">View <i class="fa-solid fa-angles-right"></i></button>
				</a>
				</div>
			</div>

			<div class = "bg-[#2a303c] transition duration-150 ease-in-out hover:scale-105 p-4 rounded-lg flex flex-col gap-1 justify-center text-blue-400 hover:text-blue-500">
				<p class = "text-sm font-semibold uppercase text-center">Splash Art</p>
				<br>
				<p class = "text-sm text-left text-white">View and download splash art of all playable characters, with & without the background.</p>
				<br>
				<div class = "flex justify-center mt-auto">
				<a href = "/splashart">
				<button class="bg-gray-900 font-semibold text-white p-0.5 rounded-lg text-center px-5 py-2.5 hover:bg-gray-500 focus:shadow focus:outline-none">View <i class="fa-solid fa-angles-right"></i></button>
				</a>
				</div>
			</div>


			<div class = "bg-[#2a303c] transition duration-150 ease-in-out hover:scale-105 p-4 rounded-lg flex flex-col gap-1 justify-center text-blue-400 hover:text-blue-500">
				<p class = "text-sm font-semibold uppercase text-center">Artifacts</p>
				<br>
				<p class = "text-sm text-left text-white">Fetch information about artifacts, descriptions and all available artifact set bonuses.</p>
				<br>
				<div class = "flex justify-center mt-auto">
				<a href = "/artifacts">
				<button class="bg-gray-900 font-semibold text-white p-0.5 rounded-lg text-center px-5 py-2.5 hover:bg-gray-500 focus:shadow focus:outline-none">View <i class="fa-solid fa-angles-right"></i></button>
				</a>
				</div>
			</div>

			<div class = "bg-[#2a303c] transition duration-150 ease-in-out hover:scale-105 p-4 rounded-lg flex flex-col gap-1 justify-center text-blue-400 hover:text-blue-500">
				<p class = "text-sm font-semibold uppercase text-center">Characters</p>
				<br>
				<p class = "text-sm text-left text-white">Fetch information, stats and level up materials about all the playable characters.</p>
				<br>
				<div class = "flex justify-center mt-auto">
				<a href = "/characters">
				<button class="bg-gray-900 font-semibold text-white p-0.5 rounded-lg text-center px-5 py-2.5 hover:bg-gray-500 focus:shadow focus:outline-none">View <i class="fa-solid fa-angles-right"></i></button>
				</a>
				</div>
			</div>

			<div class = "bg-[#2a303c] transition duration-150 ease-in-out hover:scale-105 p-4 rounded-lg flex flex-col gap-1 justify-center text-blue-400 hover:text-blue-500">
				<p class = "text-sm font-semibold uppercase text-center">Discord Server</p>
				<br>
				<p class = "text-sm text-left text-white">Join the discord server to ask any questions or to just talk with others. ({onlineUsers} users online)</p>
				<br>
				<div class = "flex justify-center mt-auto">
				<a href = "https://discord.com/invite/659KAFfNd6">
				<button class="bg-gray-900 font-semibold text-white p-0.5 rounded-lg text-center px-5 py-2.5 hover:bg-gray-500 focus:shadow focus:outline-none">Join <i class="fa-solid fa-angles-right"></i></button>
				</a>
				</div>
			</div>

		</div>

		<br>
		<br>
		<p class = "text-white gifont text-2xl text-left">Server Reset Countdown</p>
		<br>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-3">
			<div class = "bg-[#2a303c] transition duration-150 ease-in-out p-4 rounded-lg justify-center text-blue-400 hover:text-blue-500">
				<p class = "text-sm font-semibold uppercase text-center">North America</p>
				<p class = "text-sm text-center text-white">{timeNA}</p>
			</div>

			<div class = "bg-[#2a303c] transition duration-150 ease-in-out p-4 rounded-lg justify-center text-blue-400 hover:text-blue-500">
				<p class = "text-sm font-semibold uppercase text-center">Europe</p>
				<p class = "text-sm text-center text-white">{timeEU}</p>
			</div>

			<div class = "bg-[#2a303c] transition duration-150 ease-in-out p-4 rounded-lg justify-center text-blue-400 hover:text-blue-500">
				<p class = "text-sm font-semibold uppercase text-center">Asia</p>
				<p class = "text-sm text-center text-white">{timeAsia}</p>
			</div>



		</div>

	  </div>
  </section>
</div>