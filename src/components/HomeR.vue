<template>
<HeaderP />
<h1>Hello {{ name }}, Welcome On Home Page</h1>
<table border="1px" cellpadding="2" cellspacing="1">
    <tr>
        <td>Id</td>
        <td> Name</td>
        <td> Address</td>
        <td> Contact</td>
        <td> Actions</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">

        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.Address}}</td>
        <td>{{item.contact}}</td>
        <td>
            <router-link :to="'/update/'+item.id">update</router-link><br><br>
            <button v-on:click="deleterestaurant(item.id)"> Delete</button>
        </td>
    </tr>
</table>
</template>

<script>
import axios from 'axios';
import HeaderP from './HeaderP.vue'
export default {
    name: 'HomeR',
    data() {
        return {
            name: '',
            restaurants: [],
        }
    },
    components: {
        HeaderP
    },
    methods: {
        async deleterestaurant(id) {
            let result = await axios.delete("http://localhost:3000/restro/" + id);
            if (result.status == 200) {
                this.loadData()
            }
        },
        async loadData() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name
            if (!user) {
                this.$router.push({
                    name: 'SignUp'
                })
            }
            let result = await axios.get("http://localhost:3000/restro");
            //console.warn(result);
            this.restaurants = result.data
            //console.log(result.data)
        }
    },
    mounted() {
        this.loadData()
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
</style>
