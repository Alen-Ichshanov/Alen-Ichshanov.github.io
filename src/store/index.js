import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    menuHeader: [
      {
        id: 1, title: 'Главная', link: '/',
      },
      {
        id: 2, title: 'О компании', link: '/',
      },
      {
        id: 3, title: 'Бонусная система', link: '/',
      },
      {
        id: 4, title: 'Поддержка', link: '/',
      },
      {
        id: 5, title: 'Контакты', link: '/',
      },
    ],
    menuFooter: [
      {
        id: 1, title: 'О компании', link: '/',
      },
      {
        id: 2, title: 'Публичная оферта', link: '/',
      },
      {
        id: 3, title: 'Блог', link: '/blog',
      },
      {
        id: 4, title: 'Для партнеров', link: '/',
      },
      {
        id: 5, title: 'FAQ', link: '/',
      },
    ],
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts(context) {
      const res = await fetch('https://fakestoreapi.com/products?limit=12');
      const products = await res.json();
      context.commit('updateProducts', products);
    },
  },
  modules: {
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    menuHeader(state) {
      return state.menuHeader;
    },
    menuFooter(state) {
      return state.menuFooter;
    },
  },
});
