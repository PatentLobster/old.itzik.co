<template>
<div class="container">
    <div class="row rskill">
        <div class="col-lg-4 col-md-12 cskill">
            <i class="iskill fa fa-code"></i>
            <h3 class="hskill"> Dev Skills </h3>
            <slot name="dev">

            </slot>
        </div>
		<div class="col-lg-4 col-md-12 cskill">
        	<i class="iskill fa fa-shield"></i>
            <h3 class="hskill"> Security Skills </h3>
            <slot name="sec">

            </slot>

        </div>
        <div class="col-lg-4 col-md-12 cskill">
        	<i class="iskill fa fa-flask"></i>
            <h3 class="hskill"> Other Skills </h3>
            <slot name="etc">

            </slot>
        </div>
    </div>
</div>


</template>

<script>
    export default {
        name: "CoolTable"
    }
</script>

<style scoped>

</style>