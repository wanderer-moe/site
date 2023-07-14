<script lang="ts">
import Pronouns from '@/components/UserSettings/Pronouns.svelte'
import Bio from '@/components/UserSettings/Bio.svelte'
import AdvancedSettings from '@/components/UserSettings/AdvancedSettings.svelte'
import Avatar from '@/components/UserSettings/Avatar.svelte'
export let user
</script>

<div>
    <div class="grid grid-cols-1 gap-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Avatar user="{user}" />
        </div>
        <Pronouns user="{user}" />
        <Bio user="{user}" />
    </div>
    <AdvancedSettings user="{user}" />
</div>
