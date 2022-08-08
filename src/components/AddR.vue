<template>
<HeaderP />
<h1>Hello, For Adding Restaurant</h1>
<form class="add">
    <input type="text" placeholder="enter restro name" v-model="restaurant.name" name="name" />
    <input type="text" placeholder="enter address" v-model="restaurant.address" name="address" />
    <input type="text" placeholder="enter Contact no." v-model="restaurant.contact" name="contact" />
    <button type="button" v-on:click="addrestaurant">Add New Restaurant</button>
</form>
</template>

<script>
import HeaderP from './HeaderP.vue'
import axios from 'axios'
export default {
    name: 'AddR',
    components: {
        HeaderP
    },
    data() {
        return {
            restaurant: {
                name: '',
                address: '',
                contact: ''
            }
        }
    },
    methods: {
        async addrestaurant() {
            console.warn(this.restaurant)
            const result= await axios.post("http://localhost:3000/restro",{
               name:this.restaurant.name,
               address:this.restaurant.address,
               contact:this.restaurant.contact
            });
            if(result.status==201)
            {
                this.$router.push({
                name: 'HomeR'
            }) 
            }
            console.warn("result",result)
        }

    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }

    }
};
</script>
