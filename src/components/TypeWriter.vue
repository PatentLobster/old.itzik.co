<template>
    <div class="output">
        A
        <span class="writer">{{ typeValue }}</span>
        <span class="cursor" :class="{'typing': typeStatus }">&nbsp;</span>
    </div>
</template>

<script>
    export default {
        name: "TypeWriter",
        data: () => {
            return {
                typeValue: '',
                typeStatus: false,
                typeArray: [
                    "Developer.",
                    "Hacker.",
                    "Maker.",
                    "Gamer.",
                    "Pilot.",
                    "Tech-Junkie.",
                    "Thinker.",
                    "Human.",
                    "Freelancer.",
                    "1337.",
                    "Problem Solver.",
                    "Advisor."
                ],
                typingSpeed: 150,
                erasingSpeed: 50,
                newTextDelay: 250,
                typeArrayIndex: 1,
                charIndex: 0
            }
        },
        methods: {
            typeText() {
                if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                    if (!this.typeStatus)
                        this.typeStatus = true;

                    this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
                    this.charIndex++;
                    this.typeStatus = false;
                    setTimeout(this.typeText, this.typingSpeed);
                } else {
                    this.typeStatus = false;
                    setTimeout(this.eraseText, this.newTextDelay);
                }
            },

            eraseText() {
                if(this.charIndex > 0 ) {
                    if (!this.typeStatus)
                        this.typeStatus = true;
                    this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
                    this.charIndex--;
                    setTimeout(this.eraseText, this.erasingSpeed);
                } else {
                    this.typeStatus = false;
                    this.typeArrayIndex++;
                    if(this.typeArrayIndex >= this.typeArray.length)
                        this.typeArrayIndex = 0;
                    setTimeout(this.typeText, this.newTextDelay);
                    }
                }
            },
        created() {
            setTimeout(this.typeText, this.newTextDelay);
        }

    }


</script>

<style scoped lang="scss">

    .output {
        color: #e83e8c;
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        font-weight: 400;
        font-size: 1.2rem;
        text-align: center;
    }

    span.cursor {
        display: inline-block;
        content: '';
        display: inline-block;
        margin-left: 3px;
        background-color: #e83e8c;
        animation-name: blink;
        animation-duration: 0.5s;
        font-size: 0.8rem;
        animation-iteration-count: infinite;
        /*width: 0.5rem;*/
    }

    span.cursor.typing {
        animation: none;
    }

    @keyframes blink {
        0% {
            opacity: 1;
        }
        49% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

</style>