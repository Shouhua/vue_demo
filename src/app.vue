<template>
  <div>
    <div class="nav">
      <button class="nav__dashboard" @click="toDashboard">Dashboard</button>
      <button class="nav__about" @click="toAbout">About</button> 
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    toDashboard: function() {
      this.$router.push({
        path: '/dashboard'
      });
    },
    toAbout: function() {
      this.$router.push({
        path: '/about'
      });
    }
  }
}
</script>
<style scoped lang="scss">
.nav {
  display: flex;
  button {
    color: coral;
    font-size: 14px;
    border-radius: 5px;
    +button {
      margin-left: 10px;
    }
  }
}
</style>