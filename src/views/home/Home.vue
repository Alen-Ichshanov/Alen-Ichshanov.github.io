<template>
  <div class='home'>
    <banner></banner>
    <sale :products="allProducts"></sale>
    <bonus-products :products="allProducts"></bonus-products>
    <slider></slider>
    <partners></partners>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/views/home/components/Banner.vue';
import Sale from '@/views/home/components/Sale.vue';
import BonusProducts from '@/views/home/components/BonusProducts.vue';
import Slider from '@/views/home/components/Slider.vue';
import Partners from '@/views/home/components/Partners.vue';

export default {
  name: 'Home',
  components: {
    Banner,
    Sale,
    BonusProducts,
    Slider,
    Partners,
  },
  computed: {
    allProducts() {
      return this.$store.getters.allProducts;
    },
    productById() {
      return this.$store.getters.getProductById(2);
    },
  },
  async mounted() {
    this.$store.dispatch('fetchProducts');
  },
};
</script>
