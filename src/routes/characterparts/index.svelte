<script context = "module">
import data from '../../data/characterParts.json';
</script>

<script>
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
	
<svelte:head>
	<title>character parts | wanderer.moe</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">
	<div class="flex flex-wrap justify-between gap-4">
	<h1 class = "text-white font-semibold gifont">Character Parts</h1>
	<input class="bg-[#1B1D2A] text-blue-400 h-14 w-96 rounded text-center focus:shadow focus:outline-none" bind:value ={searchTerm} placeholder="🔎 Search for a File">
	</div>
	<br>

	<div class="flex flex-wrap justify-center gap-5">

		{#each filteredCharacterParts as entry}
		<div class="w-full md:w-1/3 xl:w-auto px-4">
		  <div class="h-full max-w-xs mx-auto transition duration-150 ease-in-out hover:scale-105 p-12 bg-[#1B1D2A] text-white rounded-lg font-semibold">
			<div class="mb-4">
			<img src="/images/characterparts/{entry.toLowerCase()}" width = "256" height = "256" alt="character part for {entry}" loading = "lazy" />
			<br>

			<div class = "flex justify-between">
				{entry}
				<a href = "https://raw.githubusercontent.com/dromzeh/genshin-character-parts/main/{entry}" target = "_blank">
					<button class="bg-blue-400 bg-opacity-70 justify-right font-semibold text-white rounded-lg px-5 py-2.5 hover:bg-blue-500 focus:shadow focus:outline-none">
						<i class="fa-solid fa-download"></i>
					</button>
				</a>
			</div>

			</div>
			</div>
		  </div>
		  {/each}

		  <!-- check if filteredCharacterParts is empty -->
		  {#if filteredCharacterParts.length === 0}
		  	<p class = "text-gray-400 text-center">No results were found for '{searchTerm}', you may be able to find the <span class = "text-blue-500"><a href = "/splashart" class = "font-semibold text-white hover:text-blue-400">splash art version</a></span> instead. <br>Think something should be here? Feel free to join the <a href = "https://discord.com/invite/659KAFfNd6" class = "font-semibold text-white hover:text-blue-400">discord server</a> and ask!</p>
		  {/if}
		  
		</div>
	</div>

</section>
</div>

<style lang="postcss">
img {
	object-fit: cover;
	height: 256px;	
	width: 256px;	
}
</style>