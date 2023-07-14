<script>
import { getImageResolution } from '$lib/helpers/asset/getImageResolution'
import { bytesToFileSize } from '$lib/helpers/asset/bytesToFileSize'

let imageErrorText = ''
let selectedAvatar = null
let avatarSelected = false

async function uploadAvatar() {
    if (!selectedAvatar) return (imageErrorText = 'No image selected')
    const resolution = await getImageResolution(
        URL.createObjectURL(selectedAvatar.files[0])
    )
    if (!resolution) return (imageErrorText = 'Invalid image')
    const [width, height] = resolution.split(' x ')
    if (width < 500 || width > 1000) {
        return (imageErrorText = `Image width must be between 500 and 1000 pixels, the image you selected is ${width}px wide`)
    }

    if (height < 500 || height > 1000) {
        return (imageErrorText = `Image height must be between 500 and 1000 pixels, the image you selected is ${height}px tall`)
    }

    if (selectedAvatar.files[0].size > 5000000) {
        return (imageErrorText = `Image size must be less than 5mb, the image you selected is ${bytesToFileSize(
            selectedAvatar.files[0].size
        )}`)
    }

    avatarSelected = true
}

export let user
</script>

<div class="bg-main-500 border-2 border-main-400 rounded-md text-white p-2">
    <p class="text-lg font-bold">Your Profile Picture</p>
    <p class="text-xs text-gray-400">
        Your avatar will be displayed on your profile page, and will be visible
        to other users.
    </p>
    {#if imageErrorText}
        <p class="text-red-100 text-xs mt-2">{imageErrorText}</p>
    {/if}
    <div class="flex flex-row mt-2">
        <div>
            {#if user.avatar_url}
                <img
                    src="{user.avatar_url}"
                    alt="{user.username}'s avatar"
                    class="w-24 h-24 object-contain rounded-md" />
            {:else if avatarSelected}
                <img
                    src="{URL.createObjectURL(selectedAvatar.files[0])}"
                    alt="Your avatar"
                    class="w-24 h-24 object-contain rounded-md" />
            {:else}
                <div class="w-24 h-24 bg-main-400 rounded-md"></div>
            {/if}
        </div>
        <div class="ml-4 my-auto">
            {#if user.avatar_url && !avatarSelected}
                <p class="text-red-100 text-xs">
                    You currently have a profile picture set.
                </p>
            {:else if avatarSelected}
                <p class="text-red-100 text-xs">
                    You have selected a new profile picture, but have not yet
                    saved.
                </p>
            {:else}
                <p class="text-gray-400 text-xs">
                    You currently do not have a profile picture set and are
                    using the default one. You can upload one below.
                </p>
            {/if}
            <div class="mt-4">
                <input
                    type="file"
                    accept="image/*"
                    class="hidden"
                    id="avatar-upload"
                    bind:this="{selectedAvatar}"
                    on:change="{uploadAvatar}" />
                <label
                    for="avatar-upload"
                    class="btn px-2.5 py-2 text-sm cursor-pointer">
                    Upload Profile Picture
                </label>
            </div>
        </div>
    </div>
</div>
