<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result :counter="counter"></app-result>
                <hr>
                <app-counter @updated="counter += $event"></app-counter>

            </div>
        </div>

    </div>
</template>

<script>

    import Result from './components/Result.vue'
    import Counter from './components/Counter.vue'

    export default {
        data() {
            return {
                counter: 0
            }
        },
        components: {
            appResult: Result,
            appCounter: Counter
        }
    }
</script>

<style>

</style>