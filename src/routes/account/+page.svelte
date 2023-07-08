<script lang="ts">
export let data

const { user } = data
</script>

<svelte:head>
    <title>Account Settings</title>
</svelte:head>

<!-- scuffed -->
<div class="min-h-screen">
    {#if user.emailVerified === 0}
        <div
            class="mx-auto my-4 w-full rounded-md border-2 border-main-400 bg-main-500 p-3 text-gray-400 md:w-2/3 lg:w-1/2">
            <p class="text-red-100">
                Your email is not verified. Please check your email for a
                verification link.
            </p>
        </div>
    {/if}
    <div class="px-2 py-24 md:px-12 lg:px-24"></div>
</div>
