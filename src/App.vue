<template>
<router-view />
</template>

<script>
// import SignUp from './components/SignUp.vue'

export default {
    name: 'App',
    // components: {
    //     SignUp
    // }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

body {
    padding: 0;
    margin: 0;

}

.logo {
    width: 100px;
}

.register input,
.login input,
.add input,
.update input {
    width: 300px;
    height: 40px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    display: block;
    padding-left: 20px;
    border: 1px solid;
}

.register button,
.login button,
.add button,
.update button {
    width: 220px;
    height: 40px;
    border: 1px solid;
    background-color: brown;
    color: white;
    cursor: pointer;
}
</style>
