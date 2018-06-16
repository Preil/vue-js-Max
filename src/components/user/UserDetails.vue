<template>
    <div>
        <h3>Some user details.</h3>
        <p>The User loaded ID: {{ id }}.</p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                id: this.$route.params.id
            }
        }
    }
</script>

