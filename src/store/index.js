import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentTasks: {
      1: {
        id: 1,
        text: "dsd 1",
        priority: 1
      },
      2: {
        id: 2,
        text: "dsd 2",
        priority: 2
      },
      3: {
        id: 3,
        text: "Сделать 3",
        priority: 3
      }
    },
    currentTasksLastId: 4,
    sucsessTasks: {

    },
    priorityIcons: {
      1: "star",
      2: "sun",
      3: "watch"
    }
  },
  mutations: {
    addTask(state, payload) {
      let id =payload.id
      Vue.set(state.currentTasks, id, payload);
      state.currentTasksLastId++;
    },
    removeTask(state, id) {
      Vue.delete( state.currentTasks, id )
    },
    compleateTask(state, id) {
      Vue.set(state.sucsessTasks, id, state.currentTasks[id]);
      Vue.delete( state.currentTasks, id )
    }
  },
  actions: {},
  modules: {}
});
