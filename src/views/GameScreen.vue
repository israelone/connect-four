<template>
  <div class="container">
    <TopMenu :playAgain="playAgain" />
    <ScoreKeepers />
    <div class="">
      <div class="clear-layer">
        <GameColumn
          :currentPlayer="currentPlayer"
          :endPlayerTurn="endPlayerTurn"
          :addMoveToGameGrid="addMoveToGameGrid"
          v-for="i in 7"
          :columnNumber="i - 1"
          :key="i"
          :gameEnded="gameEnded"
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
      <div
        v-if="winner"
        class="z-10 relative bottom-6 box bg-white m-auto w-10/12 p-6"
      >
        <span class="block text-center text-black">PLAYER 1</span>
        <span class="block text-center text-5xl text-black">WINS </span>
        <button @click="playAgain" class="bg-violet-500 block m-auto">
          PLAY AGAIN
        </button>
      </div>
      <div v-else class="z-10 relative bottom-6">
        <img class="m-auto" :src="playerTurnBackground" />
        <div class="relative bottom-28">
          <span class="block text-center text-white">{{
            currentPlayer + "'S TURN"
          }}</span>
          <span class="block text-center text-5xl text-white">{{
            timer + "s"
          }}</span>
        </div>
      </div>
    </div>
    <div
      class="w-full h-64 z-0 absolute bottom-0 rounded-t-3xl bg-violet-500"
      :style="{
        backgroundColor:
          winner === 'PLAYER 1'
            ? '#FD6687'
            : winner === 'PLAYER 2'
            ? '#FFCE69'
            : '',
      }"
    ></div>
  </div>
</template>

<script>
import GameColumn from "@/components/GameColumn.vue";
import ScoreKeepers from "@/components/ScoreKeepers.vue";
import TopMenu from "@/components/TopMenu.vue";
import PlayerOneTurnBackground from "../assets/images/turn-background-red.svg";
import PlayerTwoTurnBackground from "../assets/images/turn-background-yellow.svg";

export default {
  name: "GameScreen",
  mounted() {
    this.startTimer();
  },
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
      timer: 0,
      playerOneScore: 0,
      playerTwoScore: 0,
      showArrow: false,
      winner: "",
      intervalId: null,
      gameStarted: false,
      gameEnded: false,
    };
  },
  methods: {
    startTimer() {
      this.intervalId = setInterval(() => {
        this.timer++;
        if (this.timer === 16) {
          this.endPlayerTurn();
        }
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.intervalId);
      this.intervalId = null;
      this.timer = 0;
    },
    endPlayerTurn() {
      this.timer = 0;
      if (this.currentPlayer === "PLAYER 1") {
        this.currentPlayer = "PLAYER 2";
        this.playerTurnBackground = PlayerTwoTurnBackground;
      } else {
        this.currentPlayer = "PLAYER 1";
        this.playerTurnBackground = PlayerOneTurnBackground;
      }
    },
    addMoveToGameGrid(row, column) {
      this.gameGrid[row][column] = this.currentPlayer;
      this.checkForWinner(row, column);
    },
    endGame() {
      this.stopTimer();
      this.gameEnded = true;
      this.gameGrid = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ];
    },
    checkForWinner() {
      if (
        this.checkForWinnerHorizontally() ||
        this.checkForWinnerVertically() ||
        this.checkForWinnerUpRight() ||
        this.checkForWinnerUpLeft()
      ) {
        this.endGame();
        this.winner = this.currentPlayer;
      }
    },
    checkForWinnerVertically() {
      let count = 0;
      for (let y = 0; y < 7; y++) {
        count = 0;
        for (let x = 5; x >= 0; x--) {
          if (this.gameGrid[x][y] === this.currentPlayer) {
            count++;
            if (count === 4) {
              return true;
            }
          } else {
            count = 0;
          }
        }
      }
      return false;
    },
    checkForWinnerHorizontally() {
      let count = 0;
      for (let x = 5; x >= 0; x--) {
        count = 0;
        for (let y = 0; y < 7; y++) {
          if (this.gameGrid[x][y] === this.currentPlayer) {
            count++;
            if (count === 4) {
              return true;
            }
          } else {
            count = 0;
          }
        }
      }
      return false;
    },
    checkForWinnerUpRight() {
      let winnerFound = false;
      const upRightEntryPoints = [
        [3, 0],
        [4, 0],
        [5, 0],
        [5, 1],
        [5, 2],
        [5, 3],
      ];
      let count = 0;
      const recursion = (x, y) => {
        if (x < 6 && x >= 0 && y < 7 && y >= 0) {
          if (this.gameGrid[x][y] === this.currentPlayer) {
            console.log(x, y, this.currentPlayer, count);
            count++;
            if (count === 4) {
              winnerFound = true;
            }
            recursion(x - 1, y + 1);
          } else {
            count = 0;
            recursion(x - 1, y + 1);
          }
        } else {
          return false;
        }
      };
      for (const entryPoint in upRightEntryPoints) {
        if (winnerFound) {
          return true;
        }

        recursion(
          upRightEntryPoints[entryPoint][0],
          upRightEntryPoints[entryPoint][1]
        );
      }
      return false;
    },
    checkForWinnerUpLeft() {
      let winnerFound = false;
      const upLeftEntryPoints = [
        [3, 6],
        [4, 6],
        [5, 6],
        [5, 5],
        [5, 4],
        [5, 3],
      ];
      let count = 0;
      const recursion = (x, y) => {
        if (x < 6 && x >= 0 && y < 7 && y >= 0) {
          // console.log(x, y, this.gameGrid[x][y]);
          if (this.gameGrid[x][y] === this.currentPlayer) {
            count++;
            if (count === 4) {
              winnerFound = true;
            }
            recursion(x - 1, y - 1);
          } else {
            count = 0;
            recursion(x - 1, y - 1);
          }
        } else {
          return false;
        }
      };
      for (const entryPoint in upLeftEntryPoints) {
        if (winnerFound) {
          return true;
        }
        recursion(
          upLeftEntryPoints[entryPoint][0],
          upLeftEntryPoints[entryPoint][1]
        );
      }
      return false;
    },
    restartGame() {
      this.playAgain();
      this.playerOneScore = 0;
      this.playerTwoScore = 0;
    },
    playAgain() {
      this.timer = 0;
      this.winner = "";
      this.gameEnded = false;
      this.startTimer();
    },
  },
  components: { GameColumn, ScoreKeepers, TopMenu },
};
</script>

<style scoped>
.logo {
  width: 47px;
}

.container {
  display: flex;
  flex-direction: column;
  padding-top: 17px;
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

.box {
  background-color: white;
  border-radius: 26px;
  box-shadow: 0px 12px 0px 0px rgba(0, 0, 0, 1);
  border: 4px solid black;
}
</style>
