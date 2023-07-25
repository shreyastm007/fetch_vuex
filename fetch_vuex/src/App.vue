<template>
<!-- <h3> users </h3> -->
<h3> Fetch from Api</h3>
<ul v-for="user in usersFromStore" :key="user.id">
  <li> {{user.name}}</li>
</ul>


</template>

<script>


export default {
  computed:{
    usersFromStore(){
      return this.$store.state.userData
    }

  },

  
     mounted() {
      this.$store.dispatch({type:'fetchData'})
        },
   
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
