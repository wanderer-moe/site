<script context="module">
	export async function preload(page) {
		const data = await import(`../../data/splashArts.json`);
		return { data }; // id will be returned for displaying images..
	}
</script>
	
<script>
export let data;
let splashArts = data.splashArts;

let searchTerm = "";
let filteredSplashArts = [];

	$: {
		if(searchTerm){
			filteredSplashArts = splashArts.filter(splashArt => {
				return splashArt.toLowerCase().includes(searchTerm.toLowerCase().replace(" ", "-"));
			});
		} else {
			filteredSplashArts = splashArts;
		}
	}

</script>

<style>
</style>
<svelte:head>
	<title>splash art | wanderer.moe - a genshin database</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">
	<h1 class = "text-white font-semibold gifont">Character Splash Art</h1>
	<p class = "text-white">Contains character splash art with and without the background.</p>
	<p class = "text-gray-400 text-sm">The images may take a while to load dependant on your internet connection. Clicking 'Download File' will take you to a new page where you can save, copy, or download the file.</p>
	<br>

	<div class = "flex items-center justify-center">
		<input class="bg-[#2A303C] text-blue-400 h-14 w-96 rounded text-center focus:shadow focus:outline-none" bind:value ={searchTerm} placeholder="Search">
	</div>
	<br>

	<div class = "text-right">
	<a href = "https://github.com/dromzeh/genshin-splash-art/archive/refs/heads/main.zip">
		<button class="bg-gray-900 font-semibold text-white p-0.5 mb-2 mr-2 rounded-lg text-center px-5 py-2.5 hover:bg-gray-600 focus:shadow focus:outline-none">Download All Files</button>
	</a>
	</div>
	<br>

	<div class="flex flex-wrap justify-center gap-5">

		{#each filteredSplashArts as entry}
		<div class="w-full md:w-1/3 xl:w-auto px-4 mb-8 md:mb-0">
		  <div class="h-full max-w-xs mx-auto p-12 bg-[#2A303C] transition duration-150 ease-in-out hover:scale-105 rounded-xl">
			<div class="mb-7">
			<p class="font-heading text-sm mt-7 mb-7 text-blue-400 uppercase font-semibold">{entry}</p>
			  <a href = "https://raw.githubusercontent.com/dromzeh/genshin-splash-art/main/{entry}" target = "_blank">
				<div class="text-right">
					<button class="bg-gray-900 font-semibold text-white p-0.5 mb-2 mr-2 rounded-lg text-center px-5 py-2.5 hover:bg-gray-600 focus:shadow focus:outline-none">Download File</button>
				</a>
				<br>
			  <img src="/images/splashart/{entry.toLowerCase()}" alt="character preview for {entry}" loading = "lazy" />
			</div>
			</div>
		  </div>
		  {/each}
		  
		  <!-- check if filteredCharacterParts is empty -->
		{#if filteredSplashArts.length === 0}
			<p class = "text-white text-center">No results found for '{searchTerm}'</p>
		{/if}

		</div>
	</div>

</section>
</div>