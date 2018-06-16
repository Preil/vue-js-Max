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
        methods: {
            goToHomePage() {
                this.$router.push('/')
            }
        }
    }
</script>