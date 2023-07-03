<script>
import { navigating, page } from '$app/stores'
import '@/app.css'
import Footer from '@/components/nav/Footer.svelte'
import Nav from '@/components/nav/Nav.svelte'
import { startClient } from '$lib/utils/i18n'
import NProgress from 'nprogress'
import { derived } from 'svelte/store'
import ScrollToTop from '@/components/nav/ScrollToTop.svelte'
import { afterNavigate, beforeNavigate, invalidate } from '$app/navigation'

beforeNavigate(() => {
    NProgress.start()
})
afterNavigate(() => {
    NProgress.done()
})

// derived store that runs whenever the $navigating store changes value
const delayedPreloading = derived(navigating, (_, set) => {
    set(true)
    setTimeout(() => set(true), 1000)
})

startClient()
$: segment = $page.url.pathname.substring(1).split('/')[0] // gets the first segment of the URL (e.g. /blog/1 => blog)
// $: console.log(segment)
</script>

<ScrollToTop />
<Nav />
<main>
    <slot />
</main>
<Footer />
