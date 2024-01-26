<template>
  <div class="menu-container">
    <div class="flex items-center justify-between menu">
      <button @click="($event) => pauseGameTrigger($event)">MENU</button>
      <img class="logo" src="../assets/images/logo.svg" />
      <button @click="($event) => restartGameTrigger($event)">RESTART</button>
    </div>
  </div>
</template>

<style scoped>
.menu {
  padding: 0 1rem 0 1rem;
  margin: 3rem 0 3rem 0;
}
button {
  background-color: #5c2dd5;
  width: 108px;
  border-radius: 18px;
  color: white;
  height: 39px;
}

img {
  width: 40px;
  height: 40px;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .container {
    margin: 30px 0 5px 0;
    padding: 0 67px;
  }
  button {
    width: 86px;
    height: 39px;
  }

  button:nth-of-type(2) {
    width: 108px;
  }

  img {
    width: 52px;
    height: 52px;
  }
}

@media (min-width: 910px) {
  .menu-container {
    width: 650px;
  }
}
</style>
<script>
export default {
  name: "TopMenu",
  props: ["restartGame", "pauseGame"],
  methods: {
    restartGameTrigger() {
      console.log("Hello");
      this.restartGame();
    },
    pauseGameTrigger() {
      this.pauseGame();
    },
  },
};
</script>
