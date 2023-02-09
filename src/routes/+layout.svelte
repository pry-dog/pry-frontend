<script>
    // deps
    import "../app.css";
    import { onMount } from "svelte";
    import account from "$lib/accountStore";
    import request from "$lib/request";

    // when our layout is rendered
    onMount(async () => {
        // todo: account login code
        window.request = request;
    });
</script>

<div class="flex flex-col bg-sky-800 w-screen min-h-[100vh]">
    <slot />
</div>