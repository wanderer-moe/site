<script>
import NProgress from "nprogress";
import { navigating } from "$app/stores";
import { onMount } from "svelte";
import { page } from "$app/stores";
import Nav from "../components/Nav.svelte";
import Footer from "../components/Footer.svelte";
// Progress css
import "nprogress/nprogress.css";

NProgress.configure({
  // Full list: https://github.com/rstacruz/nprogress#configuration
  minimum: 0.16,
  showSpinner: false,
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

$: segment = $page.url.pathname.substring(1).split("/")[0];
</script>

<Nav />
<main>
  <slot />
</main>
<Footer />
