<template>
  <img v-if="player === 'red'" src="../assets/images/counter-red-small.svg" />
  <img
    v-if="player === 'yellow'"
    src="../assets/images/counter-yellow-small.svg"
  />
</template>

<style scoped>
img {
  position: relative;
  top: 27px;
  z-index: 2;
  left: -1px;
}
</style>

<script>
export default {
  name: "GameDisc",
  props: ["player", "position"],
  computed: {},
};
</script>
