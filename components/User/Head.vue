<template>
    <v-row>
      <v-col md="9" sm="12">
      </v-col>
      <v-col md="3" sm="12">
        <User />
      </v-col>
    </v-row>
</template>

<script>
import User from '@/components/Header/User'
export default {
  components: {
    User,
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

}
</style>
