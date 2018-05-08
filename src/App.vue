<template>
    <div class="container">

    </div>
</template>

<script>
    import Quote from './components/Quote.vue';
    import QuoteGrid from './components/QuoteGrid.vue';

    export default {
        data: function(){
            return {
                quotes: [
                    'Just a Quote to see something'
                ],
                maxQuotes: 10
            }
        },
        components: {
            appQuoteGrid: QuoteGrid
        }
    }
</script>

<style>

</style>
