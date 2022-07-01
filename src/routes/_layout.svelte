<script>
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/Footer.svelte';
	export let segment;
	segment = segment; // prevent warnings (https://github.com/sveltejs/sapper/issues/824#issuecomment-695624681)
</script>


<Nav {segment}/>

<main>
	<slot></slot>
</main>


<Footer {segment}/>