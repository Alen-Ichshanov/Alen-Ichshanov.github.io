<template>
  <div class="clock page__clock">
    <div class="clock__hours">{{ hours }} :</div>
    <div class="clock__minutes">&nbsp;{{ minutes }} :</div>
    <div class="clock__seconds">&nbsp;{{ seconds }}</div>
  </div>
</template>

<script>
export default {
  name: 'Clock',
  data() {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  },
  mounted() {
    setInterval(this.updateTime, 1000);
  },
  methods: {
    updateTime() {
      this.hours = new Date().getHours();
      this.minutes = new Date().getMinutes();
      this.seconds = new Date().getSeconds();
    },
  },
};
</script>
