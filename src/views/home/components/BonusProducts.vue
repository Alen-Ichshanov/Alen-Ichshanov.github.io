<template>
  <section class="home__bonus-products bonus-products">
    <div class="bonus-products__container">
      <h2 class="bonus-products__title home__title">Бонусные товары</h2>
      <store-comp :products="products"></store-comp>
      <button class="button bonus-products__button" type="button">
        Перейти ко всем категориям
      </button>
    </div>
  </section>
</template>

<script>
import StoreComp from '@/views/home/components/Store.vue';

export default {
  name: 'BonusProducts',
  components: {
    StoreComp,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
