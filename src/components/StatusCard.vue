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
};
</script>

<template>
  <div class="card">
    <div class="card-header text-center text-white" :class="`bg-${card.bgColor}`">
      <h4>{{ card.title }}</h4>
    </div>
    <div class="card-body">
      <Task v-for="task in tasks" :task="task" :bgColor="card.bgColor" />
    </div>
    <div v-if="card.newTask" class="card-footer">
      <NewTask />
    </div>
  </div>
</template>

<style></style>
