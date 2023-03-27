<template>
  <MainScreen />
</template>

<script>
import MainScreen from "./components/MainScreen.vue";

export default {
  name: "App",
  components: {
    MainScreen,
  },
};
</script>

<style>
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 75px;
  align-items: center;
  background-color: #7a45ff;
}
</style>
