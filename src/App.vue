<template>
  <!-- <MainScreen /> -->
  <GameScreen />
</template>

<script>
import GameScreen from "./views/GameScreen.vue";
// import MainScreen from "./components/MainScreen.vue";

export default {
  name: "App",
  components: {
    // MainScreen,
    GameScreen,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 75px;
  align-items: center;
  background-color: #7a45ff;
}
</style>
