<template>
  <section class="home__slider slider">
    <div class="slider__image-wrap">
      <img src="@/assets/images/lighthouse.png" alt="Картинка маяка" class="slider__image">
      <img src="@/assets/images/cafe.png" alt="Картинка семьи в кафе" class="slider__image">
    </div>
    <div class="slider__controls">
      <button class="button  button_slider button_slider_active" type="button">
        <img src="@/assets/images/dot-pink.svg" alt="">
      </button>
      <button class="button  button_slider" type="button">
        <img src="@/assets/images/dot-pink.svg" alt="">
      </button>
      <button class="button  button_slider" type="button">
        <img src="@/assets/images/dot-pink.svg" alt="">
      </button>
      <button class="button  button_slider" type="button">
        <img src="@/assets/images/dot-pink.svg" alt="">
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Slider',
};
</script>
