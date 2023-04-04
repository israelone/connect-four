<template>
  <div class="m-4">
    <div class="flex gap-7 justify-center">
      <div class="score-keeper p-2">
        <div class="flex flex-col">
          <span class="text-xl">PLAYER 1</span>
          <span class="text-5xl relative">0</span>
        </div>
        <img
          class="player-one-image right-8 bottom-16"
          src="../assets/images/player-one.svg"
        />
      </div>
      <div class="score-keeper p-2">
        <div class="flex flex-col">
          <span class="text-xl">PLAYER 2</span>
          <span class="text-5xl relative">0</span>
        </div>
        <img
          class="relative left-36 bottom-16"
          src="../assets/images/player-two.svg"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreKeepers",
};
</script>

<style scoped>
.player-one-image {
  position: relative;
  right: 25px;
}
.score-keeper span {
  display: block;
  text-align: center;
}
.score-keeper {
  border: 4px solid black;
  height: 106px;
  width: 190px;
  background-color: white;
  border-radius: 26px;
  box-shadow: 0px 12px 0px 0px rgba(0, 0, 0, 1);
}
</style>
