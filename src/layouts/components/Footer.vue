<template>
  <footer class="footer page__footer">
    <div class="footer__top">
      <img src="@/assets/images/logo.svg" alt="Логотип комании" />
      <nav-menu :menu="menuFooter" class="footer__menu menu"></nav-menu>
      <div class="footer__socials socials">
        <a href="#" class="socials__links">
          <img src="@/assets/images/instagram.svg" alt="Иконка Instagram">
        </a>
        <a href="#" class="socials__links">
          <img src="@/assets/images/facebook.svg" alt="Иконка Facebook">
        </a>
        <a href="#" class="socials__links">
          <img src="@/assets/images/twitter.svg" alt="Иконка Twitter">
        </a>
        <a href="#" class="socials__links">
          <img src="@/assets/images/vk.svg" alt="Иконка VK">
        </a>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__text">
        <p >Лучший магазин 2019 &copy; Все права защищены. Интернет-магазин</p>
        <a class="footer__policy" href="">Политика конфиденциальности</a>
      </div>
      <clock></clock>
    </div>
  </footer>
</template>

<script>
import NavMenu from '@/layouts/components/NavMenu.vue';
import Clock from '@/layouts/components/Clock.vue';

export default {
  name: 'FooterComp',
  components: {
    NavMenu,
    Clock,
  },
  computed: {
    menuFooter() {
      return this.$store.getters.menuFooter;
    },
  },
};
</script>
