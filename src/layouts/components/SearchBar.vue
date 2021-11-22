<template>
  <div class="search-container header__search-container">
    <form action="/" method="GET" class="form">
      <input
        type="search"
        placeholder="Поиск"
        class="search-field form__search-field"
        v-model="search"
      />
      <button type="button" class="form__button">
        <img src='@/assets/images/search.svg' alt="" />
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'searchBar',
  data() {
    return {
      search: '',
    };
  },
};
</script>
