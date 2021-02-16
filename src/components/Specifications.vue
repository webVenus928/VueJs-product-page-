<template>
  <div class="cmn-option-style">
    <h3 class="primary-title">Specifications.</h3>
    <div class="specification-wrapper">
      <div v-for="(item, index) in specifications" :key="index" class="sp-rw">
        <p>{{item.title}}</p>
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    specifications() {
      return this.$store.getters.product.specifications;
    },
  },
};
</script>

<style>
</style>