<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
    },
    bgColor: {
      type: String,
    }
  },
};
</script>

<template>
  <div class="alert" :class="`alert-${bgColor}`">
    <h4>{{ task.content }}</h4>
  </div>
</template>

<style></style>
