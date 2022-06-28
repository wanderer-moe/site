<script context="module">
// https://sapper.svelte.dev/docs#Server_routes
// import json file using @rollup/plugin-json..

export async function preload(page) {
    const { id } = page.params; // get the parameters and search for the id.json..
    const data = await import(`../../data/characters/${id}.json`);

    return { id, data }; // id will be returned for displaying images..
  }
</script>

<script>
	export let data;
	export let id;
	//console.log(data); // for debugging purposes..

	let rarity = '⭐'.repeat(data.rarity);
	let charactername;

	// checks if today is the character's birthday, and if so, adds a 🎂 to the name!
	// getting. todays date in the 'MM DD' format e.g. '26 June...'
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0');
	let mm = today.toLocaleString('default', { month: 'long' });
	today = mm + ' ' + dd 

	// checks if the character's birthday is today.
	if(data.birthday == today) {
		charactername = '🎂 ' + data.fullname;
	}
	else {
		charactername = data.fullname;
	}


</script>

<style>
.characterImg {
    height: calc(100vh - 4rem);
    max-height: 700px;
    max-width: 100%;
}

</style>
<svelte:head>
    <title>{charactername} | wanderer.moe - a genshin database</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">

	<!-- intro section -->
	<img class = "characterImg hidden md:block bg-fixed" style = "float: right" src = "./images/splashartNoBg/{id}.png" alt = "{data.fullname}">
	<!-- todo: maybe move splash art location above text instead of removing it on smaller screens...? -->

	
	<div class = "flex items-center">
	<img class = "w-8 h-8" src = "./images/elements/{data.element}.png" alt = "{data.element} symbol">
	<p class = "text-white text-4xl font-semibold gifont"> {charactername}</p>
	</div>

		{#if data.title != ''}
			<p class = "text-3xl gifont text-white"> "{data.title}"</p>
		{/if}

		<br><p>{rarity}</p>
	<p class = "text-white text-2xl font-semibold">{data.constellation}</p>
	<p class = "text-gray-400">- {data.description}</p>
	<br>

	<!-- stats section -->
	<div class = "flex flex-wrap">
		<div class = "w-full md:w-1/2">
			<div class = "flex flex-col">
				</div>

				<!-- container for data -->
				<div class="grid gap-2">
				
					<img src = "./images/characters/{id}/namecard-bar.png" alt = "namecard of {data.fullname}">

				<!-- container for cv -->
				<div class = "bg-gray-800 hover:scale-105 shadow-md rounded-lg text-white p-5">
					<span class = "font-semibold">EN</span>: {data.cv.english}<br>
					<span class = "font-semibold">JP</span>: {data.cv.japanese}<br>
					<span class = "font-semibold">CN</span>: {data.cv.chinese}<br>
					<span class = "font-semibold">KR</span>: {data.cv.korean}<br>
				</div>

				<!-- container for basic stats -->
				<div class = "bg-gray-800 hover:scale-105 shadow-md rounded-lg text-white p-5">
					<span class = "font-semibold">Rarity</span>: {data.rarity}*<br>
					<span class = "font-semibold">Element</span>: {data.element}<br>
					<span class = "font-semibold">Weapon Type</span>: {data.weapontype}<br>	
					<span class = "font-semibold">Affiliation</span>: {data.affiliation}<br>
					<span class = "font-semibold">Region</span>: {data.region}<br>
					<span class = "font-semibold">Ascension Bonus</span>: {data.substat}<br>
					<span class = "font-semibold">Constellation</span>: {data.constellation}<br>
					<span class = "font-semibold">Birthday</span>: {data.birthday}<br>				
				</div>

				<div class = "bg-gray-800 hover:scale-105 shadow-md rounded-lg text-white p-5">
					<span class = "font-semibold">Ascension Items</span><br>
					<div class = "flex flex-wrap gap-10">
						<!-- replace ' with nothing and replace spaces with - -->
					<img class = "object-contain h-16 w-16" src = "./images/items/{data.costs.ascend5[1].name.replace(/\s+/g, '-').replace("'",'').toLowerCase()}.png" alt = "{data.costs.ascend5[1].name}">
					<img class = "object-contain h-16 w-16" src = "./images/items/{data.costs.ascend5[2].name.replace(/\s+/g, '-').replace("'",'').toLowerCase()}.png" alt = "{data.costs.ascend5[2].name}">
					<img class = "object-contain h-16 w-16" src = "./images/items/{data.costs.ascend5[3].name.replace(/\s+/g, '-').replace("'",'').toLowerCase()}.png" alt = "{data.costs.ascend5[3].name}">
					<img class = "object-contain h-16 w-16" src = "./images/items/{data.costs.ascend5[4].name.replace(/\s+/g, '-').replace("'",'').toLowerCase()}.png" alt = "{data.costs.ascend5[4].name}">
					</div>
				</div>


				</div>	
			</div>
		</div>
    </div>
</section>
</div>