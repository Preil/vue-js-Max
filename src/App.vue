<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Vuex</h1>
                <app-result></app-result>
                <app-another-result></app-another-result>
                <hr>
                <app-counter></app-counter>

            </div>
        </div>

    </div>
</template>

<script>

    import Result from './components/Result.vue'
    import AnotherResult from './components/AnotherResult.vue'
    import Counter from './components/Counter.vue'

    export default {
        components: {
            appResult: Result,
            appAnotherResult: AnotherResult,
            appCounter: Counter
        }
    }
</script>

<style>

</style>