<script>
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class = "flex h-screen">
	<div class = "m-auto text-center">
	<p class = "text-red-400 text-5xl font-semibold">{status}</p>
	<p class = "text-white text-xl">{error.message}</p>
	{#if status == '500' && !dev}
		<p class = "text-gray-400 text-sm">Not supposed to be seeing this? Check the <a href = "https://discord.gg/659KAFfNd6" class = "font-semibold text-white hover:text-blue-500">discord</a> server for more information.</p>
	{/if}

	{#if status == '503'}
		<p class = "text-gray-400 text-sm">Try Refreshing the Page.</p>
	{/if}

	<a href = "/" class = "text-gray-400 hover:text-blue-500">Go back..</a>
	</div>
</div>

{#if dev && error.stack}
	<p class = "text-center text-red-500">{error.stack}</p>
{/if}
