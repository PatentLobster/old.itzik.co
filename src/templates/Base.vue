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
            excerpt
        }
    }
</page-query>

<script>
    export default {
        name: "Base.vue",
        title: "this.$page.markdownPage.title",
        metaInfo() {
            return {
                title: this.$page.markdownPage.title
            }
        }
    }
</script>
<style scoped type="scss">


</style>