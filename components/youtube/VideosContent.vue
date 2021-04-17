<template>
  <v-col>
    <nuxt-link
      :to="`/youtube/${this.id}/${this.title}/${this.description}`"
      
    >
      <v-card class="mx-auto" width="320" height="344">
        <div class="img-flex">
          <v-img
            :src="imageSrc"
            height="159px"
            width="290"
            class="img-content"
          ></v-img>
        </div>
        <v-card-title>
          <h6>{{ title.slice(0, 25) + '...' }}</h6>
        </v-card-title>
        <v-card-subtitle>
          <p>{{ description.slice(0, 300) + '...' }}</p>
        </v-card-subtitle>
      </v-card>
    </nuxt-link>
  </v-col>
</template>

<script>
export default {
  created() {},
  props: {
    id: {
      type: Object,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    imageSrc: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
.col {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.video-content {
  height: 360px;
}
h6 {
  font-size: 14px;
}
a {
  text-decoration: none;
}
.v-sheet.v-card {
  border-radius: 8px;
}
.img-flex {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px;
}
.img-content {
  border-radius: 8px;
}
</style>
