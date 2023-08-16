<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
    },
    alertColor: {
      type: String,
      default: "secondary"
    }
  },
};
</script>

<template>
  <div class="alert" :class="`alert-${alertColor}`">
    <h4>{{ task.content }}</h4>
  </div>
</template>

<style></style>
