<script>
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
    },
  },
  methods: {
    setBG(index) {
      return index === 0
        ? ["alert-danger"]
        : index === 1
        ? ["alert-primary"]
        : ["alert-success"];
    },
  },
};
</script>

<template>
  <div class="alert" :class="setBG(task.status)">
    <h4>{{ task.content }}</h4>
  </div>
</template>

<style></style>
