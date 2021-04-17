<template>
  <div class="header-user">
    <div class="header-user-text">
      <p>Morning, Watunyu</p>
    </div>
    <nuxt-link to="/user">
      <v-avatar size="40">
        <img
          src="https://i.pinimg.com/originals/e9/80/f7/e980f7be96698681e64bac92221cfb7d.png"
          alt="User"
        />
      </v-avatar>
    </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header-user {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
@media only screen and (max-width: 960px) {
  .header-user {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 20px;
  }
}

</style>
