<template>
  <div class="video-detail-layout">
    <div class="video-item-ifram">
      <iframe
        title="video play"
        :src="`https://www.youtube.com/embed/${video.id}`"
      />
    </div>
    <div class="video-detail-text-layout">
      <div class="video-detail-title">
        <h6>{{ video.title }}</h6>
      </div>
      <div class="video-detail-description">
        <p>{{ video.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.video)
  },
  props: {
    video: {
      type: Object,
    },
  },
}
</script>

<style scoped>
.video-detail-layout {
  margin-top: 43px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 34px 0;
  width: 95%;
}

.video-item-ifram {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.video-item-ifram iframe {
  width: 90%;
  min-height: 458.62px;
  border-radius: 8px;
}

.video-detail-text-layout {
  display: flex;
  flex-direction: column;
  width: 90%;
}
.video-detail-title {
  margin-top: 22px;
  font-size: 14px;
  text-align: left;
  color: #273253;
}

.video-detail-description {
  font-size: 11px;
  margin-top: 8px;
  text-align: left;
  color: #838383;
}
</style>
