<template>
  <section class="home__banner banner">
    <div class="banner__container">
      <img src="@/assets/images/banner.png" alt="" class="banner__image" />
      <div class="banner__desc">
        <h4>Название заголовка</h4>
        <p>Мини-описание</p>
        <div class="banner__controls">
          <button class="button  button_slider button_slider_active" type="button">
            <img
              src="@/assets/images/dot.svg"
              alt="Кнопка для переключения слайдера"
            />
          </button>
          <button class="button  button_slider" type="button">
            <img
              src="@/assets/images/dot.svg"
              alt="Кнопка для переключения слайдера"
            />
          </button>
          <button class="button  button_slider" type="button">
            <img
              src="@/assets/images/dot.svg"
              alt="Кнопка для переключения слайдера"
            />
          </button>
          <button class="button  button_slider" type="button">
            <img
              src="@/assets/images/dot.svg"
              alt="Кнопка для переключения слайдера"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner',
};
</script>
