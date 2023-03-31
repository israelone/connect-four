<template>
  <div
    class="column"
    @mouseover="showArrow = true"
    @mouseleave="showArrow = false"
    @click="($event) => addDisc($event)"
  >
    <img
      v-if="showArrow"
      class="m-auto absolute"
      src="../assets/images/marker-red.svg"
    />
    <img
      class="marker"
      v-for="(row, index) in column"
      :key="index"
      :src="row.src"
      :style="{ top: row.top + 'px' }"
    />
  </div>
</template>

<style scoped>
.column {
  cursor: pointer;
}
@keyframes myAnim {
  0% {
    animation-timing-function: ease-in;
    opacity: 1;
    transform: translateY(-50px);
  }

  24% {
    opacity: 1;
  }

  40% {
    animation-timing-function: ease-in;
    transform: translateY(-24px);
  }

  65% {
    animation-timing-function: ease-in;
    transform: translateY(-12px);
  }

  82% {
    animation-timing-function: ease-in;
    transform: translateY(-6px);
  }

  93% {
    animation-timing-function: ease-in;
    transform: translateY(-4px);
  }

  25%,
  55%,
  75%,
  87% {
    animation-timing-function: ease-out;
    transform: translateY(0px);
  }

  100% {
    animation-timing-function: ease-out;
    opacity: 1;
    transform: translateY(0px);
  }
}

.marker {
  display: block;
  width: 100%;
  top: 195px;
  transition: top ease-in 0.5s;
  width: 100%;
  animation: myAnim-198497d0 2s ease 0s 1 normal forwards;
  position: relative;
}
</style>
<!-- 425
366
 69   -->
<script>
import RedCounter from "../assets/images/counter-red-small.svg";
import YellowCounter from "../assets/images/counter-yellow-small.svg";
export default {
  data() {
    return {
      showArrow: false,

      column: [],
    };
  },
  props: [
    "currentPlayer",
    "endPlayerTurn",
    "columnNumber",
    "addMoveToGameGrid",
  ],
  methods: {
    addDisc(e) {
      if (this.column.length < 6) {
        this.column.push({
          src: this.currentPlayer === "PLAYER 1" ? RedCounter : YellowCounter,
          top: 376 - this.column.length * 119.5,
        });
        this.addMoveToGameGrid(6 - this.column.length, this.columnNumber);
        this.endPlayerTurn();
      }

      console.log(e);
    },
  },
};
</script>
