<script context = "module">
    import data from '../../data/allCharacters.json';
</script>
        
<script>
    let allCharacters = data.characters;

    let legendary = allCharacters.filter(character => character.rarity === 5);
    let epic = allCharacters.filter(character => character.rarity === 4); // i don't know why i called it epic :skull:
</script>
        
    <svelte:head>
        <title>characters | wanderer.moe</title>
    </svelte:head>
        
    <div class = "flex flex-col min-h-screen">
    <section class="py-24 md:py-40">
        <div class="container px-4 mx-auto">
        <h1 class = "text-white font-semibold gifont">Character Index</h1>
        <p class = "text-gray-400 text-sm">Contains all playable characters from 1.0 to the current live version, beta versions are not included.</p>
        
        <br>
        <h1 class = "text-white font-semibold gifont"><span class = "text-[#E2C96F]">5*</span> Characters</h1>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {#each legendary as character}
            <div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg p-2 text-sm justify-center text-white font-semibold">
            <a href="/characters/{character.name.replace(/\s+/g, '-').toLowerCase()}">
                <img class = "h-32 w-32 mx-auto" src = "/images/characters/{character.name.replace(/\s+/g, '-').toLowerCase()}/icon-front.png" alt = "Portrait image of {character.name}" loading = "lazy" />
                <p class = "text-base text-center">{character.name}</p>
                <div class = "flex justify-center">
                    <img class = "h-8 w-8" src = "/images/weapontypes/{character.weaponType}.png" alt = "{character.weaponType}"/>
                    <img class = "h-8 w-8" src = "/images/elements/{character.element.toLowerCase()}.png" alt = "{character.element}"/>
                </div>
            </a>
            </div>
            {/each}
        </div>

        <br>
        <h1 class = "text-white font-semibold gifont"><span class = "text-[#84719D]">4*</span> Characters</h1>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {#each epic as character}
            <div class = "bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg p-2 text-sm justify-center text-white font-semibold">
                <a href="/characters/{character.name.replace(/\s+/g, '-').toLowerCase()}">
                    <img class = "h-32 w-32 mx-auto" src = "/images/characters/{character.name.replace(/\s+/g, '-').toLowerCase()}/icon-front.png" alt = "Portrait image of {character.name}" loading = "lazy" />
                    <p class = "text-lg text-center">{character.name}</p>
                <div class = "flex justify-center">
                    <img class = "h-8 w-8" src = "/images/weapontypes/{character.weaponType}.png" alt = "{character.weaponType}"/>
                    <img class = "h-8 w-8" src = "/images/elements/{character.element.toLowerCase()}.png" alt = "{character.element}"/>
                </div>
                </a>
            </div>
            {/each}
        </div>
        
        </div>
    </section>
    </div>