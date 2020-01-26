<template>
  <div>
    <div class="h4 mb-2">Список выполненных задач</div>
      <draggable v-model="listTasks" class="d-flex"  v-if="!Object.keys(listTasks).length == 0">
        <b-list-group-item
          class="text-left py-1 px-1 border-0"
          v-for="(task, index) in listTasks"
          :key="index"
        >
          <b-button class="disabled">
            <b-icon :icon="priorityIcons[task.priority]"></b-icon>
            <s>{{ task.text }}</s>
          </b-button>
        </b-list-group-item>
      </draggable>
    <p v-else>На данный момент выполненных задач нет</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    priorityIcons() {
      return this.$store.state.priorityIcons;
    },
    listTasks: {
      get() {
        return this.$store.state.sucsessTasks;
      },
      set(newList) {
        this.$store.commit('updateSucsessList', newList)
      }
    }
  }
};
</script>

<style></style>
