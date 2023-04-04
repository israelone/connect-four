<template>
  <div>
    <div class="flex items-center justify-between px-4">
      <router-link to="/">
        <button>MENU</button>
      </router-link>
      <img class="logo" src="../assets/images/logo.svg" />
      <button>RESTART</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopMenu",
};
</script>
<style scoped>
button {
  background-color: rgb(0 0 0 / 34%);
  width: 110px;
  border-radius: 18px;
  color: white;
  height: 35px;
}
</style>
