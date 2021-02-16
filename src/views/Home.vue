<template>
  <div>
    <Header />
    <main>
      <div class="product-area">
        <div class="cs-container">
          <div class="cmn-rw">
            <Slider :slidersData="product.images" />
            <Discription :discription="product.discription" />
            <div class="cmn-half-col order-2">
              <ul class="product-feature for-mobile">
                <li>
                  <div class="fea-icon">
                    <img src="assets/img/fea-1.png" alt="" />
                  </div>
                  <p>Customizable Touch Controls</p>
                </li>
                <li>
                  <div class="fea-icon">
                    <img src="assets/img/fea-2.png" alt="" />
                  </div>
                  <p>Built-in Equalizer</p>
                </li>
                <li>
                  <div class="fea-icon">
                    <img src="assets/img/fea-3.png" alt="" />
                  </div>
                  <p>Active Noise Cancellation</p>
                </li>
              </ul>
            </div>
            <Options :options="product.options" />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import Slider from "../components/Slider.vue";
import Discription from "../components/Discription.vue";
import Options from "../components/Options.vue";
export default {
  components: {
    Header,
    Footer,
    Slider,
    Discription,
    Options,
  },
  computed: {
    product() {
      return this.$store.getters.product;
    },
  },
  created() {
    this.$store.dispatch("getProduct");
  },
};
</script>

<style>
</style>