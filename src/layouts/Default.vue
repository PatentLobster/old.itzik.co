<template>
    <div class="layout" dark>
        <Header />
        <div class="content">
            <slot />
        </div>
        <Penguin />
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
    import Penguin from "../components/Penguin";

    export default {
        props: ['primary-bg'],
        components: {Penguin, Header, Footer},
        computed: {
            mainClass() {
                let classes = [];
                if (this.primaryBg) classes.push('main--bg-teritary');
                return classes
            }
        }
    }


</script>