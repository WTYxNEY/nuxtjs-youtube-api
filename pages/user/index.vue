<template>
  <div>
    <div class="user-head-layout">
      <Head />
    </div>
    <Profile />
    <Content />
  </div>
</template>

<script>
import Head from '@/components/User/Head'
import Profile from '@/components/User/Profile'
import Content from '@/components/User/content/Content'
export default {
  layout: 'mainLayout',
  components: {
    Head,
    Profile,
    Content,
  },
}
</script>

<style scoped>
@media only screen and (max-width: 960px) {
  .user-head-layout {
    display: none;
  }
}
</style>
