<script>
	/** @type {import('./$types').PageData} */
	export let data;

	let id = data.id;

	let rarity = '⭐'.repeat(data.jsonFile.rarity);
</script>

<svelte:head>
    <title>{data.jsonFile.fullname} | wanderer.moe</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">

	<!-- intro section -->
	<img class = "characterImg hidden md:block bg-fixed" style = "float: right" src = "/images/splashart/{id}-nobg.png" alt = "{data.jsonFile.fullname}" loading = "lazy" />
	<!-- todo: maybe move splash art location above text instead of removing it on smaller screens...? -->

	
	<div class = "flex items-center">
	<img class = "w-8 h-8" src = "/images/elements/{data.jsonFile.element.toLowerCase()}.png" alt = "{data.jsonFile.element} symbol"  loading = "lazy" />
	<p class = "text-white text-4xl font-semibold gifont"> {data.jsonFile.fullname}</p>
	</div>

		{#if data.jsonFile.title != ''}
			<p class = "text-3xl gifont text-white"> "{data.jsonFile.title}"</p>
		{/if}

		<br><p>{rarity}</p>
	<p class = "text-white text-2xl font-semibold">{data.jsonFile.constellation}</p>
	<p class = "text-gray-400">- {data.jsonFile.description}</p>
	<br>

	<!-- stats section -->
	<div class = "flex flex-wrap">
		<div class = "w-full md:w-1/2">
			<div class = "flex flex-col">
				</div>

				<!-- container for data -->
				<div class="grid gap-2">
				
					<img src = "/images/characters/{id}/namecard-bar.png" alt = "namecard of {data.fullname}" loading = "lazy" />

				<!-- container for cv -->
				<div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105  rounded-lg text-white p-5">
					<span class = "font-semibold">EN</span>: {data.jsonFile.cv.english}<br>
					<span class = "font-semibold">JP</span>: {data.jsonFile.cv.japanese}<br>
					<span class = "font-semibold">CN</span>: {data.jsonFile.cv.chinese}<br>
					<span class = "font-semibold">KR</span>: {data.jsonFile.cv.korean}<br>
				</div>

				<!-- container for basic stats -->
				<div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105  rounded-lg text-white p-5">
					<span class = "font-semibold">Rarity</span>: {data.jsonFile.rarity}*<br>
					<span class = "font-semibold">Element</span>: {data.jsonFile.element}<br>
					<span class = "font-semibold">Weapon Type</span>: {data.jsonFile.weapontype}<br>	
					<span class = "font-semibold">Affiliation</span>: {data.jsonFile.affiliation}<br>
					<span class = "font-semibold">Region</span>: {data.jsonFile.region}<br>
					<span class = "font-semibold">Ascension Bonus</span>: {data.jsonFile.substat}<br>
					<span class = "font-semibold">Constellation</span>: {data.jsonFile.constellation}<br>
					<span class = "font-semibold">Birthday</span>: {data.jsonFile.birthday}<br>				
				</div>

				<div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105  rounded-lg text-white p-5">
					<span class = "font-semibold">Ascension Items</span><br>
					<div class = "flex flex-wrap gap-10">
						<!-- replace ' with nothing and replace spaces with - -->
					<img class = "object-contain h-16 w-16" src = "/images/items/{data.jsonFile.costs.ascend5[1].name.replace(/\s+/g, '-').replace("'",'').toLowerCase()}.png" alt = "{data.jsonFile.costs.ascend5[1].name}"  loading = "lazy" />
					<img class = "object-contain h-16 w-16" src = "/images/items/{data.jsonFile.costs.ascend5[2].name.replace(/\s+/g, '-').replace("'",'').toLowerCase()}.png" alt = "{data.jsonFile.costs.ascend5[2].name}"  loading = "lazy" />
					<img class = "object-contain h-16 w-16" src = "/images/items/{data.jsonFile.costs.ascend5[3].name.replace(/\s+/g, '-').replace("'",'').toLowerCase()}.png" alt = "{data.jsonFile.costs.ascend5[3].name}"  loading = "lazy" />
					<img class = "object-contain h-16 w-16" src = "/images/items/{data.jsonFile.costs.ascend5[4].name.replace(/\s+/g, '-').replace("'",'').toLowerCase()}.png" alt = "{data.jsonFile.costs.ascend5[4].name}"  loading = "lazy" />
					</div>
				</div>

				{#if data.jsonFile.artifactSet != "undefined"}
				<div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105  rounded-lg text-white p-5">
					<span class = "font-semibold">Reccomended Artifact</span><br>
				<div class = "flex items-center gap-10">
					<img class = "object-left h-16 w-16" src = "/images/artifacts/{data.jsonFile.artifactSet.replace(/\s+/g, '-').replace("'",'').toLowerCase()}/flower.png" alt = "{data.jsonFile.artifactSet}"  loading = "lazy" />
					<a href = "/artifacts/{data.jsonFile.artifactSet.replace(/\s+/g, '-').replace("'",'').toLowerCase()}"><p class = "hover:text-blue-500 text-white text-2xl gifont">{data.jsonFile.artifactSet}</p></a>
				</div>
				</div>
				{/if}

				</div>	
			</div>
		</div>
    </div>
</section>
</div>