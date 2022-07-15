<script>
    import { onMount } from 'svelte';

    let searchInput;

    function search() {
        console.log(searchInput.value);
        // check the value of the search input.
        // if it is empty, or if it is not a number, or isn't 9 characters return.
        if (searchInput.value == '' || isNaN(searchInput.value) || searchInput.value.length != 9) {
            // clear the search input.
            searchInput.value = '';
            return;
        }
        // if it is not empty, redirect to the search page.
        window.location.href = `/users/${searchInput.value}`;
    }
</script>

<svelte:head>
    <title>User Search</title>
</svelte:head>

<div class = "flex flex-col min-h-screen">
    <div class="container px-4 m-auto content-center">
        <p class = "text-white text-4xl font-semibold gifont text-center">Search for a Genshin User by UID</p>
        <p class = "text-gray-500 text-center">Enter a valid Genshin UID & make sure 'Show Character Details' is on.</p>
        <p class = "text-red-500 text-center font-semibold">IMPORTANT: /users/uid e.g /users/717666757 will most likely not work and say 'Page not Found', this issue is being worked on and will be fixed ASAP.</p>
        <br>

        <div class = "flex items-center justify-center">
            <input type="text" bind:this={searchInput} class="bg-[#2A303C] text-blue-400 h-14 w-96 rounded text-center focus:shadow focus:outline-none" placeholder="UID...">
        </div>
        <!-- search button -->
        <br>

        <div class = "flex items-center justify-center">
            <button on:click={search} class="bg-gray-900 font-semibold text-white p-0.5 h-14 w-96 mb-2 mr-2 rounded-lg text-center px-5 py-2.5 hover:bg-gray-600 focus:shadow focus:outline-none">Search <i class="fa-solid fa-angles-right"></i></button>
        </div>

    </div>
</div>
