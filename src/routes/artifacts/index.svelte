<script context = "module">
import data from '../../data/allArtifacts.json';
</script>
<script>
let allArtifacts = data.allArtifacts;
</script>

<svelte:head>
    <title>artifacts | wanderer.moe - a genshin database</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">
	<h1 class = "text-white font-semibold gifont">Artifact Index</h1>

    <!-- artifact cards -->
    <!-- todo: change this layout maybe in the future? -->
    <div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {#each allArtifacts as artifact}
        <div class = "bg-[#2A303C] transition duration-150 ease-in-out hover:scale-105 rounded-lg p-2 justify-center text-gray-400 font-semibold hover:text-white">
        <a href="/artifacts/{artifact.replace(/\s+/g, '-').toLowerCase()}">
            <img class = "mx-auto h-32 w-32" src = "/images/artifacts/{artifact.replace(/\s+/g, '-').toLowerCase()}/flower.png" alt = "{artifact}" loading = "lazy" />
            <p class = "text-sm text-center">{artifact}</p>
        </a>
        </div>
        {/each}
    </div>

    </div>
</section>
</div>