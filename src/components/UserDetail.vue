<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{name}}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    export default {
        props:['name'],
        methods: {
            resetName(){
                this.name = 'Max';
                this.$emit('nameWasChanged', this.name)
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
