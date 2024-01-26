<template>
  <div class="m-4">
    <div class="flex gap-5 justify-center container">
      <div class="score-keeper p-3">
        <div class="flex flex-col player-one-score-keeper-content">
          <span class="text-xl player font-bold">PLAYER 1</span>
          <span class="text-5xl relative score font-bold">0</span>
        </div>
        <img class="player-one-image" src="../assets/images/player-one.svg" />
      </div>
      <div class="score-keeper p-2">
        <div class="flex flex-col player-two-score-keeper-content">
          <span class="text-xl player font-bold">PLAYER 2</span>
          <span class="text-5xl relative score font-bold">0</span>
        </div>
        <img class="player-two-image" src="../assets/images/player-two.svg" />
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
.score {
  font-size: 32px;
}

.player {
  font-size: 16px;
}

.player-one-image {
  position: relative;
  right: 27px;
  bottom: 55px;
}
.player-two-image {
  position: relative;
  left: 105px;
  bottom: 55px;
}

.score-keeper span {
  display: block;
  text-align: center;
}
.score-keeper {
  padding: 5px;
  border: 3px solid black;
  height: 83px;
  width: 150px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 1);
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .score-keeper {
    height: 100px;
    width: 272px;
  }

  .container {
    gap: 2.5rem;
  }

  .player-one-image,
  .player-two-image {
    bottom: 70px;
  }

  .player-one-image {
    right: 28px;
  }

  .player-two-image {
    left: 236px;
  }

  .player-one-score-keeper-content,
  .player-two-score-keeper-content {
    height: 100%;
    align-items: center;
    width: 100%;
    justify-content: center;
    gap: 40px;
  }

  .player-one-score-keeper-content {
    flex-direction: row;
  }

  .player-two-score-keeper-content {
    flex-direction: row-reverse;
  }

  .score {
    font-size: 56px;
  }

  .player {
    font-size: 20px;
  }
}
</style>
