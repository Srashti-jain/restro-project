<template>
<HeaderP />
<h1>Hello, For Update Restaurant</h1>
<form class="update">
    <input type="text" placeholder="enter restro name" v-model="restaurant.name" name="name" />
    <input type="text" placeholder="enter address" v-model="restaurant.address" name="address" />
    <input type="tele" placeholder="enter Contact no." v-model="restaurant.contact" name="contact" />
    <button type="button" v-on:click="updaterestaurant">Update Restaurant</button>
</form>
</template>

<script>
import HeaderP from './HeaderP.vue'
import axios from 'axios'
export default {
    name: 'UpdateR',
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
    methods:{
        async updaterestaurant()
        {
            // console.warn("function called",this.restaurant)
             const result= await axios.put("http://localhost:3000/restro/"+this.$route.params.id,{
               name:this.restaurant.name,
               address:this.restaurant.address,
               contact:this.restaurant.contact
            });
            if(result.status==200)
            {
                this.$router.push({
                name: 'HomeR'
            }) 
            }
        }
    },
    async  mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({
                name: 'SignUp'
            })
        }
        const result= await axios.get("http://localhost:3000/restro/"+this.$route.params.id);
        // console.log(this.$route.params.id)
        // console.warn(result)
        this.restaurant=result.data

    }
};
</script>
