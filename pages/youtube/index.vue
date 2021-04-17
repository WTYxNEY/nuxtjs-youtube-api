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
    <VideosList :videos="videos" />
  </div>
</template>

<script>
import youtubeAPI from '@/api/youtubeAPI'
import VideosList from '@/components/youtube/VideosList'
import Search from '@/components/Header/Search'
import User from '@/components/Header/User'
export default {
  layout: 'mainLayout',
  components: {
    VideosList,
    User,
    Search,
  },
  data() {
    return {
      videos: [],
    }
  },
  mounted() {
    youtubeAPI.get('/search').then((res) => {
      this.videos = res.data.items
    })
  },
  methods: {
    onSearch(search) {
      return youtubeAPI
        .get('/search', {
          params: {
            q: search,
          },
        })
        .then((res) => {
          const fetchData = res.data.items
          this.videos = fetchData
        })
    },
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
