<script>
let userDropdownVisible = false

export let user
</script>

<!-- NOTE: THIS IS TEMPORARY AND SCUFFED I'M SORRY -->
<div
    class="text-white text-sm"
    on:keypress="{() => (userDropdownVisible = !userDropdownVisible)}"
    on:click="{() => (userDropdownVisible = !userDropdownVisible)}">
    {user?.username}
    {userDropdownVisible ? '▲' : '▼'}
</div>

{#if userDropdownVisible}
    <div class="z-80 text-white">
        <p class="text-sm">Logged in as {user?.username}</p>
        <p class="text-sm">Email: {user?.email}</p>
    </div>
{/if}
