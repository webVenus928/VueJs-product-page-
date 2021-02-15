<template>
  <div>
    <Header />
    <main>
      <div class="product-area">
        <div class="cs-container">
          <div class="cmn-rw">
            <Slider :slidersData="slidersData" />
            <Discription :tabsData="tabsData" />
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
            <Controls :options="options" />
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slider from "../components/Slider";
import Controls from "../components/Controls.vue";
import Discription from "../components/Discription.vue";
export default {
  components: {
    Header,
    Footer,
    Slider,
    Discription,
    Controls,
  },
  data() {
    return {
      slidersData: [
        { id: 1, link: "#", img: require("../assets/img/pd-1.png") },
        { id: 2, link: "#", img: require("../assets/img/pd-2.png") },
        { id: 3, link: "#", img: require("../assets/img/pd-3.png") },
      ],
      tabsData: [
        {
          id: 1,
          title: "Overview",
          content: `For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True Wireless 2 is no different. Thanks to leading audio
            technology and innovation, these new earbuds deliver the best
            listening experience anytime, anywhere. With improved ergonomics
            designed for full day wearing and refined touch controls for a more
            personalised experience, they have been finely crafted for the most
            discerning listener and aim to simplify your life by enhancing your
            everyday.discerning listener and aim to simplify your life by
            enhancing your.`,
        },
        {
          id: 2,
          title: "Features",
          content: `For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True Wireless 2 is no different. Thanks to leading audio
            technology and innovation, these new earbuds deliver the best
            listening experience anytime, anywhere. With improved ergonomics
            designed for full day wearing and refined touch controls.`,
        },
        {
          id: 3,
          title: "What's in the box?",
          content: `For the past 75 years, Sennheiser has put sound first. The new
            MOMENTUM True Wireless 2 is no different. Thanks to leading audio
            technology and innovation improved ergonomics designed for full day
            wearing and refined touch controls for a more personalised
            experience, they have been finely crafted for the most discerning
            listener and aim to simplify your life by enhancing your everyday.`,
        },
      ],
      options: {
        colorsData: [
            {id: 1, title: 'Ivory White', content: `For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True.`},
            {id: 2, title: 'Matte Black', content: `Of all of the celestial bodies that capture our attention and fascination as astronomers.`},
        ],
        warrentyData: [
            {id: 1, title: '2 years coverage', content: `For the past 75 years, Sennheiser has put sound first.`, price: 0},
            {id: 2, title: '3 years coverage', content: `For the past 75 years, Sennheiser has put sound first.`, price: 75},
        ],
        featuresData: [
          {id: 1, title: 'Voice Assistant support', content: `Voice Assistant support`, price: 0},
          {id: 2, title: 'Customizable controls', content: `Customizable controls`, price: 55},
        ],
      }
    };
  },
};
</script>

<style>
</style>