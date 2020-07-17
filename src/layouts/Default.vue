<template>
    <div class="layout" dark>
        <Header />
        <transition name="fade" appear >
        <div class="container">
                <slot />
        </div>
        </transition>
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
    .fade-enter-active {
        animation: fadeInUpBig; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 0.5s; /* don't forget to set a duration! */
    }
    .fade-leave-active {
        animation: fadeOutDown; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 0.5s; /* don't forget to set a duration! */
    }

    /*.fade-enter {*/
    /*    opacity: 0;*/
    /*}*/




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