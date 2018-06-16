<template>
    <div>
        <h1>User component</h1>
        <p>Some text here</p>
        <br>
        <p>Loaded ID: {{ id }}</p>
        <button class="btn btn-primary" @click="goToHomePage">Back to Homepage</button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id: this.$route.params.id
            }
        },
        watch: {
            // watcher is needed to control route changes, because if we stay at the same component,
            // Vue doesn't reload it.
            '$route' (to, from) {
                this.id = to.params.id;
            }
        },
        methods: {
            goToHomePage() {
                this.$router.push('/')
            }
        }
    }
</script>