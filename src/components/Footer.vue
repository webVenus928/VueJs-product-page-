<template>
  <footer class="footer-part">
        <div class="cs-container">
            <div class="footer-content-flex-wrapper">
                <div class="ft-lf">
                    <div class="cmn-ct-wrapper">
                        <h5>Free Shipping</h5>
                        <p>Get 2-day free shipping anywhere in North America.</p>
                    </div>
                    <div class="cmn-ct-wrapper">
                        <h5>2 years warranty</h5>
                        <p>If anything goes wrong in the first two years, we'll replace it for free.</p>
                    </div>
                </div> <!-- ./ft-lf -->

                <div class="ft-lr">
                    <div class="estimate-price-wrapper">
                        <div class="estimate-price">
                            $<span id="final-price">{{price}}</span>
                        </div>
                        <p>Need financing? Learn <span class="m-none">more</span></p>
                    </div>
                    <a href="#" class="buy-btn">Buy now</a>
                </div> <!-- ./ft-lr -->
            </div> <!-- ./footer-content-flex-wrapper -->
        </div>
    </footer>
</template>

<script>
export default {
computed: {
    price() {
      const price = this.$store.getters.product.price;
      const color = this.$store.getters.color.price;
      const warrenty = this.$store.getters.warrenty.price;
      const feature = this.$store.getters.feature.price;
      return price+color+warrenty+feature;
    },
  },
}
</script>

<style>

</style>