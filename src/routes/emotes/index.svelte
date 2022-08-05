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

        <!-- emote cards -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {#each allEmotes as emote}
            <div class = "bg-[#1B1D2A] transition duration-150 ease-in-out hover:scale-105 rounded-lg p-2 align-center font-semibold text-white text-sm">
                <img class = "mx-auto h-32 w-32" src = "/images/emotes/{emote.replace(/\s+/g, '-')}" alt = "{emote}" loading = "lazy" />
                    <a href = "images/emotes/{emote}" target = "_blank">
                        <div class = "text-center">
                            <p class = "p-2">{emote.slice(3)}</p>
                        <button class="bg-blue-400 bg-opacity-70 justify-right font-semibold text-white rounded-lg px-5 p-2.5 hover:bg-blue-500 focus:shadow focus:outline-none">
                            <i class="fa-solid fa-download"></i>
                        </button>
                        </div>
                    </a>
            </div>
            {/each}
        </div>
    
        </div>
    </section>
    </div>