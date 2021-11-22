<template>
  <section class="home__sale sale">
    <div class="sale__container">
      <h2 class="sale__title home__title">Активационные товары</h2>
      <store-comp :products="products" class="sale__product-container"
      @sendProductData="openProduct"></store-comp>
    </div>
  </section>
</template>

<script>
import StoreComp from '@/views/home/components/Store.vue';

export default {
  name: 'Sale',
  components: {
    StoreComp,
  },
  data() {
    return {
      productData: {},
    };
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    openProduct(data) {
      this.productData = data;
    },
  },
};
</script>
