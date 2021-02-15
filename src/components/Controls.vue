<template>
  <div class="cmn-half-col order-4">
    <div class="feature-option-wrapper">
      <colors :colorsData="options.colorsData" />
      <warrenty  :warrentyData="options.warrentyData"/>
      <features :featuresData="options.featuresData"/>
      <specifications />
      <!-- ./cmn-option-style -->
    </div>
    <!-- ./feature-option-wrapper -->
  </div>
</template>

<script>
import Colors from "./Colors";
import Features from "./Features.vue";
import Specifications from "./Specifications.vue";
import Warrenty from "./Warrenty.vue";
export default {
  props: {
    options: {
      require: true,
      default: {
        colorsData: [],
        warrentyData: [],
        featuresData: [],
      },
    },
  },
  components: {
    Colors,
    Warrenty,
    Features,
    Specifications,
  },
};
</script>

<style>
</style>