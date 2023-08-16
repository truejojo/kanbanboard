<script>
import Task from "./Task.vue";
import NewTask from "./NewTask.vue";

export default {
  name: "StatusCard",
  components: {
    Task,
    NewTask,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
    tasks: {
      type: Array,
    },
  },
  methods: {
    setBG(index) {
      return index === 1
        ? ["bg-danger"]
        : index === 2
        ? ["bg-primary"]
        : ["bg-success"];
    },
  },
};
</script>

<template>
  <div class="card">
    <div class="card-header text-center text-white" :class="setBG(card.id)">
      <h4>{{ card.title }}</h4>
    </div>
    <div class="card-body">
      <Task v-for="task in tasks" :task="task" />
    </div>
    <div v-if="card.newTask" class="card-footer">
      <NewTask />
    </div>
  </div>
</template>

<style></style>
