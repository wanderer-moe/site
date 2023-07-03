<script lang="ts">
import { fade } from 'svelte/transition'
import { cubicOut, quintOut } from 'svelte/easing'
import {
    checkEmail,
    checkPassword,
    checkUsername,
} from '$lib/helpers/auth/account/check'

// TODO: signup logic in +page.server.ts

let formData = {
    username: '',
    email: '',
    password: '',
    verifyPassword: '',
}

let checks = {
    username: false,
    email: false,
    password: false,
    verifyPassword: false,
}
</script>

<svelte:head>
    <title>Sign Up</title>
</svelte:head>

<div class="min-h-screen">
    <div class="px-2 py-24 md:px-12 lg:px-24">
        <div
            class="mx-auto my-4 w-full rounded-md bg-main-500 p-3 text-gray-400 transition-all md:w-2/3 lg:w-1/2">
            <div class="text-center">
                <h1 class="text-xl font-bold text-white">Sign Up</h1>
                <h2 class="text-sm">
                    Already have an account? <a
                        href="/login"
                        class="text-white hover:underline">Log In</a>
                </h2>
            </div>
            <div class="mt-4">
                <form>
                    <div class="flex flex-col gap-y-2">
                        <div class="flex flex-col">
                            <label for="username" class="text-white"
                                >Username</label>
                            <input
                                type="text"
                                bind:value="{formData.username}"
                                on:change="{() =>
                                    (checks.username = checkUsername(
                                        formData.username
                                    ))}"
                                name="username"
                                id="username"
                                class="rounded-md bg-main-700 p-1.5 text-white transition hover:ring-2 hover:ring-main-300 focus:outline-none focus:ring-2 focus:ring-main-300"
                                placeholder="username" />
                        </div>
                        <div class="flex flex-col">
                            <label for="email" class="text-white"
                                >Email Address</label>
                            <input
                                type="email"
                                bind:value="{formData.email}"
                                on:change="{() =>
                                    (checks.email = checkEmail(
                                        formData.email
                                    ))}"
                                name="email"
                                id="email"
                                class="rounded-md bg-main-700 p-1.5 text-white transition hover:ring-2 hover:ring-main-300 focus:outline-none focus:ring-2 focus:ring-main-300"
                                placeholder="email@domain.com" />
                        </div>
                        <div class="flex flex-col">
                            <label for="password" class=" text-white"
                                >Password</label>
                            <input
                                type="password"
                                bind:value="{formData.password}"
                                on:change="{() =>
                                    (checks.password = checkPassword(
                                        formData.password
                                    ))}"
                                name="password"
                                id="password"
                                class="rounded-md bg-main-700 p-1.5 text-white transition hover:ring-2 hover:ring-main-300 focus:outline-none focus:ring-2 focus:ring-main-300"
                                placeholder="••••••••••" />
                            {#if !checks.password && formData.password.length > 0}
                                <p class="mt-1 text-xs text-red-200">
                                    Password must be 8 characters, have a
                                    number, symbol, lowercase and uppercase
                                    letter.
                                </p>
                            {/if}
                        </div>
                        {#if checks.password}
                            <div
                                class="flex flex-col"
                                in:fade|global="{{
                                    easing: quintOut,
                                    duration: 750,
                                }}"
                                out:fade|global="{{
                                    easing: cubicOut,
                                    duration: 300,
                                }}">
                                <label
                                    for="verifyPassword"
                                    class="text-sm text-white"
                                    >Confirm Password</label>
                                <input
                                    type="password"
                                    bind:value="{formData.verifyPassword}"
                                    on:change="{() =>
                                        (checks.verifyPassword =
                                            formData.password ===
                                            formData.verifyPassword)}"
                                    name="verifyPassword"
                                    id="verifyPassword"
                                    class="rounded-md bg-main-700 p-1.5 text-white transition hover:ring-2 hover:ring-main-300 focus:outline-none focus:ring-2 focus:ring-main-300"
                                    placeholder="Confirm password" />
                            </div>
                        {/if}
                        <div class="flex flex-col">
                            <button
                                type="submit"
                                disabled="{Object.values(checks).every(
                                    (check) => !check
                                )}"
                                on:click="{() => console.log('clicked')}"
                                class="btn mt-4 px-2 py-1 transition
                            {Object.values(checks).every((check) => check)
                                    ? ''
                                    : 'cursor-not-allowed opacity-50'}"
                                >Sign Up</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
