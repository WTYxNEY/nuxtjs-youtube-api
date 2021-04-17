<template>
  <div>
    <v-row>
      <v-col md="9" sm="12">
        <Search />
      </v-col>
      <v-col md="3" sm="12">
        <User />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Search from './Search'
import User from './User'
export default {
  components: {
    Search,
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
  .row {
      display: flex;
    flex-direction: column-reverse;
  }
  .col {
      width: 100%;
  }
}
</style>
