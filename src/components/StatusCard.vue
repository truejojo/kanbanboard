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
  emits: {
    "new-task": (task) => {
      if ("status" in task === false) return false;
      return true;
    },
    "status-updated": (statusDataObj) => {
      if ("newStatus" in statusDataObj === false) return false;
      return true;
    },
  },
  methods: {
    newTask(task) {
      task.status = this.card.status;
      this.$emit("new-task", task);
    },
    startDrag(event, task) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("taskId", task.id);
    },
    onDrop(event) {
      const taskId = event.dataTransfer.getData("taskId");
      this.$emit(
        "status-updated", 
        { taskId: taskId, newStatus: this.card.status })
      ;
    },
  },
};
</script>

<template>
  <div class="card" @drop="onDrop($event)" @dragover.prevent @dragenter.prevent>
    <div
      class="card-header text-center text-white"
      :class="`bg-${card.bgColor}`"
    >
      <h4>{{ card.title }}</h4>
    </div>
    <div class="card-body">
      <Task
        v-for="task in tasks"
        :task="task"
        :alertColor="card.bgColor"
        draggable="true"
        @dragstart="startDrag($event, task)"
      />
    </div>
    <div v-if="card.newTask" class="card-footer">
      <NewTask @new-task="newTask" />
    </div>
  </div>
</template>

<style></style>
