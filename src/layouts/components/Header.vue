<template>
  <header class="header page__header">
    <div class="header__top">
      <img
        src="@/assets/images/logo.svg"
        alt="Логотип компании"
        class="header__img"
      />
      <search-bar></search-bar>
      <div class="header__geo">
        <img src="@/assets/images/location.svg" alt="Иконка геолокации" />
        <span class="header__geo-title">Алматы</span>
      </div>
      <user-block></user-block>
    </div>
    <hr class="header__hr" />
    <div class="header__bottom">
      <catalog></catalog>
      <nav-menu :menu="menuHeader" class="header__menu menu"></nav-menu>
      <controls></controls>
    </div>
  </header>
</template>

<script>
import SearchBar from '@/layouts/components/SearchBar.vue';
import UserBlock from '@/layouts/components/UserBlock.vue';
import NavMenu from '@/layouts/components/NavMenu.vue';
import Catalog from '@/layouts/components/Catalog.vue';
import Controls from '@/layouts/components/Controls.vue';

export default {
  name: 'HeaderComp',
  components: {
    SearchBar,
    UserBlock,
    NavMenu,
    Catalog,
    Controls,
  },
  computed: {
    menuHeader() {
      return this.$store.getters.menuHeader;
    },
  },
};
</script>
