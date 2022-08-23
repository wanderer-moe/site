<script context = "module">
import data from '../../data/updateList.json';
</script>

<script>
    let updatelist = data.updates;
</script>

<svelte:head>
	<title>update list | wanderer.moe</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
<section class="py-24 md:py-40">
	<div class="container px-4 mx-auto">
	<h1 class = "text-white font-semibold gifont">Update List</h1>
    <br>

    <div class = "grid grid-cols-1 gap-4">
    {#each updatelist as update}
    <div>
        <p class = "font-semibold text-white"> • {update.updateDate}</p>
        <p class = "text-gray-400 indent-4">{update.details}</p>
    </div>
    {/each}

    </div>
	</div>
</section>
</div>