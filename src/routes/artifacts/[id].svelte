<script context="module">
	export async function load({ params, fetch }) {
		const { id } = params;
		const data = await import(`../../data/artifacts/${id}.json`);
	
		return { props: { id, data } }
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
					<div class = "bg-[#2A303C] transition duration-150 ease-in-out hover:scale-105 rounded-lg max-w-full text-gray-400 font-semibold">
						<p class = "text-center"><span class = "text-white">2pc bonus:</span> {data.default['2pc']}</p>
					</div>
				
					<div class = "bg-[#2A303C] transition duration-150 ease-in-out hover:scale-105   rounded-lg max-w-full text-gray-400 font-semibold">
						<p class = "text-center"><span class = "text-white">4pc bonus:</span> {data.default['4pc']}</p>
					</div>
				<div class="grid grid-cols-1 gap-2">

					<!-- order: flower, plume, sands, goblet, circlet -->

					<div class = "p-3 bg-[#2A303C] transition duration-150 ease-in-out hover:scale-105   rounded-lg text-gray-400 font-semibold flex items-center ">
						<img class = "object-left artifactImg" src = "/images/artifacts/{id}/flower.png" alt = "flower from {data.default.name}" loading = "lazy" />
						<div>
						<p class = "text-white gifont text-xl text-left">{data.flower.name}</p>
						<p class = "text-white text-left">"{data.flower.relictype}"</p>
						<p class = "text-gray-400 text-left italic">"{data.flower.description}"</p>
						</div>
					</div>

					<div class = "p-3 bg-[#2A303C] transition duration-150 ease-in-out hover:scale-105   rounded-lg text-gray-400 font-semibold flex items-center ">
						<img class = "object-left artifactImg" src = "/images/artifacts/{id}/plume.png" alt = "plume from {data.default.name}" loading = "lazy" />
						<div>
						<p class = "text-white gifont text-xl text-left">{data.plume.name}</p>
						<p class = "text-white text-left">"{data.plume.relictype}"</p>
						<p class = "text-gray-400 text-left italic">"{data.plume.description}"</p>
						</div>
					</div>

					<div class = "p-3 bg-[#2A303C] transition duration-150 ease-in-out hover:scale-105   rounded-lg text-gray-400 font-semibold flex items-center ">
						<img class = "object-left artifactImg" src = "/images/artifacts/{id}/sands.png" alt = "sands from {data.default.name}" loading = "lazy" />
						<div>
						<p class = "text-white gifont text-xl text-left">{data.sands.name}</p>
						<p class = "text-white text-left">"{data.sands.relictype}"</p>
						<p class = "text-gray-400 text-left italic">"{data.sands.description}"</p>
						</div>
					</div>

					<div class = "p-3 bg-[#2A303C] transition duration-150 ease-in-out hover:scale-105   rounded-lg text-gray-400 font-semibold flex items-center ">
						<img class = "object-left artifactImg" src = "/images/artifacts/{id}/goblet.png" alt = "goblet from {data.default.name}" loading = "lazy" />
						<div>
						<p class = "text-white gifont text-xl text-left">{data.goblet.name}</p>
						<p class = "text-white text-left">"{data.goblet.relictype}"</p>
						<p class = "text-gray-400 text-left italic">"{data.goblet.description}"</p>
						</div>
					</div>

					<div class = "p-3 bg-[#2A303C] transition duration-150 ease-in-out hover:scale-105   rounded-lg text-gray-400 font-semibold flex items-center ">
						<img class = "object-left artifactImg" src = "/images/artifacts/{id}/circlet.png" alt = "circlet from {data.circlet.name}" loading = "lazy" />
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
