<template>
  <div class="container">
    <div class="options">
      <div class="flex justify-center mt-16 mb-20">
        <img
          class="logo w-16 md:w-14 md:h-14 h-12"
          src="../assets/images/logo.svg"
        />
      </div>
      <div class="flex justify-center flex-col items-center gap-10">
        <!-- TO be added -->
        <!-- <router-link to="/game" class="top-bar-link">
          <div class="button bg-red-500 text-white" id="red">
            <span>PLAY VS CPU</span>
            <img src="../assets/images/player-vs-cpu.svg" />
          </div>
        </router-link> -->
        <router-link to="/game" class="top-bar-link">
          <div class="button text-black" id="yellow">
            <span>PLAY VS PLAYER</span>
            <img
              class="player-logo"
              src="../assets/images/player-vs-player.svg"
            />
          </div>
        </router-link>
        <router-link to="/rules" class="top-bar-link">
          <div class="button bg-white text-black">
            <span>GAME RULES</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .button {
  border-radius: 100%;
  height: 10px;
  border: 1px solid black;
  width: 10px;
  -webkit-box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 1);
} */
.container {
  padding-top: 144px;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
#red {
  background-color: #fd6687;
}
#yellow {
  background-color: #ffce67;
}

.player-logo {
  width: 82px;
  height: 46px;
  margin: 0;
}

span {
  font-size: 24px;
}
.button {
  text-align: left;
  padding: 0px 20px;
  height: 72px;
  border: 3px solid black;
  width: 335px;
  font-size: 24px;
  border-radius: 20px;
  box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 1);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .options {
    height: 435px;
    width: 480px;
    border-radius: 40px;
    border: 3px solid #000;
    background: #7945ff;
    box-shadow: 0px 10px 0px 0px #000;
  }
  .player-logo {
    width: 82px;
    height: 46px;
    margin: 0;
  }

  .button {
    width: 400px;
  }

  .main {
    padding-top: 295px;
  }
}
@media (min-width: 992px) {
  .options {
    height: 435px;
    width: 480px;
    border-radius: 40px;
    border: 3px solid #000;
    background: #7945ff;
    box-shadow: 0px 10px 0px 0px #000;
  }

  .container {
    padding: 223px;
  }

  .button {
    width: 400px;
  }
}
</style>

<script>
export default {
  name: "GamePlayOptions",
};
</script>
