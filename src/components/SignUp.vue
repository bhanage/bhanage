<template>
    <div>
        <img class="logo" src="../assets/rest.jpg">
        <h1>SignUp</h1>
        <div class="register">
          
            <input type="text" v-model="name" placeholder="Enter name"/><br/><br/>
           
            <input type="text" v-model="email" placeholder="Enter email"/><br/><br/>
          
            <input type="password" v-model="password" placeholder="Enter password"/><br/><br/>
            <button v-on:click="signup">Sign Up</button>
            <p>
                <router-link to="/LoginComp">Login</router-link>
            </p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            name: '',
            email:'',
            password:''
        }
    },
    methods: {
        async signup(){
            
            console.warn(this.name,this.email,this.password)
            let result= await axios.post("http://localhost:3000/user",{
                    email:this.email,
                    name:this.name,
                    password:this.password

            });
            console.warn(result);
            if(result.status==201)
            {
                alert("Signup done!");
            }
            localStorage.setItem("user-info",JSON.stringify(result.data));
            this.$router.push({name:'HomeComp'})
        }
    },
    mounted(){
         let user=localStorage.getItem('user-info')
         if(user) {
             this.$router.push({name:'HomeComp'})
         }
    }
}
</script>
