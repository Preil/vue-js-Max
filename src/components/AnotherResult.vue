<template>
    <div>
        <p>Another Counter is: {{ doubleCounter }}</p>
        <p>Clicks counted: {{ clicksCounter }} </p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import * as types from '../store/types'
    export default {
        computed: {
            ...mapGetters ({
                doubleCounter: types.DOUBLE_COUNTER,
                clicksCounter: types.CLICK_COUNTER
            })
        }
    }
</script>