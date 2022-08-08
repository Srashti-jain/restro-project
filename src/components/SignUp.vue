<template>
<img class="logo" src="../assets/restro-logo.jpg" />
<h1>Sign Up</h1>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter name" />
    <input type="text" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <button v-on:click="signup">Sign Up</button>
    <p> Already have an Account
    <router-link to="/LogIn">Login </router-link> 
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: {
        async signup() {
            console.warn("signup", this.name, this.email, this.password)
            let result = await axios.post("http://localhost:3000/user", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            console.warn(result);
            if (result.status==201) 
            {
                // alert("sign up done");
                localStorage.setItem("user-info", JSON.stringify(result.data))
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


