<template>
  <div class="product-desc product__product-desc">
    <div class="product-desc__image-wrap">
      <img :src="product.image" alt="Фото товара" class="product-desc__image">
      <div class="product-desc__image-other">
        <img :src="product.image" alt="Фото товара">
        <img :src="product.image" alt="Фото товара">
        <img :src="product.image" alt="Фото товара">
        <img :src="product.image" alt="Фото товара">
        <img :src="product.image" alt="Фото товара">
      </div>
    </div>
    <div class="product-desc__info">
      <button class="button product-desc__favourite" type="button">
        <img src="@/assets/images/like.svg" alt="Иконка сердца" />
      </button>
      <div class="product-desc__badges">
        <div class="product-desc__id">{{ product.id }}</div>
        <div class="product-desc__category">{{ product.category }}</div>
        <img src="@/assets/images/new.svg" alt="">
      </div>
      <h2 class="product-desc__title">{{ product.title }}</h2>
      <h3 class="product-desc__price">{{ product.price }} &#8376;</h3>
      <div class="product-desc__buttons">
        <button class="button product-desc__add-cart" type="button">Добавить в корзину</button>
        <button class="button product-desc__buy" type="button">Купить</button>
      </div>
      <div class="product-desc__feature">
        <div class="product-desc__feature-type">
          <p>Покрой</p>
          <p>Фактура материала</p>
          <p>Декоративные элементы</p>
          <p>Длина изделия по спинке</p>
          <p>Комплектация</p>
        </div>
        <div class="product-desc__feature-value">
          <p>оверсайз</p>
          <p>футер</p>
          <p>без элементов</p>
          <p>70 см</p>
          <p>худи</p>
        </div>
      </div>
      <button class="button product-desc__more" type="button">Подробнее</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDesc',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
