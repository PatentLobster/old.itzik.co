<template>
    <div class="penguin">
        <g-image src="@/assets/img/penguin.gif" :style="style" alt="Penguin"></g-image>
    </div>
</template>

<script>
    export default {
        name: "Penguin",
        data: () => {
            return {
                windowWidth: 0,
                posX: 0,
                direction: 0,
            }
        },
        computed: {
            style () {
                return { transform: 'translateX(' + this.posX + 'px) rotateY('+ this.direction + 'deg)'}
            }
        },
        methods: {
            walk() {
                if(this.windowWidth === 0)
                    this.windowWidth = window.innerWidth;
                if (this.direction === "0") {
                    if (this.posX <= this.windowWidth - 100){
                        this.posX++
                    } else {
                        this.direction = "180";
                    }
                } else {
                    if (this.posX >= 0 ){
                        this.posX--
                    } else {
                        this.direction = "0";
                    }
                }
                requestAnimationFrame(this.walk);
            }
        },
        mounted() {
            this.windowWidth = window.innerWidth;
            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth;
            });
            setTimeout(this.walk, 50);
        }
    }

</script>

<style>

    .penguin {
    text-align: left;
    }
    .penguin img {
        position: relative;
        bottom: -15px;
    }
    /*style="transform: translateX({{this.posX}}) rotateY({{this.direction}}));"*/
</style>