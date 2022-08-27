<script context = "module">
import data from '../../data/allEmotes.json';
</script>
<script>
let allEmotes = data.allEmotes;
</script>
    
    <svelte:head>
        <title>in-game emotes | wanderer.moe</title>
    </svelte:head>
    
    <div class = "flex flex-col min-h-screen">
    <section class="py-24 md:py-40">
        <div class="container px-4 mx-auto">
        <h1 class = "text-white font-semibold gifont">In-Game Emotes</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {#each allEmotes as entry}
            <div class = "p-3 bg-[#1F1A1A] transition duration-150 ease-in-out hover:scale-105 rounded-lg text-gray-400 font-semibold flex items-center">
                <img class = "object-left object-contain previewImg p-1" src = "/images/emotes/{entry}" alt = "{entry}" loading = "lazy" />
            <div class = "">
                <p class = "text-white text-m text-left">{entry}</p>
                <a href = "/images/emotes/{entry}" target = "_blank" download>
                    <button class="bg-indigo-400 bg-opacity-70 justify-right font-semibold text-white rounded-lg px-5 py-2.5 hover:bg-indigo-500 focus:shadow focus:outline-none">
                        <i class="fa-solid fa-download"></i> Download
                    </button>
                </a>
            </div>
            </div>
            {/each}
        <div>
    
        </div>
    </section>
    </div>