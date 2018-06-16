<template>
    <div>
        <h3>Some user details.</h3>
        <p>The User loaded ID: {{ id }}.</p>
        <br>
        <router-link
                tag="button"
                class="btn btn-primary"
                :to="'/user/'+ this.id + '/edit'">Edit</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        }
    }
</script>

