<template>
  <div id="c-tab">
    <ul class="tab-trigger">
      <li @click="setSeletedItem('overview')" :class="seleted == 'overview' ? 'active' :'' ">
        <a href="#overview">Overview</a>
      </li>
      <li @click="setSeletedItem('features')" :class="seleted == 'features' ? 'active' :'' ">
        <a href="#features">Features</a>
      </li>
      <li @click="setSeletedItem('whatInBox')" :class="seleted == 'whatInBox' ? 'active' :'' ">
        <a href="#whatInBox">WhatInBox</a>
      </li>
    </ul>
    <div class="tab-content-wrapper">
      <div :class="seleted == 'overview' ? 'tb-pane active' :'tb-pane' ">
        <div class="tb-content">
          <p>{{tabsData.overview}}</p>
        </div>
      </div>
      <div :class="seleted == 'features' ? 'tb-pane active' :'tb-pane' ">
        <div class="tb-content">
          <p>{{tabsData.features}}</p>
        </div>
      </div>
      <div :class="seleted == 'whatInBox' ? 'tb-pane active' :'tb-pane' ">
        <div class="tb-content">
          <p>{{tabsData.whatInBox}}</p>
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
            seleted: 'overview'
        }
    },
    methods: {
    setSeletedItem(item){
      this.seleted = item;
    },
  }
};
</script>

<style>
</style>