<template>
  <div class="cmn-option-style" id="serviceTime">
            <h3 class="primary-title">Would you like to add extended warranty coverage?.</h3>
            <a v-for="(item, index) in warrentyData" :key="index" :href="`#${item.id}`" 
            @click="setSeletedItem(item)"
            :class=" item.id == seleted.id ? 'cmn-ct-wrapper type-2 active' :'cmn-ct-wrapper type-2'">
                <div class="ct-lf">
                <h5>{{item.title}}</h5>
                <p>{{item.content}}</p>
                </div>
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
    warrentyData: {
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
    this.setSeletedItem(this.warrentyData[0])
  }
};
</script>

<style>

</style>