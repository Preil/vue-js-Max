<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>
                <br>
                <p>Another Counter:</p>
                <app-another-counter></app-another-counter>

                <br>
                <hr>
                <input type="text" v-model="value">
                <p>{{value}}</p>

            </div>
        </div>

    </div>
</template>

<script>

    import Result from './components/Result.vue';
    import AnotherResult from './components/AnotherResult.vue';
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';

    export default {
        computed: {
            value: {
                get() {
                    return this.$store.getters.value;
                },
                set(value) {
                    this.$store.dispatch('updateValue', value);
                }
            }
        },
        components: {
            appResult: Result,
            appAnotherResult: AnotherResult,
            appCounter: Counter,
            appAnotherCounter: AnotherCounter

        }
    }
</script>

<style>

</style>