<script>
    // tailwindcss
    import "../app.css";
    // onMount
    import { onMount } from "svelte";
    // account store
    import account from "$lib/accountStore";

    // when our layout is rendered
    onMount(async () => {
        // todo: account login code
    });
</script>

<div class="flex flex-col bg-sky-800 w-screen min-h-[100vh]">
    <slot />
</div>