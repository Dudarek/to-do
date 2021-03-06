import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import draggable from 'vuedraggable'


// COMPONENTS
import navbar from "./components/NavBar.vue";
import todoNew from "./components/todoNew.vue";
import todoList from "./components/todoList.vue";
import sucsessList from "./components/sucsessList.vue";

Vue.component("v-navbar", navbar);
Vue.component("v-todo-new", todoNew);
Vue.component("v-todo-list", todoList);
Vue.component("v-todo-sucsess-list", sucsessList);
Vue.component("draggable", draggable);

Vue.config.productionTip = false;

const app = new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
		this.$store.commit('initialiseStore');
	}
}).$mount("#app");
app.$store.subscribe((mutation, state) => {
  localStorage.setItem('store', JSON.stringify(state));
})
