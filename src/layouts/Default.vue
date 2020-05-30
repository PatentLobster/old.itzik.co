<template>
    <div class="layout" dark>
        <Header />
        <div class="content">
            <slot />
        </div>
        <Footer />
    </div>
</template>



<style>

    .layout {
        /*max-width: 760px;*/
        margin: 0 auto;
        text-align: center;
    }


</style>


<script>
    import Header from "./partials/Header";
    import Footer from "./partials/Footer";

    export default {
        props: ['primary-bg'],
        components: {Header, Footer},
        computed: {
            mainClass() {
                let classes = [];
                if (this.primaryBg) classes.push('main--bg-teritary');
                return classes
            }
        }
    }


</script>