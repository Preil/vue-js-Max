<template>
    <div class="container">
        <form>
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <h1>File a Complaint</h1>
                    <hr>
                    <div class="form-group">
                        <label for="email">Mail</label>
                        <input type="text"
                               id="email"
                               class="form-control"
                               v-model="userData.email"> // to bind data in field to variable
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password"
                               id="password"
                               class="form-control"
                               v-model="userData.password">

                    </div>

                    <div class="form-group">
                        <label for="age">Age</label>
                        <input type="number"
                               id="age"
                               class="form-control"
                               v-model="userData.age">
                    </div>
                    <hr>
                </div>
                <div class="row">
                    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                        <div class="panel panel-default">
                            <div class="panel-heading">
                                <h4>Your Data</h4>
                            </div>
                            <div class="panel-body">
                                <p>Mail: {{ userData.email }} </p>
                                <p>Password: {{ userData.password }} </p>
                                <p>Age: {{ userData.age }}</p>
                                <p>Message:</p>
                                <p><strong>Send Mail?</strong></p>
                                <ul>
                                    <li></li>
                                </ul>
                                <p>Gender: </p>
                                <p>Priority: </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userData: {
                    email: '',
                    password: '',
                    age: 37
                }
            }
        }
    }
</script>

<style>

</style>
