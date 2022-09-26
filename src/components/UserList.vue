<template>
    <div class="container mt-3">
        <div class="row">
            <div class="col">
                <p class="h3 text-success">User List</p>
                <p class="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias aliquam aliquid
                    aperiam
                    dignissimos dolor
                    doloribus dolorum est facere ipsam, laborum molestiae molestias numquam, quis tempore ut, veritatis
                    voluptates
                    voluptatum.</p>
            </div>
        </div>
    </div>

    <div v-if="userState.loader"  class="container">
        <div class="row">
            <div class="col">
                <Spinner />
            </div>
        </div>
    </div>

    <div v-if="!userState.loader && userState.errorMessage"  class="container">
        <div class="row">
            <div class="col">
                <p class="fw-bold text-danger">{{userState.errorMessage}}</p>
            </div>
        </div>
    </div>

    <div  v-if="!userState.loader && userState.users.length > 0" class="container">
        <div class="row">
            <div class="col">
                <table class="table table-hover text-center table-striped">
                    <thead class="bg-secondary text-white">
                        <tr>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Company</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user, index) in userState.users" :key="index">
                            <td>{{user.id}}</td>
                            <td>{{user.name}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.website}}</td>
                            <td>{{user.company.name}}</td>
                            <td>{{user.address.city}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


<script>
import Spinner from '../components/Spinner.vue'
import { mapGetters } from 'vuex';

export default {
    name: "UserListComponet",
    components: {
        Spinner
    },

    methods: {

        getUsers() {
            this.$store.dispatch("getUsers")
        }

    },
    created() {
        this.getUsers();
    },
    computed: mapGetters({
        userState: "getUserState"
    })
}
</script>