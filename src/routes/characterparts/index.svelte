<script context="module">
	export async function preload(page) {
		const data = await import(`../../data/characterParts.json`);
		return { data }; // id will be returned for displaying images..
	}
</script>
	
<script>
export let data;
let characterParts = data.characterParts;


let searchTerm = "";
let filteredCharacterParts = [];

$: {
	if(searchTerm){
		filteredCharacterParts = characterParts.filter(characterPart => {
			return characterPart.toLowerCase().includes(searchTerm.toLowerCase().replace(" ", "-"));
		});
	} else {
		filteredCharacterParts = characterParts;
	}
}

</script>
	
<style>
img {
	object-fit: cover;
	height: 256px;	
	width: 256px;	
}
</style>
<svelte:head>
	<title>character parts | wanderer.moe - a genshin database</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">

	<div class="flex flex-wrap justify-between gap-4">
	<h1 class = "text-white font-semibold gifont">Character Parts</h1>
	<input class="bg-[#2A303C] text-blue-400 h-14 w-96 rounded text-center focus:shadow focus:outline-none" bind:value ={searchTerm} placeholder="🔎 Search for a File">
	</div>

	<br>
	<p class = "text-gray-400 text-sm">The preview images may take a while to load dependant on your internet connection. Clicking 'Download File' will take you to a new page where you can save, copy, or download the file.</p>
	<br>


	<div class = "text-right">
	<a href = "https://github.com/dromzeh/genshin-character-parts/archive/refs/heads/main.zip">
		<button class="bg-blue-400 font-semibold text-white p-0.5 mb-2 mr-2 rounded-lg text-center px-5 py-2.5 hover:bg-blue-500 focus:shadow focus:outline-none"><i class="fa-solid fa-download"></i> Download All Files</button>
	</a>
	</div>
	<br>

	<div class="flex flex-wrap justify-center gap-5">

		{#each filteredCharacterParts as entry}
		<div class="w-full md:w-1/3 xl:w-auto px-4 mb-8 md:mb-0">
		  <div class="h-full max-w-xs mx-auto p-12 bg-[#2A303C] transition duration-150 ease-in-out hover:scale-105 rounded-xl">
			<div class="mb-8">

			  <div class = "align-center">
				<p class="font-heading text-sm text-blue-400 uppercase font-semibold">{entry}</p>
				<a href = "https://raw.githubusercontent.com/dromzeh/genshin-splash-art/main/{entry}" target = "_blank">
				  <button class="bg-blue-400 font-semibold text-white p-0.5 mb-2 mr-2 rounded-lg text-center px-5 py-2.5 hover:bg-blue-500 focus:shadow focus:outline-none">
					  <i class="fa-solid fa-download"></i> Download
				  </button>
				</a>
				</div>

			  <img src="/images/characterparts/{entry.toLowerCase()}" width = "256" height = "256" alt="character part for {entry}" loading = "lazy" />
			</div>
			</div>
		  </div>
		  {/each}

		  <!-- check if filteredCharacterParts is empty -->
		  {#if filteredCharacterParts.length === 0}
		  <p class = "text-gray-400 text-center">No results found for '{searchTerm}', you may be able to find the <span class = "text-blue-500"><a href = "/splashart" class = "font-semibold text-white hover:text-blue-400">splash art version</a></span> instead. <br>Think something should be here? Feel free to join the <a href = "https://discord.com/invite/659KAFfNd6" class = "font-semibold text-white hover:text-blue-400">discord server</a> and ask!</p>
		  {/if}
		</div>
	</div>

</section>
</div>