<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{name}}</p>
        <p>User age: {{userAge}}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
    import {eventBus} from '../main';

    export default {
        props:{
            name: String,
            userAge: Number
        },
        methods: {
            resetName(){
                this.name = 'Max';
                this.$emit('nameWasChanged', this.name)
            }
        },
        created(){
            eventBus.$on('ageWasEdited', (age)=>{
                this.userAge = age;
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
