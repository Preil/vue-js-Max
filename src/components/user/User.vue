<template>
    <div>
        <h1>User component</h1>
        <p>Some text here</p>
        <br>
        <button class="btn btn-primary" @click="goToHomePage">Back to Homepage</button>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {

        methods: {
            goToHomePage() {
                this.$router.push('/')
            }
        }
    }
</script>