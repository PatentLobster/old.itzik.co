<template>
   <g-link to="/">
    <h1 class="logo">Itzik</h1>
   </g-link>
</template>

<script>
    export default {
        name: "Logo.vue"
    }
</script>

<style type="scss">
    h1.logo {
        font-family: 'Gochi Hand', cursive;
        font-size: 7rem;
        text-align: center;
        display: block;
        color: white;
        margin: 0 auto;
    }
    a h1.logo {
        color: var(--body-color);
        text-decoration: none;
    }
    h1.logo a:active{
        text-decoration: none;
        color: black;
    }
    h1.logo a:visited{
        color: inherit;
        text-decoration: none;
    }
</style>