<template>
  <div class="cmn-half-col mb-70 order-1" id="sticky-col">
    <div class="product-slider-wrapper" id="product-slider">
      <div class="product-slider">
        <div v-for="(item, index) in slidersData" :key="index" :class=" item.id == seleted.id ? 'slide-item active' :'slide-item' ">
          <a :href="`#${item.id}`" ><img :src="item.img" alt="img" /></a>
        </div>
      </div>
      <ul class="product-slider-nav">
        <li v-for="(item, index) in slidersData" :key="index" @click="setSeletedItem(item)" :class=" item.id == seleted.id ? 'slide-nav-item active' :'slide-nav-item'">
          <a href="#itemOne"><img :src="item.img" alt="" /></a>
        </li>
      </ul>

      <ul class="product-feature for-web">
        <li>
          <div class="fea-icon"><img src="assets/img/fea-1.png" alt="" /></div>
          <p>Customizable Touch Controls</p>
        </li>
        <li>
          <div class="fea-icon"><img src="assets/img/fea-2.png" alt="" /></div>
          <p>Built-in Equalizer</p>
        </li>
        <li>
          <div class="fea-icon"><img src="assets/img/fea-3.png" alt="" /></div>
          <p>Active Noise Cancellation</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    slidersData: {
      require: true,
      default: []
    }
  },
  data(){
    return {
      seleted: {},
    }
  },
  methods: {
    setSeletedItem(item){
      this.seleted = item;
    }
  },
  created(){
    this.setSeletedItem(this.slidersData[0])
  }
};
</script>

<style>
</style>