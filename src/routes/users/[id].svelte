<script context="module">
// import { onMount } from "svelte";
import axios from "axios";

let data = ''

// https://sapper.svelte.dev/docs#Server_routes
export async function preload(page) {
    const { id } = page.params; // get the parameters and search for the id.json..

    let response = await axios.get(`https://enka.shinshin.moe/u/${id}/__data.json`)
    .then(function (response) {
		data = response.data;
	})
    // check if code is 500, if so, return error.
    return { data };
}
</script>
<script>
    // dictionary that matches id with character name.
    var dict = {
        10000002: "Kamisato Ayaka",
        10000003: "Jean",
        10000005: "Traveler",
        10000006: "Lisa",
        10000007: "Traveler",
        10000014: "Barbara",
        10000015: "Kaeya",
        10000016: "Diluc",
        10000020: "Razor",
        10000021: "Amber",
        10000022: "Venti",
        10000023: "Xiangling",
        10000024: "Beidou",
        10000025: "Xingqiu",
        10000026: "Xiao",
        10000027: "Ningguang",
        10000029: "Klee",
        10000030: "Zhongli",
        10000031: "Fischl",
        10000032: "Bennett",
        10000033: "Tartaglia",
        10000034: "Noelle",
        10000035: "Qiqi",
        10000036: "Chongyun",
        10000037: "Ganyu",
        10000038: "Albedo",
        10000039: "Diona",
        10000041: "Mona",
        10000042: "Keqing",
        10000043: "Sucrose",
        10000044: "Xinyan",
        10000045: "Rosaria",
        10000046: "Hu Tao",
        10000047: "Kaedehara Kazuha",
        10000048: "Yanfei",
        10000049: "Yoimiya",
        10000050: "Thoma",
        10000051: "Eula",
        10000052: "Raiden Shogun",
        10000053: "Sayu",
        10000054: "Sangonomiya Kokomi",
        10000055: "Gorou",
        10000056: "Kujou Sara",
        10000057: "Arataki Itto",
        10000058: "Yae Miko",
        10000059: "Shikanoin Heizou",
        10000060: "Yelan",
        10000062: "Aloy",
        10000063: "Shenhe",
        10000064: "Yun Jin",
        10000065: "Kuki Shinobu",
        10000066: "Kamisato Ayato"
    }

    export let data;
    
    //console.log(data); // for debugging purposes..

</script>

<svelte:head>
    <title>{data.playerInfo.nickname} | AR {data.playerInfo.level}</title>
</svelte:head>


<div class = "flex flex-col min-h-screen">
    <section class="py-24 md:py-40">
        <div class="container px-4 mx-auto">
    
    <p class = "text-white text-4xl font-semibold"><span class = "gifont">{data.playerInfo.nickname}</span> <span class = "text-2xl font-semibold text-gray-400">AR {data.playerInfo.level} & WL {data.playerInfo.worldLevel}</span></p>
    <p class = "text-gray-400">"{data.playerInfo.signature}"</p> <br>

                <div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3">

                    <div class = "bg-[#2A303C] rounded-lg text-white p-5">
                        <p><span class = "font-semibold text-blue-400 uppercase text-center">Spiral Abyss<br></span> {data.playerInfo.towerFloorIndex}-{data.playerInfo.towerLevelIndex}</p>
                    </div>

                    <div class = "bg-[#2A303C] rounded-lg text-white p-5">
                        <p><span class = "font-semibold text-blue-400 uppercase text-center">Achievements<br></span>{data.playerInfo.finishAchievementNum}</p>
                    </div>

                </div>
                <br>

                <div class = "flex flex-wrap">
                    <div class = "w-full">
                        <div class = "bg-[#2A303C] transition rounded-lg text-white p-5">
                            <p><span class = "font-semibold text-blue-400 uppercase text-center">Display Characters<br></span></p>

                            {#if data.playerInfo.showAvatarInfoList}
                            {#each data.playerInfo.showAvatarInfoList as character, i} 
                                <div class = "flex items-center">
                                    <img class = "object-left h-16 w-16" src = "/images/characters/{dict[character.avatarId].replace(/\s+/g, '-').replace("'",'').toLowerCase()}/icon-front.png" alt ="{dict[character.avatarId]}"  loading = "lazy" />
                                    <div class = "p-3">
                                    <a href = "/characters/{dict[character.avatarId].replace(/\s+/g, '-').replace("'",'').toLowerCase()}"><p class = "text-white hover:text-blue-400 text-2xl font-semibold">{dict[character.avatarId]}</p></a>
                                    <p class = "text-gray-400 uppercase font-semibold"> Lvl. {character.level}</p>
                                    {#if data.avatarInfoList}
                                        <p class = "text-gray-400 uppercase font-semibold">Friendship {data.avatarInfoList[i].fetterInfo.expLevel} - ATK {Math.round(data.avatarInfoList[i].fightPropMap[2001])}</p>
                                    {/if}
                                    </div>
                                </div>
                            {/each}
                            {/if}

                            {#if !data.playerInfo.showAvatarInfoList}
                                <p class = "text-white text-2xl font-semibold">No Characters On Display.</p>
                            {/if}

                        </div>
                 </div>

                 <p class = "text-gray-400">Powered by <a class = "font-semibold hover:text-blue-400" href = "https://github.com/EnkaNetwork/API-docs">enka.network's API</a></p>


            </div>
    </section>
</div>
