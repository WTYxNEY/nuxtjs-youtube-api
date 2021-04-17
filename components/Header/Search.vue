<template>
  <div class="search-bar">
    <v-icon class="search-icon"> mdi-magnify </v-icon>
    <div class="serach-layout">
      <form @submit="onSubmit">
        <input
          class="search-input"
          type="text"
          name="search"
          v-model="search"
        />
      </form>
    </div>
    <v-icon class="closed-icon">mdi-close-circle-outline</v-icon>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: ''
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
      this.$emit('sendSearch', this.search)
    },
  },
}
</script>

<style scoped>
.search-bar {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  border: 1px solid #ecebed;
  box-sizing: border-box;
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  width: 100%;
  padding: 14px 0;
  width: 90%;
  margin-left: 3%;
}
.serach-layout {
  width: 100%;
}
input {
  width: 100%;
  border: none;
  font-size: 15px;
  color: #3f3356;
}
input:focus {
  outline: none;
}
.search-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #1a051d;
  padding: 0 16px;
}
.search-icon svg {
  font-size: 24px;
  cursor: pointer;
}
.closed-icon {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #ece9f1;
  padding: 0 16px;
}
.closed-icon svg {
  font-size: 16px;
  cursor: pointer;
}
@media only screen and (max-width: 960px) {
  .search-bar {
    width: 95%;
    margin-left: 3%;
  }
}
</style>
