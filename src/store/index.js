import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentTasks: [
    ],
    currentTasksLastId: 4,
    sucsessTasks: [],
    priorityIcons: {
      1: "star",
      2: "sun",
      3: "watch"
    }
  },
  mutations: {
    initialiseStore(state) {
			// Check if the ID exists
			if(localStorage.getItem('store')) {
				// Replace the state object with the stored item
				this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},
    addTask(state, payload) {
      // let id = payload.id
      // Vue.set(state.currentTasks, id, payload);
      state.currentTasks.push(payload)
      // state.currentTasksLastId++;
    },
    removeTask(state, id) {
      
      Vue.delete( state.currentTasks, id )
    },
    compleateTask(state, id) {
      // Vue.set(state.sucsessTasks, id, state.currentTasks[id]);
      // console.log(state.sucsessTasks)
      state.sucsessTasks.push(state.currentTasks[id]);
      Vue.delete( state.currentTasks, id )
    },
    updateList(state, newList) {
      state.currentTasks = newList;
    },
    updateSucsessList(state, newList) {
      state.sucsessTasks = newList;
    }
  },
  actions: {},
  modules: {}
});
