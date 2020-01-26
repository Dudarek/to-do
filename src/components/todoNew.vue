<template>
  <div class="container-flid py-2">
    <div class="row">
      <div class="col-12 h4 mb-3">Создайте новую задачу</div>
    </div>
    <form class="row">
      <div class="col-8">

        <b-form-input
          type="text"
          placeholder="Введите текст"
          v-model="newTask.text"
        ></b-form-input>
      </div>
      <div class="col-4 ">
        <b-button
          type="submit"
          block
          variant="secondary"
          @click="addTask"
          :disabled="!newTask.text"
          >Добавить задачу</b-button
        >
      </div>
    </form>
      <div class="row">
        <div class="col-12 pt-2 text-left">
        <b-form-group>
          <label 
            v-for="item in taskPriorityOptions"
            :key="item.id"
            class="btn btn-secondary mr-1 btn-sm"
            :class="item.value == newTask.priority ? 'active' : ''"
            
          >
              <b-icon :icon="item.icon"></b-icon>
              {{ item.text }}
            <input 
              type="radio" 
              name="priority" 
              v-model="newTask.priority" 
              :value="item.value"
              class="invisible"
            >
          </label>
        </b-form-group>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      newTask: {
        text: null,
        priority: null
      },
      // taskPriority: null,
      taskPriorityOptions: [
        {
          value: 1,
          text: "Важное",
          icon: "star"
        },
        {
          value: 2,
          text: "Обычное",
          icon: "sun"
        },
        {
          value: 3,
          text: "Неважное",
          icon: "watch"
        }
      ]
    };
  },
  methods: {
    addTask: function() {
      if (this.newTask.text) {
        this.newTask.id = this.$store.state.currentTasksLastId;
        this.$store.commit("addTask", this.newTask);
        this.newTask = {
          text: null,
          priority: null
        }
      }
    }
  }
};
</script>

<style></style>
