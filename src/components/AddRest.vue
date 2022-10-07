<template>
    <div class="register">
        <header-comp/>
        <h1>Add Restaurant Page</h1>
        <form class="add"> 
            <input type="text" name="name" v-model="restaurant.name" placeholder="Enter name"/><br/><br/>
            <input type="text" name=" address" v-model="restaurant.address" placeholder="Enter address"/><br/><br/>
            <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter contacct"/><br/><br/>
            <button type="button" v-on:click="addRest()">Add Restaurant</button>
        </form>
    </div>
</template>
<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios'
export default {
   name: 'AddRest',
   components:{
       HeaderComp
   },
   data() {
       return {
           restaurant:{
               name:'',
               address:'',
               contact:''
           }
       }
   },
    mounted(){
         let user=localStorage.getItem('user-info')
         if(!user) {
             this.$router.push({name:'SignUp'})
         }
    },
    methods: {
       async addRest() {
            console.warn(this.restaurant);
            const result = await axios.post("http://localhost:3000/restaurant",
            {
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact

            }
            );
            console.warn("result",result);
            if(result.status==201) {
                alert("record added!")
                this.$router.push({name:'HomeComp'})
            }

        }
    }
}
</script>
