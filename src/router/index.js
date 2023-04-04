import { createRouter, createWebHistory } from "vue-router";
import MainScreen from "../views/MainScreen.vue";
import GameScreen from "../views/GameScreen.vue";
import RulesScreen from "../views/RulesScreen.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: MainScreen,
  },
  {
    path: "/game",
    name: "game",
    component: GameScreen,
  },
  {
    path: "/rules",
    name: "rules",
    component: RulesScreen,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
