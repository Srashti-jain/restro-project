<template>
<img class="logo" src="../assets/restro-logo.jpg" />
<h1> Log In</h1>
<div class="login">
    <input type="text" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button v-on:click="login">Log In</button>
    <p>
        <router-link to="/sign-up">Sign Up </router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        async login() {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
            );
            if (result.status==200 && result.data.length > 0) 
            {
                // alert("sign up done");
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({name: 'HomeR'})
            }

        }
    },
    mounted()
    {
        let user=localStorage.getItem('user-info');
        if(user)
        {
            this.$router.push({name: 'HomeR'})
        }

    }
    
}
</script>
