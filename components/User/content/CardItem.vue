<template>
  <v-col md="6" sm="12" xs="12">
    <v-card class="card-detail-layout">
      <div class="card-detail-img">
        <v-img :src="image" height="60px" width="60px"></v-img>
      </div>
      <v-card-text>
        <h6>{{ title }}</h6>
        <p>{{ detail }}</p>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script>
export default {
  created() {
    // console.log('img ===>', image)
  },
  props: {
    image: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: false,
    },
    detail: {
      type: String,
      required: false,
    },
  },
}
</script>

<style scoped>
.card-detail-layout {
  background: #ffffff;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  padding: 14px 0;
}
.card-detail-img {
  margin-right: 43px;
  margin-left: 30px;
}
h6{
    font-size: 16px;
}
p {
    font-size: 10px;
}

@media only screen and (max-width: 960px) {
    .card-detail-layout {
        margin: 0 10px
    }
}
</style>
