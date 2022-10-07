<template>
    <div>
        <h1>Login Page</h1>
        <img class="logo" src="../assets/rest.jpg">
        <div class="register">
          
            <input type="text" v-model="email" placeholder="Enter email"/><br/><br/>
            <input type="password" v-model="password" placeholder="Enter password"/><br/><br/>
            <button v-on:click="login">Login</button>
            <p>
                <router-link to="/SignUp">SignUp</router-link>
            </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
 name: 'LoginComp',
 data () {
     return {
         email:'',
         password:''
     }
 },
 mounted() {
     let user = localStorage.getItem('user-info');
     if(user) {
         this.$router.push({name : 'HomeComp'})
     }
 },
methods:{
        async login () {
            let result = await axios.get(
                `http://localhost:3000/user?email=${this.email}&password=${this.password}`
                )
          
            if(result.status==200 && result.data.length>0)
            {
                alert("Login done!");
            }
            localStorage.setItem("user-info",JSON.stringify(result.data[0]));
            this.$router.push({name:'HomeComp'})
        

        }
     }
    
}
</script>
