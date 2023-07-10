<script lang="ts">
export let data

const { user } = data
</script>

<svelte:head>
    <title>Account Settings</title>
</svelte:head>

<!-- scuffed -->
<div class="min-h-screen">
    <div class="px-2 py-24 md:px-12 lg:px-24">
        <!-- TODO: create onboarding, settings, etc components -->
        <div>
            <h1 class="text-2xl font-bold text-white mb-2">Account Settings</h1>

            <h2 class="text-xl font-bold text-white mb-1">Profile Settings</h2>
            <div class="grid gap-4 md:grid-cols-2"></div>
        </div>
    </div>
</div>
