<script>
import { navigating, page } from '$app/stores'
import '@/app.css?v=31052023'
import Footer from '@/components/Footer.svelte'
import Nav from '@/components/Nav.svelte'
import { startClient } from '@/lib/utils/i18n.js'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { derived } from 'svelte/store'
import ScrollToTop from '../components/ScrollToTop.svelte'

NProgress.configure({
    // https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16,
    showSpinner: false,
})

// nprogress bar
$: {
    if ($navigating) {
        NProgress.start()
    }
    if (!$navigating) {
        NProgress.done()
    }
}

// derived store that runs whenever the $navigating store changes value
const delayedPreloading = derived(navigating, (_, set) => {
    set(true)
    setTimeout(() => set(true), 1000)
})

startClient()

$: segment = $page.url.pathname.substring(1).split('/')[0] // gets the first segment of the URL (e.g. /blog/1 => blog)
</script>

<ScrollToTop />
<Nav />
<main>
    <slot />
</main>
<Footer />
