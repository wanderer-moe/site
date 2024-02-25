<script>
import { fixCasing } from '@/lib/helpers/casing/fixCasing.js'
import { formatTimeAgo } from '@/lib/helpers/timeConvertion/isoFormat.js'
export let game
export let focusedImage
export let handleImageChange
</script>

<a href="/{game.name}">
    <div
        class="relative flex h-40 items-center justify-center overflow-hidden rounded-md bg-cover text-white ring-white/60 transition duration-150 ease-in-out hover:ring focus:ring"
        style="background-image: url('https://cdn.wanderer.moe/cdn-cgi/image/width=700,height=340,quality=75/{game.name}/cover.png'); background-position: 50% 20%;"
        on:mouseover="{() => {
            if (focusedImage !== game.name) {
                handleImageChange(game.name)
            }
        }}"
        on:focus="{() => {
            if (focusedImage !== game.name) {
                handleImageChange(game.name)
            }
        }}">
        <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/60 to-black/50">
        </div>
        <div class="align-center absolute">
            <p class="mt-2 text-center text-3xl font-bold text-white">
                {fixCasing(game.name)}
            </p>
            <p class="text-center text-white">
                Updated {formatTimeAgo(game.lastUploaded)}
            </p>
        </div>
    </div>
</a>
