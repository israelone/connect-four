<template>
  <div
    class="flex items-center justify-center gap-2 w-6 mx-auto my-0 h-7 flex-col flex-wrap"
  >
    <div class="button bg-red-500"></div>
    <div class="button bg-yellow-500"></div>
    <div class="button bg-yellow-500"></div>
    <div class="button bg-red-500"></div>
  </div>
  <div class="flex justify-center flex-col items-center gap-10">
    <button class="bg-red-500 text-white">PLAY VS CPU</button>
    <button class="bg-yellow-500 text-black">PLAY VS PLAYER</button>
    <button class="bg-white text-black">GAME RULES</button>
  </div>
</template>

<style scoped>
.button {
  border-radius: 100%;
  height: 10px;
  border: 1px solid black;
  width: 10px;
  -webkit-box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 1);
}

button {
  text-align: left;
  padding: 0 15px;
  height: 48px;
  border: 2px solid black;
  width: 18rem;
  border-radius: 10px;
  -webkit-box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 1);
}
</style>

<script>
export default {
  name: "GamePlayOptions",
};
</script>
