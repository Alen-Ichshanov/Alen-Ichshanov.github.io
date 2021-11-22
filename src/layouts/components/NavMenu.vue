<template>
  <nav>
    <ul class="menu-list menu__menu-list">
      <li class="menu-list__menu-item" v-for="item in menu" :key="item.id">
        <router-link :to="item.link"
        class="menu-list__menu-link">{{ item.title }}
        </router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },
};
</script>
