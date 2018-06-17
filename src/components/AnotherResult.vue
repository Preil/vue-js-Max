<template>
    <div>
        <p>Another Counter is: {{ counter }}</p>
        <p>Clicks counted: {{ clicks }} </p>
    </div>
</template>

<script>
    export default{
        computed: {
            counter() {
                return this.$store.getters.doubleCounter;
            },
            clicks() {
                return this.$store.getters.clicksCounter;
            }
        }
    }
</script>