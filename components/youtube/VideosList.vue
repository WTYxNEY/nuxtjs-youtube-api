<template>
  <v-row>
    <VideosContent
      v-for="video in videos"
      :key="video.id.videoId"
      :id="video.id.videoId"
      :title="video.snippet.title"
      :imageSrc="video.snippet.thumbnails.medium.url"
      :description="video.snippet.description"
    />
  </v-row>
</template>

<script>
import VideosContent from './VideosContent'
export default {
  components: {
    VideosContent,
  },
  props: {
    videos: {
      type: [],
      required: false,
    },
  },
}
</script>

<style scoped>
.row {
  margin-top: 20px;
}
</style>
