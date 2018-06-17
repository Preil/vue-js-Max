<template>
    <div>
        <p>Another Counter is: {{ doubleCounter }}</p>
        <p>Clicks counted: {{ clicksCounter }} </p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: mapGetters([ // this is not good variant, because we unable to create own computed property
            'doubleCounter',
            'clicksCounter'
        ])
    }
</script>