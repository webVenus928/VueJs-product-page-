<template>
  <header class="header-part">
    <div class="cs-container">
      <div class="header-content text-center">
        <a href="#" class="logo"
          ><img :src="application.logo" alt=""
        /></a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      application: {
        logo: require("../assets/img/logo.png"),
      },
    };
  },
};
</script>

<style>
</style>