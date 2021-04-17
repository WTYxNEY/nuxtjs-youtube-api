<template>
  <div>
    <v-row>
      <v-col md="9" sm="12">
        <Search @sendSearch="onSearch" />
      </v-col>
      <v-col md="3" sm="12">
        <User />
      </v-col>
    </v-row>
    
    <div class="single-video-layout">
      <SingleVideo :video="this.$route.params" />
    </div>

  </div>
</template>

<script>
import Search from '@/components/Header/Search'
import User from '@/components/Header/User'
import SingleVideo from '@/components/youtube/SingleVideo'
export default {
  layout: 'mainLayout',
  components: {
    Search,
    User,
    SingleVideo,
  },
}
</script>

<style scoped>
.col-md-3 {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.single-video-layout {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

@media only screen and (max-width: 960px) {
  .row {
    display: flex;
    flex-direction: column-reverse;
  }
  .col {
    width: 100%;
  }
}
</style>
