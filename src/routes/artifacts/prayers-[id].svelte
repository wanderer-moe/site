<script context="module">
// https://sapper.svelte.dev/docs#Server_routes
// import json file using @rollup/plugin-json..

export async function preload(page) {
    const { id } = page.params; // get the parameters and search for the id.json..
    const data = await import(`../../data/artifacts/prayers-${id}.json`);

    return { id, data }; // id will be returned for displaying images..
	// file not found: Unknown variable dynamic import...
  }
</script>

<script>

	export let data;
	export let id;
	//console.log(data); // for debugging purposes..

	// get highest number in data.default.rarity
	let rarity = '⭐'.repeat(Math.max(...data.default.rarity));

</script>
<svelte:head>
    <title>{data.default.name} | wanderer.moe - a genshin database</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">

	<p class = "text-white text-4xl font-semibold"><span class = "gifont">Artifact Set: {data.default.name}</span></p>
	<p class = "text-white text-4xl">{rarity}</p>
	<br>

	<!-- stats section -->
	<div class = "flex flex-wrap justify-center">
		<div class = "w-full">
			<div class = "flex flex-col">
				
				<!-- container for artifact name -->
				<div class = "grid gap-2 items-center">
					<div class = "bg-gray-800 hover:scale-105 rounded-lg max-w-full text-gray-400 font-semibold">
						<p class = "text-center"><span class = "text-white">1pc bonus:</span> {data.default['1pc']}</p>
					</div>
				
				<div class="grid grid-cols-1 gap-2">

					<!-- circlet is the only present item in prayers-[id] artifacts. -->

					<div class = "bg-gray-800 hover:scale-105 rounded-lg text-gray-400 font-semibold flex items-center ">
						<img class = "object-left" src = "./images/artifacts/prayers-{id}/circlet.png" alt = "circlet from {data.circlet.name}">
						<div>
						<p class = "text-white gifont text-xl text-left">{data.circlet.name}</p>
						<p class = "text-white text-left">"{data.circlet.relictype}"</p>
						<p class = "text-gray-400 text-left italic">"{data.circlet.description}"</p>
						</div>
					</div>

				</div>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
</div>
