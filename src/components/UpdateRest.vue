<template>
    <div class="register">
        <header-comp/>
        <h1>Update Restaurant Page</h1>
       
        <form class="add"> 
            <input type="text" name="name" v-model="restaurant.name" placeholder="Enter name"/><br/><br/>
            <input type="text" name=" address" v-model="restaurant.address" placeholder="Enter address"/><br/><br/>
            <input type="text" name="contact" v-model="restaurant.contact" placeholder="Enter contacct"/><br/><br/>
            <button type="button" v-on:click="updateRest()">Update Restaurant</button>
        </form>
    </div>
</template>
<script>
import HeaderComp from './HeaderComp.vue'

import axios from 'axios'
export default {
   name: 'UpdateRest',
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
   async mounted(){
         let user=localStorage.getItem('user-info')
         if(!user) {
             this.$router.push({name:'SignUp'})
         }
         const result = await axios.get(`http://localhost:3000/restaurant/${this.$route.params.id}`)
         console.warn(result.data)
         this.restaurant = result.data
    },
    methods: {
     async updateRest() {
              const result = await axios.put(`http://localhost:3000/restaurant/${this.$route.params.id}`,
            
            {
                name:this.restaurant.name,
                address:this.restaurant.address,
                contact:this.restaurant.contact

            }
            );
            console.warn("result",result);
            if(result.status==200) {
                alert("record updated!")
                this.$router.push({name:'HomeComp'})
            }
                // console.warn("updated",this.restaurant);
        }
    }
}
</script>
