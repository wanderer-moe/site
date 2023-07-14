<script lang="ts">
import Settings from '@/components/UserSettings/Settings.svelte'
export let data

const { user } = data
</script>

<svelte:head>
    <title>Account Settings</title>
</svelte:head>

<!-- scuffed -->
<div class="min-h-screen">
    <div class="px-2 py-24 md:px-12 lg:px-24">
        <div>
            <h1 class="text-2xl font-bold text-white">Account Settings</h1>
            <h2 class="text-xs font-bold text-gray-400 mb-2">
                Manage your account settings, scroll down to save your changes.
            </h2>
            <Settings user="{user}" />
        </div>
    </div>
</div>
