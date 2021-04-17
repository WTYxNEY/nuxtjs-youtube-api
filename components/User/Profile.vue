<template>
  <v-row>
    <v-col></v-col>
    <v-col>
      <div class="user-profile">
        <v-avatar size="80">
          <img
            src="https://i.pinimg.com/originals/e9/80/f7/e980f7be96698681e64bac92221cfb7d.png"
            alt="User"
          />
        </v-avatar>
        <p>Watunyu Panmun</p>
      </div>
    </v-col>
    <v-col></v-col>
  </v-row>
</template>

<script>
export default {}
</script>

<style scoped>
.user-profile {
  margin-top: 39px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}

</style>
