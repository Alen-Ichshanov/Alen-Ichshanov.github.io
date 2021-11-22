<template>
    <div class="page">
      <header-comp></header-comp>
      <main class="main page__main">
        <div class="main-container main__main-container">
          <router-view></router-view>
        </div>
      </main>
      <footer-comp></footer-comp>
    </div>
</template>
<style lang="scss">
</style>

<script>
import FooterComp from '@/layouts/components/Footer.vue';
import HeaderComp from '@/layouts/components/Header.vue';

export default {
  name: 'App',
  components: {
    FooterComp,
    HeaderComp,
  },
};
</script>

<style lang="scss">
</style>
