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

// runs when the page loads.
onMount(() => {
    getDiscordData();
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
	  <p class = "text-white text-left">Get data about Characters, Artifacts, Character Image Files and view others Genshin Profiles</p>
	  <br>
	  <p class = "text-gray-400 text-sm text-left">Redirected from wtf.dromzeh.dev? This is the new site, join the <a href = "https://discord.com/invite/659KAFfNd6" class = "font-semibold text-white hover:text-blue-400">discord</a> ({onlineUsers} online) for more info.</p>
 
	  <br>


		<div class="grid grid-cols-2 md:grid-cols-6 gap-3">

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
				<p class = "text-sm font-semibold uppercase text-center">User Profiles</p>
				<br>
				<p class = "text-sm text-left text-white">Find out & share information about yours and other's genshin profiles.</p>
				<br>
				<div class = "flex justify-center mt-auto">
				<a href = "/users">
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

	  </div>
  </section>
</div>