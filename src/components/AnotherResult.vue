<template>
    <div>
        <p>Another Counter is: {{ counter }}</p>
        <p>Clicks counted: {{ clicks }} </p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: mapGetters({
            counter: 'doubleCounter',
            clicks: 'clicksCounter'
        })
    }
</script>