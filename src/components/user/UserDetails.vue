<template>
    <div>
        <h3>Some user details.</h3>
        <p>The User loaded ID: {{ id }}.</p>
        <br>
        <router-link
                tag="button"
                class="btn btn-primary"
                :to="{name:'userEdit', params: {id}, query: {locale: 'en', q: 100}, hash: '#data'}">Edit</router-link>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                id: this.$route.params.id
            }
        },
        beforeRouteEnter (to, from, next) {
            if (true) { // Can check here User authentication?
                console.log('beforeRouteEnter')
                next();
            } else {
                next(false);
            }
//            this.id - doesn't work, to access id we use next construction;
//            next(vm =>{
//                vm.id;
//            })  - this construction should be used if we needed to access data from this route component.
//            Because Vue doesn't create component at all, if next doesn't get true.
        }
    }
</script>

