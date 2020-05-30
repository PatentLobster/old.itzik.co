<template>
    <h1 class="logo">
       <g-link to="/">
            Itzik
       </g-link>
    </h1>
</template>

<script>
    export default {
        name: "Logo.vue"
    }
</script>

<style type="scss">
    h1.logo {

    }
    h1.logo a  {
        color: var(--body-color);
        text-decoration: none;
        font-family: 'Gochi Hand', cursive;
        font-size: 7rem;
        text-align: center;
        display: block;
        color: white;
        margin: 0 auto;
        text-decoration: none;
        border: 0;
    }
     h1.logo a:active{
        text-decoration: none;
        color: black;
    }
    h1.logo a:visited {
        color: inherit;
        text-decoration: none;
    }
    h1.logo a:hover {
        cursor: default;
    }
</style>