<template>
<div class="cmn-option-style">
    <h3 class="primary-title">Choose your finish.</h3>
    <div class="cmn-rw type-3">
        <div v-for="(item, index) in colorsData" :key="index" @click="setSeletedItem(item)" class="cmn-half-col">
            <a :href="`#${item.id}`"  :class=" item.id == seleted.id ? 'cmn-ct-wrapper active' :'cmn-ct-wrapper'">
                <h5>{{item.title}}</h5>
                <p>{{item.content}}</p>
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
    colorsData: {
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
    this.setSeletedItem(this.colorsData[0])
  }
};
</script>

<style>

</style>