<script context="module">
export async function preload(page) {
    const data = await import(`../../data/allCharacters.json`);
    return { data }; // id will be returned for displaying images..
}
</script>

<script>
export let data;
let allCharacters = data.characters;
</script>

<style>
</style>

<svelte:head>
    <title>characters | wanderer.moe - a genshin database</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">
	<h1 class = "text-white font-semibold gifont">Character Index</h1>
    <p class = "text-gray-400">List of all Playable Characters</p>
	<br>

    <!-- character cards -->
    <!-- todo: change this layout maybe in the future? -->
    <div class="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {#each allCharacters as character}
        <div class = "bg-gray-800 hover:scale-105 p-4 rounded-lg justify-center text-gray-400 font-semibold hover:text-white flex flex-row relative">
        <a href="/characters/{character.name.replace(/\s+/g, '-').toLowerCase()}">
            <img src="./images/elements/{character.element.toLowerCase()}.png" alt="{character.element} symbol" class="absolute w-8 top-1 left-1" loading = "lazy">
            <img class = "h-32 w-32 align-center" src = "./images/characters/{character.name.replace(/\s+/g, '-').toLowerCase()}/icon-front.png" alt = "Portrait image of {character.name}" loading = "lazy">
            <p class = "text-sm text-center">{character.name}</p>
            <p class = "text-xs text-center">{'⭐'.repeat(character.rarity)}</p>
        </a>
        </div>
        {/each}
    </div>

    </div>
</section>
</div>