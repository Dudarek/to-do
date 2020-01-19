<template>
  <div class="">
    <div class="h4">Список текущих задач</div>
    <div v-if="!Object.keys(listTasks).length == 0">
      <b-list-group-item
        class="text-left d-flex justify-content-start align-items-center"
        v-for="task in listTasks"
        :key="task.id"
        horizontal
      >
        <b-icon :icon="priorityIcons[task.priority]"></b-icon>
        {{ task.text }}
        <b-btn class="ml-auto" @click="compleateTask(task.id)"
          >Завершить
        </b-btn>
        <b-btn class="ml-1" @click="removeTask(task.id)">Удалить </b-btn>
      </b-list-group-item>
    </div>
    <p v-else>На данный момент задач нет</p>
  </div>
</template>

<script>
export default {
  data: () => {
    return {};
  },
  computed: {
    listTasks() {
      return this.$store.state.currentTasks;
    },
    priorityIcons() {
      return this.$store.state.priorityIcons;
    }
  },
  methods: {
    removeTask: function(id) {
      this.$store.commit("removeTask", id);
    },
    compleateTask: function(id) {
      this.$store.commit("compleateTask", id);
    }
  }
};
</script>

<style></style>
