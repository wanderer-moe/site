<script>
import NProgress from "nprogress";
import { navigating } from "$app/stores";
import { onMount } from "svelte";
import { page } from "$app/stores";
import { t } from "svelte-i18n";
import { startClient } from "../i18n.js";
import Nav from "../components/Nav.svelte";
import Footer from "../components/Footer.svelte";
import "nprogress/nprogress.css";
import { derived } from "svelte/store";
import "../app.css?v=27052023";

NProgress.configure({
  // Full list: https://github.com/rstacruz/nprogress#configuration
  minimum: 0.16,
  showSpinner: false,
  // 3476CF
});

$: {
  // This is a reactive statement that runs whenever the $navigating store changes value (i.e. when the user navigates to a new page)
  if ($navigating) {
    NProgress.start();
  }
  if (!$navigating) {
    NProgress.done();
  }
}

const delayedPreloading = derived(navigating, (_, set) => {
  // this is a derived store that runs whenever the $navigating store changes value
  set(true);
  setTimeout(() => set(true), 1000);
});

startClient();

$: segment = $page.url.pathname.substring(1).split("/")[0]; // Get the first segment of the URL (e.g. /blog/1 => blog)
</script>

<Nav />
<main>
  <slot />
</main>
<Footer />
