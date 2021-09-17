<template>
  <div>
    <heroSection></heroSection>
    <trendingPost></trendingPost>
  </div>
</template>



<script>
import heroSection from '../components/heroSection.vue'
import navbar from '../components/navbar'
import trendingPost from '../components/trendingPost.vue'

export default {
  name:'home',
  components:{
    heroSection,trendingPost,navbar
  }
}
</script>





