<template>
  <section class="product">
    <div class="product__container">
      <router-link to="/" class="product__go-back">
        <img src="@/assets/images/back.svg" alt="Иконка обратной стрелки" />
        Главная
      </router-link>
      <product-desc :product="product"></product-desc>
      <product-details :product="product"></product-details>
    </div>
  </section>
</template>

<script>
import ProductDesc from '@/views/product/components/ProductDesc.vue';
import ProductDetails from '@/views/product/components/ProductDetails.vue';

export default {
  name: 'Product',
  components: {
    ProductDesc,
    ProductDetails,
  },
  data() {
    return {
      id: this.$route.params.id,
      product: {},
    };
  },
  async mounted() {
    const res = await fetch(`https://fakestoreapi.com/products/${this.id}`);
    const product = await res.json();
    this.product = product;
    console.log(product);
  },
};
</script>
