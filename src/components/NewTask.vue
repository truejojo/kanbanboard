<script>
export default {
  name: "NewTask",
  data() {
    return {
      content: "",
    };
  },
  // emits: ["new-task"],
  emits: {
    "new-task": (task) => {
      if (task.content === "") return false;
      return true;
    },
  },
  methods: {
    submitTask() {
      this.$emit("new-task", {
        content: this.content,
      });
      this.content = "";
    },
  },
};
</script>

<template>
  <div>
    <input
      type="text"
      class="form-control"
      placeholder="Neue Aufgabe"
      v-model="content"
    />
    <div class="d-grid my-2">
      <button class="btn btn-danger" @click="submitTask">Eintragen</button>
    </div>
  </div>
</template>

<style></style>
