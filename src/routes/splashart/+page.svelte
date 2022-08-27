<script context = "module">
import data from '../../data/splashArts.json';
</script>
	
<script>
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

<svelte:head>
	<title>splash art | wanderer.moe</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">
	<div class="flex flex-wrap justify-between gap-4">
	<h1 class = "text-white font-semibold gifont">Splash Art</h1>
	<input class="bg-[#1F1A1A] text-indigo-400 h-14 w-96 rounded text-center focus:shadow focus:outline-none" bind:value ={searchTerm} placeholder="🔎 Search for a File">
	</div>
	<br>
	

	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
		{#each filteredSplashArts as entry}
		<div class = "p-3 bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg text-gray-400 font-semibold flex items-center">
			<img class = "object-left object-contain previewImg p-1" src = "/images/splashart/{entry}" alt = "{entry}" loading = "lazy" />
		<div>
			<p class = "text-white text-m text-left">{entry}</p>
			<a href = "/images/splashart/{entry}" target = "_blank" download>
				<button class="bg-indigo-400 bg-opacity-70 justify-right font-semibold text-white rounded-lg px-5 py-2.5 hover:bg-indigo-500 focus:shadow focus:outline-none">
					<i class="fa-solid fa-download"></i> Download
				</button>
			</a>
		</div>
		</div>
		{/each}
	<div>

		  
		<!-- check if filteredSplashArts is empty -->
		{#if filteredSplashArts.length === 0}
			<p class = "text-gray-400">No results were found for '{searchTerm}'. <br>Think something should be here? Feel free to join the <a href = "https://discord.com/invite/659KAFfNd6" class = "font-semibold text-white hover:text-indigo-400">discord server</a> and ask!</p>
		{/if}

		</div>
	</div>

</section>
</div>

<style lang="postcss">
	img {
		object-fit: fit;
		height: 256px;	
		width: 256px;	
	}
</style>