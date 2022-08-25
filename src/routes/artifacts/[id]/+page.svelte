<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let id = data.id;

	let rarity = '⭐'.repeat(Math.max(...data.jsonFile.default.rarity));
</script>
<svelte:head>
    <title>{data.jsonFile.default.name} | wanderer.moe</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">

	<p class = "text-white text-4xl font-semibold"><span class = "gifont">Artifact Set: {data.jsonFile.name}</span></p>
	<p class = "text-white text-4xl">{rarity}</p>
	<br>

	<!-- stats section -->
	<div class = "flex flex-wrap justify-center">
		<div class = "w-full">
			<div class = "flex flex-col">
				
				<!-- container for artifact name -->
				<div class = "grid gap-2 items-center">
					<div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg max-w-full text-gray-400 font-semibold">
						<p class = "text-center"><span class = "text-white">2pc bonus:</span> {data.jsonFile.default['2pc']}</p>
					</div>
				
					<div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105   rounded-lg max-w-full text-gray-400 font-semibold">
						<p class = "text-center"><span class = "text-white">4pc bonus:</span> {data.jsonFile.default['4pc']}</p>
					</div>
				<div class="grid grid-cols-1 gap-2">

					<!-- order: flower, plume, sands, goblet, circlet -->

					<div class = "p-3 bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105   rounded-lg text-gray-400 font-semibold flex items-center ">
						<img class = "object-left artifactImg" src = "/images/artifacts/{id}/flower.png" alt = "flower from {data.jsonFile.default.name}" loading = "lazy" />
						<div>
						<p class = "text-white gifont text-xl text-left">{data.jsonFile.flower.name}</p>
						<p class = "text-white text-left">"{data.jsonFile.flower.relictype}"</p>
						<p class = "text-gray-400 text-left italic">"{data.jsonFile.flower.description}"</p>
						</div>
					</div>

					<div class = "p-3 bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105   rounded-lg text-gray-400 font-semibold flex items-center ">
						<img class = "object-left artifactImg" src = "/images/artifacts/{id}/plume.png" alt = "plume from {data.jsonFile.default.name}" loading = "lazy" />
						<div>
						<p class = "text-white gifont text-xl text-left">{data.jsonFile.plume.name}</p>
						<p class = "text-white text-left">"{data.jsonFile.plume.relictype}"</p>
						<p class = "text-gray-400 text-left italic">"{data.jsonFile.plume.description}"</p>
						</div>
					</div>

					<div class = "p-3 bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105   rounded-lg text-gray-400 font-semibold flex items-center ">
						<img class = "object-left artifactImg" src = "/images/artifacts/{id}/sands.png" alt = "sands from {data.jsonFile.default.name}" loading = "lazy" />
						<div>
						<p class = "text-white gifont text-xl text-left">{data.jsonFile.sands.name}</p>
						<p class = "text-white text-left">"{data.jsonFile.sands.relictype}"</p>
						<p class = "text-gray-400 text-left italic">"{data.jsonFile.sands.description}"</p>
						</div>
					</div>

					<div class = "p-3 bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105  rounded-lg text-gray-400 font-semibold flex items-center ">
						<img class = "object-left artifactImg" src = "/images/artifacts/{id}/goblet.png" alt = "goblet from {data.jsonFile.default.name}" loading = "lazy" />
						<div>
						<p class = "text-white gifont text-xl text-left">{data.jsonFile.goblet.name}</p>
						<p class = "text-white text-left">"{data.jsonFile.goblet.relictype}"</p>
						<p class = "text-gray-400 text-left italic">"{data.jsonFile.goblet.description}"</p>
						</div>
					</div>

					<div class = "p-3 bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105   rounded-lg text-gray-400 font-semibold flex items-center ">
						<img class = "object-left artifactImg" src = "/images/artifacts/{id}/circlet.png" alt = "circlet from {data.jsonFile.circlet.name}" loading = "lazy" />
						<div>
						<p class = "text-white gifont text-xl text-left">{data.jsonFile.circlet.name}</p>
						<p class = "text-white text-left">"{data.jsonFile.circlet.relictype}"</p>
						<p class = "text-gray-400 text-left italic">"{data.jsonFile.circlet.description}"</p>
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
