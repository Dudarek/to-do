<template>
  <div>
    <div class="h4 mb-2">Список выполненных задач</div>
    <div class="d-flex"  v-if="!Object.keys(listTasks).length == 0">
      <b-list-group-item
        class="text-left py-1 px-1 border-0"
        v-for="task in listTasks"
        :key="task.id"
      >
        <b-button disabled>
          <b-icon :icon="priorityIcons[task.id]"></b-icon>
          <s class="">{{ task.text }}</s>
        </b-button>
      </b-list-group-item>
    </div>
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
    listTasks() {
      return this.$store.state.sucsessTasks;
    }
  }
};
</script>

<style></style>
