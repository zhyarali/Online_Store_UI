<template>
  <div id="app">  
     <navbar></navbar>                                       
    <router-view/>
     <appFooter></appFooter>
  </div>
</template>

<script>
import navbar from './components/navbar'
import appFooter from './components/appFooter.vue'


export default {
  name:'App',
  components:{
    navbar,appFooter
  }
}




</script>


<style>
  @import './assets/style.css';
</style>
