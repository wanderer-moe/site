<script context="module">
	export function load({ error, status }) {
	  return {
		props: {
		  status,
		  error,
		},
	  };
	}
</script>

<script>

export let status;
export let error;

</script>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<div class = "flex h-screen">
	<div class = "m-auto text-center">
	<p class = "text-red-400 text-5xl font-semibold">{status}</p>
	<p class = "text-white text-xl">{error.message}</p>
	{#if status == '500'}
		<p class = "text-gray-400 text-sm">Not supposed to be seeing this? This site is still in heavy development & bugs are bound to occur. Check the <a href = "https://discord.gg/659KAFfNd6" class = "font-semibold text-white hover:text-blue-500">discord</a> server for more information.</p>
	{/if}

	<p class = "text-gray-400 text-sm">Try refreshing the page, or <a href = "/" class = "font-semibold text-white hover:text-blue-500">Go Back...</a></p>

	</div>
</div>
