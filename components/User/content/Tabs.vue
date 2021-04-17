<template>
  <div class="tabs-layout">
    <v-row>
      <v-col md="4">
        <div class="tabs-header">
          <div class="tabs-content-active">
            <p>BADGES</p>
          </div>
          <div class="tabs-content">
            <p>STUDYING</p>
          </div>
          <div class="tabs-content">
            <p>COLLECTION</p>
          </div>
        </div>
      </v-col>
      <v-col md="8"></v-col>
    </v-row>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.tabs-layout .col {
  padding: 0;
  margin-top: 33px;
}
.tabs-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 375px;
}
.tabs-content {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}
.tabs-content-active {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}
.tabs-content p {
  color: #d0c9d6;
  padding-bottom: 14px;
}
.tabs-content-active p {
  color: #273253;
  border-bottom: 4px solid #ed5c4d;
  width: 100%;
  text-align: center;
}
</style>
