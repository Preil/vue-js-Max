<template>
    <div>
        <p>Another Counter is: {{ doubleCounter }}</p>
        <p>Clicks counted: {{ clicksCounter }} </p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters ([ // this variant allows to create our own computed properties.
                // for using "...", probably, need to install component: "npm install --save-dev babel-preset-stage-2"
                // with some .babelrc presets.
                'doubleCounter',
                'clicksCounter'
            ])
        }
    }
</script>