<template>
  <div class="modal">
    <div class="menu-container">
      <span class="menu-title">PAUSE</span>
      <div class="buttons-container">
        <div class="button" @click="() => pauseGameTrigger()">
          <span>CONTINUE GAME</span>
        </div>
        <div class="button" @click="($event) => restartGameTrigger()">
          <span>RESTART</span>
        </div>
        <router-link to="/">
          <div class="button text-white red">
            <span>QUIT GAME</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.menu-container {
  position: absolute;
  width: 343px;
  height: 437px;
  background-color: #7945ff;
  border-radius: 40px;
  border: 3px solid black;
  top: 25%;
  left: 4%;
  z-index: 11;
  box-shadow: 0px 10px 0px 0px #000;
}

.modal {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1000;
  background-color: rgb(0 0 0 / 50%);
  height: 100%;
}
.menu-title {
  font-size: 56px;
  display: block;
  text-align: center;
  color: white;
  margin: 30px 0 15px 0;
}

.button {
  text-align: left;
  padding: 0px 20px;
  height: 72px;
  border: 3px solid black;
  width: 295px;
  font-size: 24px;
  border-radius: 20px;
  box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 1);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.red {
  background-color: #fd6687;
}

.buttons-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  gap: 30px;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .menu-container {
    height: 491px;
    width: 480px;
    top: 28%;
    left: 18.5%;
  }

  .button {
    width: 400px;
  }
}
</style>
<script>
export default {
  name: "PauseMenu",
  props: ["restartGame", "closeModal", "pauseGame"],
  methods: {
    restartGameTrigger() {
      this.restartGame();
      this.pauseGame();
    },
    pauseGameTrigger() {
      this.pauseGame();
    },
  },
};
</script>
