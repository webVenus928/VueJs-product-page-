<template>
  <div id="c-tab">
    <ul class="tab-trigger">
      <li v-for="(item, index) in tabsData" :key="index" @click="setSeletedItem(item)" :class=" item.id == seleted.id ? 'active' :'' ">
        <a href="#">{{item.title}}</a>
      </li>
    </ul>
    <div class="tab-content-wrapper">
      <div v-for="(item, index) in tabsData" :key="index" :class=" item.id == seleted.id ? 'tb-pane active' :'tb-pane' " id="overview">
        <div class="tb-content">
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
    tabsData: {
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
    this.setSeletedItem(this.tabsData[0])
  }
};
</script>

<style>
</style>