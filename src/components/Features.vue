<template>
<div class="cmn-option-style">
    <h3 class="primary-title">Features.</h3>
    <a v-for="(item, index) in featuresData" :key="index" :href="`#${item.id}`"  @click="setSeletedItem(item)" :class=" item.id == seleted.id ? 'cmn-ct-wrapper type-2 active' :'cmn-ct-wrapper type-2'">
        <p>{{item.title}}</p>
        <div v-if="item.price > 0" class="ct-lr">
            <span class="extra-price">
                + $<span class="extra-price-amount">{{item.price}}</span>
            </span>
        </div>
    </a>
</div>
</template>

<script>
export default {
    props: {
    featuresData: {
      require: true,
      default: []
    }
  },
    data(){
        return{
            seleted: {}
        }
    },
    methods: {
    setSeletedItem(item){
      this.seleted = item;
    }
  },
  created(){
    this.setSeletedItem(this.featuresData[0])
  }
};
</script>

<style>

</style>