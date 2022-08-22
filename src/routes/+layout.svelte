<script>
import Nav from '../components/Nav.svelte';
import Footer from '../components/Footer.svelte';
export let segment;
segment = segment; 

import NProgress from 'nprogress';
import { navigating } from '$app/stores';

// Progress css
import 'nprogress/nprogress.css';

NProgress.configure({
	// Full list: https://github.com/rstacruz/nprogress#configuration
	minimum: 0.16,
	showSpinner: false
	// 3476CF
});

$: {
	if ($navigating) {
		NProgress.start();
	}
	if (!$navigating) {
		NProgress.done();
	}
}
</script>


<Nav {segment}/>

<main>
	<slot></slot>
</main>


<Footer {segment}/>