<template>
  <div class="container">
    <div>
      <div class="flex items-center justify-between px-4">
        <button>MENU</button
        ><img class="logo" src="../assets/images/logo.svg" /><button>
          RESTART
        </button>
      </div>
      <!-- ! These score keepers could be their own component -->
    </div>
    <div class="m-4">
      <div class="flex gap-7 justify-center">
        <div class="score-keeper p-2">
          <div class="flex flex-col">
            <span class="text-xl">PLAYER 1</span>
            <span class="text-5xl relative">{{ playerOne }}</span>
          </div>
          <img
            class="player-one-image right-8 bottom-16"
            src="../assets/images/player-one.svg"
          />
        </div>
        <div class="score-keeper p-2">
          <div class="flex flex-col">
            <span class="text-xl">PLAYER 2</span>
            <span class="text-5xl relative">{{ playerTwo }}</span>
          </div>
          <img
            class="relative left-36 bottom-16"
            src="../assets/images/player-two.svg"
          />
        </div>
      </div>
    </div>
    <div class="">
      <div class="clear-layer">
        <GameColumn
          :currentPlayer="currentPlayer"
          :endPlayerTurn="endPlayerTurn"
          :addMoveToGameGrid="addMoveToGameGrid"
          v-for="i in 7"
          :columnNumber="i - 1"
          :key="i"
        />
      </div>
      <div class="relative top-0 left-0">
        <img
          class="white-layer layer"
          src="../assets/images/board-layer-white-small.svg"
        />
        <img
          class="black-layer layer"
          src="../assets/images/board-layer-black-small.svg"
        />
      </div>

      <div class="z-10 relative bottom-6">
        <img class="m-auto" :src="playerTurnBackground" />
        <div class="relative bottom-28">
          <span class="block text-center text-white">{{
            currentPlayer + "'S TURN"
          }}</span>
          <span class="block text-center text-5xl text-white">{{
            seconds + "s"
          }}</span>
        </div>
      </div>
    </div>
    <div
      class="w-full h-64 z-0 absolute bottom-0 rounded-t-3xl bg-violet-500"
    ></div>
  </div>
</template>

<script>
import GameColumn from "@/components/GameColumn.vue";
import PlayerOneTurnBackground from "../assets/images/turn-background-red.svg";
import PlayerTwoTurnBackground from "../assets/images/turn-background-yellow.svg";

export default {
  name: "GameScreen",

  data() {
    // eslint-disable-next-line no-unused-labels
    return {
      gameGrid: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ],
      currentPlayer: "PLAYER 1",
      playerTurnBackground: PlayerOneTurnBackground,
      seconds: 0,
      playerOne: 0,
      playerTwo: 0,
      showArrow: false,
      winner: "",
      gameStarted: false,
      timer: setInterval(() => {
        if (this.seconds === 15) {
          this.endPlayerTurn();
        }
        this.seconds += 1;
      }, 1000),
    };
  },
  methods: {
    endPlayerTurn() {
      this.seconds = 0;
      if (this.currentPlayer === "PLAYER 1") {
        this.currentPlayer = "PLAYER 2";
        this.playerTurnBackground = PlayerTwoTurnBackground;
      } else {
        this.currentPlayer = "PLAYER 1";
        this.playerTurnBackground = PlayerOneTurnBackground;
      }
      //   this.timer;
    },
    addMoveToGameGrid(row, column) {
      this.gameGrid[row][column] = this.currentPlayer;
      this.checkForWinner(row, column);
    },
    endGame() {
      clearInterval(this.timer);
    },
    checkForWinner(x, y) {
      let count = 0;
      const searchParameters = {
        downwards: [1, 0],
        backwards: [0, -1],
        forwards: [0, 1],
        downLeft: [1, -1],
        downRight: [1, 1],
      };
      const recursion = (x, y, direction) => {
        if (x < 6 && y < 7) {
          if (this.gameGrid[x][y] === this.currentPlayer) {
            count++;
            if (count === 3) {
              this.endGame();
              this.winner = this.currentPlayer;
            }
            recursion(
              x + searchParameters[direction][0],
              y + searchParameters[direction][1],
              direction
            );
          } else {
            count = 0;
          }
        }
      };

      for (const direction in searchParameters) {
        recursion(
          x + searchParameters[direction][0],
          y + searchParameters[direction][1],
          direction
        );
      }
    },
  },
  components: { GameColumn },
};
</script>

<style scoped>
.logo {
  width: 47px;
}
.player-one-image {
  position: relative;
  right: 25px;
}

.score-keeper span {
  display: block;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  margin-top: 26px;
}
.layer {
  width: 90vw;
  margin: 0 auto;
}

.clear-layer {
  display: flex;
  width: 439.9px;
  margin: auto;
}

.clear-layer div {
  width: calc(100% / 7);
  height: 50px;
  padding: 0 6px;
  z-index: 3;
}

.white-layer {
  position: relative;
  z-index: 3;

  top: 0;
  left: 0;
}

.black-layer {
  position: absolute;
  top: 0;
  left: 24px;
  z-index: 1;
}

button {
  background-color: rgb(0 0 0 / 34%);
  width: 110px;
  border-radius: 18px;
  color: white;
  height: 35px;
}

.score-keeper {
  border: 4px solid black;
  height: 106px;
  width: 190px;
  background-color: white;
  border-radius: 26px;
  box-shadow: 0px 12px 0px 0px rgba(0, 0, 0, 1);
}

.column {
  height: 50px;
}
</style>
