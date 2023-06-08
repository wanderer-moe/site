<script>
import { onMount } from 'svelte'
// import { cubicOut, quintOut } from "svelte/easing"
import { fade } from 'svelte/transition'

let buttonVisible = false

onMount(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            buttonVisible = true
        } else {
            buttonVisible = false
        }
    })
})

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}
</script>

{#if buttonVisible}
    <div
        class="fixed bottom-0 right-0 z-50 mb-9 mr-7"
        in:fade="{{ duration: 150 }}"
        out:fade="{{ duration: 150 }}">
        <button
            class="rounded-full bg-main-600 px-3 py-2 font-bold text-white transition-colors hover:bg-main-700"
            on:click="{scrollToTop}">
            <i class="fas fa-chevron-up text-lg"></i>
        </button>
    </div>
{/if}
