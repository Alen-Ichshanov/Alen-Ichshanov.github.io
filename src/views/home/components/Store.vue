<template>
  <div class="product-container">
    <div
      class="product-container__product-card product-card"
      v-for="product in products"
      :key="product.id" :idProp="product.id"
    >
      <div class="product-card__badge">
        <img src="@/assets/images/new.svg" alt="Иконка нового товара" />
        <button class="button" type="button">
          <img src="@/assets/images/heart.svg" alt="Иконка сердца" />
        </button>
      </div>
      <router-link :to="'/product/'+product.id" class="product-card__link">
        <div class="product-card__img-container">
          <img :src="product.image" alt="" class="product-card__image"/>
        </div>
        <p class="product-card__title">{{ product.title }}</p>
      </router-link>
      <p class="product-card__price">{{ product.price }} &#8376;</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StoreComp',
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
