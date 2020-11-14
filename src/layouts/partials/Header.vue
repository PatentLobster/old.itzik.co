<template>
    <header class="header">
        <Logo/>
        <nav class="nav">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/domains/">Domains</g-link>
            <g-link class="nav__link" to="/contact/">Contact</g-link>
        </nav>
        <ToggleTheme />
    </header>
</template>

<script>
    import Logo from "./Logo";
    import ToggleTheme from "@/components/ToggleTheme";
    export default {
        name: "Header",
        components: {Logo, ToggleTheme}
    }
</script>

<style>
    .header {
        align-items: center;
        margin-bottom: 2rem;
    }

    .nav__link {
        margin-left: 20px;
    }

    nav {
        /*display: flex;*/
        justify-content: center;
        /*display: block;*/
        text-align: center;
        width: 100%;
        /*border-top: 2px solid;*/
        /*border-top-color: var(--grad);*/

    }

    .active--exact {
        border-bottom: 2px  solid var(--body-color);
    }
</style>