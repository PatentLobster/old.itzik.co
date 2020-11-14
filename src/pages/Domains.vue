<template>
<Layout>
         <h1 class="page-title">Domains</h1>
    <p>  Looking for a domain?
        Contact for more information.
    </p>
    <div class="flex">
        <div v-for="domain in domains" class="domain-card">
            <span>
                <a v-bind:href="`https://${domain}/`">
                    {{domain}}
                </a>
            </span>
        </div>

    </div>
</Layout>
</template>

<script>

    export default {
        name: "Domains",
        components: { },
        data: () => {
            return {
                'domains': [
                    'dpkg.dev',
                    'lets.rest',
                    'letme.surf',
                    'grust.io',
                    'brust.io',
                    'ncat.io',
                    'kwad.io',
                    'issh.io',
                    'ssh.vin',
                    'ssh.fyi',
                    'ssh.bar',
                    'may.bar',
                    'lobste.ru',
                    'vult.me',
                    'vult.co.il',
                    'cykab.lat'
                ]
            }
        }
    }
</script>

<style scoped type="scss">


    .flex{

        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .domain-card {
        flex: 1 0 21%; /* explanation below */
        margin: 1rem;
        background-color: var(--bg-secondary);
        border: 1px solid var(--border-color);
        box-shadow: var(--bshadow);
        padding: 1rem;
        border-radius: 99vw;

    }

    .domain-card span {
        font-size: 3rem;

    }

</style>