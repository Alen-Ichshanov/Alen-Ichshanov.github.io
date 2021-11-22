<template>
  <div class="user header__user">
    <img
      src="@/assets/images/avatar.svg"
      alt="Аватар пользователя"
      class="user__avatar"
    />
    <a href="#" class="user__profile">Мой профиль</a>
    <button class="user__button">
      <img src="@/assets/images/drop.svg" alt="Иконка стрелки вниз">
    </button>
  </div>
</template>

<script>

export default {
  name: 'userBlock',
};
</script>
