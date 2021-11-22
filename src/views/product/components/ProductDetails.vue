<template>
  <div class="product-details product__product-details">
    <div class="product-details__tabs">
      <div v-on:click="activetab=1" v-bind:class="[ activetab === 1 ?
      'product-details__tab-item_active' : '' ]"
      class="product-details__tab-item">
        О товаре
      </div>
      <div v-on:click="activetab=2" v-bind:class="[ activetab === 2 ?
      'product-details__tab-item_active' : '' ]"
        class="product-details__tab-item">Характеристики</div>
      <div v-on:click="activetab=3" v-bind:class="[ activetab === 3 ?
      'product-details__tab-item_active' : '' ]"
      class="product-details__tab-item">Отзывы</div>
      <div v-on:click="activetab=4" v-bind:class="[ activetab === 4 ?
      'product-details__tab-item_active' : '' ]"
      class="product-details__tab-item">Доставка</div>
    </div>
    <div v-if="activetab === 1" class="product-details__tab-content
    product-details__tab-content_about">
        <img :src="product.image" alt="Фото товара" class="product-details__image">
        <p class="product-details__description">{{ product.description }}</p>
      </div>
      <div v-if="activetab === 2" class="product-details__tab-content
      product-details__tab-content_characteristics">
        Caught in a landslide, no escape from reality
      </div>
      <div v-if="activetab === 3" class="product-details__tab-content
      product-details__tab-content_rating">
        <p>Количество отзывов: {{ product.rating.count }}</p>
        <p>Средняя оценка: {{ product.rating.rate }}</p>
      </div>
      <div v-if="activetab === 4" class="product-details__tab-content
      product-details__tab-content_delivery">
        Информация о доставке.
      </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      activetab: 1,
    };
  },
};
</script>
