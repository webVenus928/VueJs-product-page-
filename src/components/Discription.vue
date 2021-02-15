<template>
  <div class="cmn-half-col order-3">
    <div class="product-description-wrapper">
      <h2 class="product-title">
        <span class="release-status">New release</span> MOMENTUM True Wireless 2
      </h2>
      <h4 class="product-sub-title">Earbuds that put sound first</h4>

      <div class="product-price">
        Starting at
        <strong>$<span class="pd-starting-price">295.95</span></strong>
      </div>
      <Tabs :tabsData="tabsData"/>
    </div>
  </div>
</template>
<script>
import Tabs from "../components/Tabs";
export default {
  props: {
    tabsData: {
      require: true,
      default: []
    }
  },
  components: {
    Tabs,
  },
};
</script>

<style>
</style>