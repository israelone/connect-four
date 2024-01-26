<template>
  <div class="container">
    <div class="rules">
      <span>RULES</span>
      <div class="objective">
        <h3>OBJECTIVE</h3>
        <p>
          Be the first player to connect 4 of the same colored discs in a row
          (either vertically, horizontally, or diagonally).
        </p>
      </div>
      <div class="how-to">
        <h3>HOW TO PLAY</h3>
        <ol>
          <li>Red goes first in the first game.</li>
          <li>
            Players must alternate turns, and only one disc can be dropped in
            each turn.
          </li>
          <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
          <li>
            The starter of the previous game goes second on the next game.
          </li>
        </ol>
      </div>
      <router-link to="/">
        <img src="../assets/images/icon-check.svg" />
      </router-link>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.rules {
  width: 335px;
  height: 586px;
  border-radius: 40px;
  border: 3px solid black;
  background: white;
  box-shadow: 0px 10px 0px 0px rgba(0, 0, 0, 1);
  padding: 30px 20px;
}
span {
  display: block;
  text-align: center;
  font-size: 56px;
  font-weight: 700;
}
h3 {
  margin: 16px 0;
  color: #7945ff;
  font-weight: 700;
}
ol {
  list-style: decimal;
  padding-inline-start: 20px;
}

p,
li {
  opacity: 0.6611;
}

li:before {
  color: black;
}

img {
  margin: 28px auto;
}
.container {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7945ff;
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .rules {
    width: 480px;
    height: 537px;
    padding-left: 34px;
    padding-right: 34px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 100%;
  }
  .rules {
    width: 480px;
    height: 537px;
    padding-left: 34px;
    padding-right: 34px;
  }
}
</style>
