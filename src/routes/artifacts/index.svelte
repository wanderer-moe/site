<script>
let allArtifacts = [
    'Adventurer',
    'Archaic Petra',
    'Berserker',
    'Blizzard Strayer',
    'Bloodstained Chivalry',
    'Brave Heart',
    'Crimson Witch of Flames',
    'Defenders Will',
    'Echoes of an Offering',
    'Emblem of Severed Fate',
    'Gambler',
    'Gladiators Finale',
    'Heart of Depth',
    'Husk of Opulent Dreams',
    'Instructor',
    'Lavawalker',
    'Lucky Dog',
    'Maiden Beloved',
    'Martial Artist',
    'Noblesse Oblige',
    'Ocean-Hued Clam',
    'Pale Flame',
    'Prayers for Destiny',
    'Prayers for Illumination',
    'Prayers for Wisdom',
    'Prayers to Springtime',
    'Resolution of Sojourner',
    'Retracing Bolide',
    'Scholar',
    'Shimenawas Reminiscence',
    'Tenacity of the Millelith',
    'The Exile',
    'Thundering Fury',
    'Thundersoother',
    'Tiny Miracle',
    'Traveling Doctor',
    'Vermillion Hereafter',
    'Viridescent Venerer',
    'Wanderers Troupe'
]

</script>

<style>
</style>

<svelte:head>
    <title>artifacts | wanderer.moe - a genshin database</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">
	<h1 class = "text-white font-semibold gifont">Artifact Index</h1>
    <p class = "text-gray-400">List of Artifacts</p>
	<br>

    <!-- artifact cards -->
    <!-- todo: change this layout maybe in the future? -->
    <div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {#each allArtifacts as artifact}
        <div class = "bg-gray-800 hover:scale-105 rounded-lg p-2 justify-center text-gray-400 font-semibold hover:text-white">
        <a href="/artifacts/{artifact.replace(/\s+/g, '-').toLowerCase()}">
            <img class = "mx-auto h-32 w-32" src = "/images/artifacts/{artifact.replace(/\s+/g, '-').toLowerCase()}/flower.png" alt = "image of an artifact from the artifact set {artifact}" loading = "lazy" />
            <p class = "text-sm text-center">{artifact}</p>
        </a>
        </div>
        {/each}
    </div>

    </div>
</section>
</div>