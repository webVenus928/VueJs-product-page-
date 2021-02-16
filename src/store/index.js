import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { product } from '../../data'

export default new Vuex.Store({
  state: {
    product: {},
    modify: {
      color:{},
      warrenty:{},
      feature:{},
    },
    price: 0
  },
  mutations: {
    SET_PRODUCT(state, payload) {
      state.product = payload
    },
    SET_COLOR(state, payload){
      state.modify.color = payload;
    },
    SET_WARRENTY(state, payload){
      state.modify.warrenty = payload;
    },
    SET_FEATURE(state, payload){
      state.modify.feature = payload;
    },
    SET_PRICE(state, payload){
      state.price = payload
    }
  },
  actions: {
    getProduct: ({ commit }) => {
      commit('SET_PRODUCT', product);
    }
  },
  getters: {
    product: state => state.product,
    color: state => state.modify.color,
    warrenty: state => state.modify.warrenty,
    feature: state => state.modify.feature,
    price: state => state.price,
  }
})
