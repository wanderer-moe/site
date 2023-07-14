<script lang="ts">
import Pronouns from '@/components/UserSettings/Pronouns.svelte'
import Bio from '@/components/UserSettings/Bio.svelte'
import AdvancedSettings from '@/components/UserSettings/AdvancedSettings.svelte'
export let user
</script>


<div>
    <div class="grid grid-cols-1 gap-3">
        <Bio user="{user}" />
        <Pronouns user="{user}" />
    </div>
    <AdvancedSettings user="{user}" />
</div>
 