<script context="module">
	export async function preload(page) {
		const data = await import(`../../data/splashArt.json`);
		return { data }; // id will be returned for displaying images..
	}
</script>
	
<script>
export let data;
let splashArt = data.splashArt;
</script>

<style>
</style>
<svelte:head>
	<title>splash art | wanderer.moe - a genshin database</title>
</svelte:head>

<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">
	<h1 class = "text-white font-semibold gifont">Character Splash Art</h1>
	<p class = "text-gray-400">Contains character splash art with and without the background.</p>
	<p class = "text-gray-400 text-sm">These are manually updated from a <a href = "https://github.com/dromzeh/genshin-splash-art" class = "hover:underline">github repository</a> & it may take from 0-24 hours for new parts to appear.<br>The preview images may take a while to load dependant on your internet connection.<br>Clicking 'Download File' will take you to a new page where you can save, copy, or download the file.</p>
	<br>
	<div class = "text-right">
	<a href = "https://github.com/dromzeh/genshin-splash-art/archive/refs/heads/main.zip">
	<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-blue-400 to-blue-500 group-hover:from-blue-400 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
		<span class="relative px-5 font-semibold py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
			Download All Files
		</span>
	</button>
	</a>
	</div>
	<br>

	<div class="flex flex-wrap justify-center gap-5">

		{#each splashArt as entry}
		<div class="w-full md:w-1/3 xl:w-auto px-4 mb-8 md:mb-0">
		  <div class="h-full max-w-xs mx-auto p-12 bg-gray-800 rounded-xl">
			<div class="mb-7">
			  <h5 class="font-heading text-l mt-7 mb-7 text-white font-semibold">{entry}</h5>
			  <a href = "https://raw.githubusercontent.com/dromzeh/genshin-splash-art/main/{entry}" target = "_blank">
				<div class="text-right">
					<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-blue-400 to-blue-500 group-hover:from-blue-400 group-hover:to-blue-500 text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
						<span class="relative px-5 font-semibold py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-opacity-0">
							Download File
						</span>
					</button>
				</a>
				<br>
			  <img src="/images/splashart/{entry.toLowerCase()}" alt="character preview for {entry}" loading = "lazy" />
			</div>
			</div>
		  </div>
		  {/each}
		  
		</div>
	</div>

</section>