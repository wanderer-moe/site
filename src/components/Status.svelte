<script>
import { onMount } from 'svelte'
import { writable } from 'svelte/store'

const responseColours = {
    true: 'text-green-300',
    false: 'text-red-300',
    unknown: 'text-yellow-100',
}

const successText = {
    true: "Everything's Operational",
    false: 'Degraded Performance',
    unknown: 'Checking API',
}

const success = writable('unknown')

onMount(async () => {
    const response = await fetch('https://api.wanderer.moe/')
    const data = await response.json()
    success.set(data.success)
})
</script>

<a href="https://status.wanderer.moe/">
    <div
        class="mt-4 flex w-full items-center rounded-xl p-2 text-sm transition-colors duration-150 hover:cursor-pointer hover:bg-main-600">
        <span class="mr-2"> Status: </span>
        <span class="{responseColours[$success]} transition-colors">
            <i class="fas fa-circle"></i>
            {successText[$success]}
        </span>
    </div>
</a>
