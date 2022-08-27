<script context = "module">
import data from '../../data/allArtifacts.json';
</script>
<script>
let allArtifacts = data.artifacts;
let legendary = allArtifacts.filter(artifact => artifact.rarity.includes(5));
let epic = allArtifacts.filter(artifact => artifact.rarity.includes(4));
let three = allArtifacts.filter(artifact => artifact.rarity.includes(3));
let two = allArtifacts.filter(artifact => artifact.rarity.includes(2));
let one = allArtifacts.filter(artifact => artifact.rarity.includes(1));

</script>

<svelte:head>
    <title>artifacts | wanderer.moe</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">
	<h1 class = "text-white font-semibold gifont">Artifact Index</h1>
    <p class = "text-gray-400 text-sm">Contains all artifacts from 1.0 to the current live version, beta versions are not included.</p>
    
    <br>
    <h1 class = "text-white font-semibold gifont"><span class = "text-[#E2C96F]">5*</span> Artifacts</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {#each legendary as artifact}
        <div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg p-2 text-sm justify-center text-white font-semibold">
        <a href="/artifacts/{artifact.name.replace(/\s+/g, '-').toLowerCase()}">
            <img class = "mx-auto h-32 w-32" src = "/images/artifacts/{artifact.name.replace(/\s+/g, '-').toLowerCase()}/flower.png" alt = "{artifact.name}" loading = "lazy" />
            <p class = "text-base text-center">{artifact.name}</p>
            <p class = "text-base text-center">★★★★★</p>
        </a>
        </div>
        {/each}
    </div>

    <br>
    <h1 class = "text-white font-semibold gifont"><span class = "text-[#84719D]">4*</span> Artifacts</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {#each epic as artifact}
        <div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg p-2 text-sm justify-center text-white font-semibold">
        <a href="/artifacts/{artifact.name.replace(/\s+/g, '-').toLowerCase()}">
            <img class = "mx-auto h-32 w-32" src = "/images/artifacts/{artifact.name.replace(/\s+/g, '-').toLowerCase()}/flower.png" alt = "{artifact.name}" loading = "lazy" />
            <p class = "text-base text-center">{artifact.name}</p>
            <p class = "text-base text-center">★★★★</p>
        </a>
        </div>
        {/each}
    </div>

    <br>
    <h1 class = "text-white font-semibold gifont"><span class = "text-[#6c82d3]">3*</span> Artifacts</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {#each three as artifact}
        <div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg p-2 text-sm justify-center text-white font-semibold">
        <a href="/artifacts/{artifact.name.replace(/\s+/g, '-').toLowerCase()}">
            <img class = "mx-auto h-32 w-32" src = "/images/artifacts/{artifact.name.replace(/\s+/g, '-').toLowerCase()}/flower.png" alt = "{artifact.name}" loading = "lazy" />
            <p class = "text-base text-center">{artifact.name}</p>
            <p class = "text-base text-center">★★★</p>
        </a>
        </div>
        {/each}
    </div>

    <br>
    <h1 class = "text-white font-semibold gifont"><span class = "text-[#78bd6d]">2*</span> Artifacts</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {#each two as artifact}
        <div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg p-2 text-sm justify-center text-white font-semibold">
        <a href="/artifacts/{artifact.name.replace(/\s+/g, '-').toLowerCase()}">
            <img class = "mx-auto h-32 w-32" src = "/images/artifacts/{artifact.name.replace(/\s+/g, '-').toLowerCase()}/flower.png" alt = "{artifact.name}" loading = "lazy" />
            <p class = "text-base text-center">{artifact.name}</p>
            <p class = "text-base text-center">★★</p>
        </a>
        </div>
        {/each}
    </div>

    <br>
    <h1 class = "text-white font-semibold gifont"><span class = "text-[#c4c7c4]">1*</span> Artifacts</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {#each one as artifact}
        <div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg p-2 text-sm justify-center text-white font-semibold">
        <a href="/artifacts/{artifact.name.replace(/\s+/g, '-').toLowerCase()}">
            <img class = "mx-auto h-32 w-32" src = "/images/artifacts/{artifact.name.replace(/\s+/g, '-').toLowerCase()}/flower.png" alt = "{artifact.name}" loading = "lazy" />
            <p class = "text-base text-center">{artifact.name}</p>
            <p class = "text-base text-center">★</p>
        </a>
        </div>
        {/each}
    </div>


    </div>
</section>
</div>