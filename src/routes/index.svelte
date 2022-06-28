<script>
import { onMount } from "svelte";
import axios from "axios";

// gets current amount of online users in the discord server..
  let onlineUsers = '.';

  async function getDiscordData() {
	try {
		// make get request to json of widget then get the presence count ( how many members online )
    let response = await axios.get('https://discord.com/api/guilds/982385887000272956/widget.json')
	.then(function (response) {
		onlineUsers = response.data.presence_count;
		//console.log(onlineUsers);
	})
  } catch (e) {
    console.log('Error fetching data')
	onlineUsers = '?';
  }

  }
  onMount(() => {
    getDiscordData();
  });

</script>

<style>
	img{
	width: 65px;
	height: 65px;
}
</style>

<svelte:head>
	<title>wanderer.moe - a genshin database</title>
</svelte:head>

<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">
	  <p class = "text-white text-4xl font-semibold gifont text-center">wanderer.moe - a genshin database</p>
	  <p class = "text-gray-400 text-xl text-center">A minimal & easy to use database for Genshin Impact</p>
	  <p class = "text-gray-400 text-sm text-center">Redirected from wtf.dromzeh.dev? This is the new site, join the <a href = "https://discord.com/invite/659KAFfNd6" class = "font-semibold text-white hover:text-blue-500">discord</a> ({onlineUsers} online) for more info.</p>
 
	  <br>

	  <div class="flex flex-wrap justify-center gap-3">

		<div class="w-full md:w-1/3 xl:w-auto px-4 mb-8 md:mb-0">
		  <div class="h-full max-w-xs mx-auto p-12 bg-gray-800 rounded-xl">
			<div class="mb-7">
				<img src = "./images/databasePreviewImages/characterparts.png" alt = "Character">
			  <h5 class="font-heading text-xl mt-7 mb-7 text-white font-semibold">Character Parts</h5>
			  <p class="font-light text-white">Download the character 'parts / sheets' from the preview pages.</p>
			</div>
			<div class="text-right">
				<a href = "/characterparts" target="_self">
				<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-blue-400 to-blue-500 group-hover:from-blue-400 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
					<span class="relative px-5 font-semibold py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
						Get Character Parts
					</span>
				</button>
				</a>
			</div>
		  </div>
		</div>

		<div class="w-full md:w-1/3 xl:w-auto px-4 mb-8 md:mb-0">
			<div class="h-full max-w-xs mx-auto p-12 bg-gray-800 rounded-xl">
			  <div class="mb-7">
				<img src = "./images/databasePreviewImages/splashart.png" alt = "Character">
				<h5 class="font-heading text-xl mt-7 mb-7 text-white font-semibold" >Splash Art</h5>
				<p class="font-light text-white">Download Splash Art for all playable characters, contains splash art from all versions.</p>
			  </div>
			  <div class="text-right">
				  <a href = "/splashart" target="_self">
				  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-blue-400 to-blue-500 group-hover:from-blue-400 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
					  <span class="relative px-5 font-semibold py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
						  Get Splash Art
					  </span>
				  </button>
				  </a>
			  </div>
			</div>
		  </div>

		<div class="w-full md:w-1/3 xl:w-auto px-4 mb-8 md:mb-0">
			<div class="h-full max-w-xs mx-auto p-12 bg-gray-800 rounded-xl">
			  <div class="mb-7">
				  <img src = "./images/databasePreviewImages/character.png" alt = "Character">
				<h5 class="font-heading text-xl mt-7 mb-7 text-white font-semibold">Characters</h5>
				<p class="font-light text-white">View information, level up materials & talents about all playable characters.</p>
			  </div>
			  <div class="text-right">
				  <a href = "/characters" target="_self">
				  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-blue-400 to-blue-500 group-hover:from-blue-400 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
					  <span class="relative px-5 font-semibold py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
						  View Characters
					  </span>
				  </button>
				  </a>
			  </div>
			</div>
		  </div>

		  <div class="w-full md:w-1/3 xl:w-auto px-4 mb-8 md:mb-0">
			<div class="h-full max-w-xs mx-auto p-12 bg-gray-800 rounded-xl">
			  <div class="mb-7">
				  <img src = "./images/artifacts/previewCirclet.png" alt = "Character">
				<h5 class="font-heading text-xl mt-7 mb-7 text-white font-semibold">Artifacts</h5>
				<p class="font-light text-white">View information, images & the set bonuses about artifact sets.</p>
			  </div>
			  <div class="text-right">
				  <a href = "/artifacts" target="_self">
				  <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-blue-400 to-blue-500 group-hover:from-blue-400 group-hover:to-blue-500 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
					  <span class="relative px-5 font-semibold py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
						  View Artifacts
					  </span>
				  </button>
				  </a>
			  </div>
			</div>
		  </div>
  

	  </div>
	</div>
  </section>