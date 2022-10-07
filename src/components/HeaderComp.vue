<template>
 <div class="topnav">
  <router-link  class="active" to="/">Home</router-link>
  <router-link to="/AddRest">Add Restaurant</router-link>
  <a v-on:click="logout" href="#logout">Logout</a>
</div>
</template>
<script>
export default {
    name:'HomeComp',
    methods: {
        logout() {
            console.log("logout")
            localStorage.clear();
            this.$router.push({name:'LoginComp'})
        }
    }
}
</script>
<style>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #04AA6D;
  color: white;
}
</style>
