<template>
       <Layout>
           <h1 class="page-title">{{ $page.markdownPage.title }}</h1>
        <VueRemarkContent />
       </Layout>
</template>

<page-query>
    query ($id: ID){
        markdownPage(id: $id) {
            title
            content
        }
    }
</page-query>

<script>
    export default {
        name: "Base.vue",
    }
</script>
<style scoped type="scss">


</style>