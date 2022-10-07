<template>
    <div>
        <header-comp/>
        <h1>Welcome! {{ name }}</h1>
        <table id="customers">
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>CONTACT</th>
                <th>ADDRESS</th>
                <th>Actions</th>
            </tr>
            <tr v-for="item in restaurant" :key="item.id">
            <td>{{item.id}}</td>
             <td>{{item.name}}</td>
              <td>{{item.contact}}</td>
              <td>{{item.address}}</td>
              <td><router-link :to="'/UpdateRest/'+item.id">Update</router-link>
              <button v-on:click="deleteRest(item.id)">Delete</button>
              </td>
            </tr>
        </table>
    </div>
</template>
<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios'
export default {
   name: 'HomeComp',
   components:{
       HeaderComp
   },
   data () {
       return {
           name:'',
           restaurant:[]
       }
   },
  methods: {
      async deleteRest(id) {
        console.warn(id)  
         let result = await axios.delete( 
             'http://localhost:3000/restaurant/' + id
         );
         console.warn(result.status)
         if(result.status === 200) {
             alert("record deleted!")
             this.loadData();

         }
      },
     async loadData() {
                   let user=localStorage.getItem('user-info')
         this.name = JSON.parse(user).name
         if(!user) {
             this.$router.push({name:'SignUp'})
         }
         let result = await axios.get( 
             'http://localhost:3000/restaurant'
         );
         console.warn(result);
         this.restaurant = result.data;
      }
  },
   async  mounted(){
         let user=localStorage.getItem('user-info')
         this.name = JSON.parse(user).name
         if(!user) {
             this.$router.push({name:'SignUp'})
         }
         let result = await axios.get( 
             'http://localhost:3000/restaurant'
         );
         console.warn(result);
         this.restaurant = result.data;
    }
}
</script>
<style>
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

</style>
