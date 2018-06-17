<template>
    <div>
        <h3>User id: {{$route.params.id}} Edit </h3>
        <p>Locale: {{$route.query.locale}}.</p>
        <p>Analytics: {{$route.query.q}}.</p>
        <hr>
        <button class="btn btn-primary" @click="confirmed=true">Confirm</button>
        <h3 v-if="confirmed">Confirmed!!!</h3>
        <div style="height: 200px"></div>
        <p id="data">Some tex below.</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                confirmed: false
            }
        },
        beforeRouteLeave (to, from, next) {
            if(this.confirmed){
                next();
            } else {
                if (confirm('Are you sure?')){
                    next();
                } else {
                    next(false);
                }
            }
        }
    }

</script>