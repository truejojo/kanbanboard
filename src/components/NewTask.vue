<script>
export default {
  name: "NewTask",
  // ist nicht reaktiv...
  inject: ["maxNumberOfChars"],
  data() {
    return {
      content: "",
      mode: "click"
    };
  },
  // emits: ["new-task"],
  emits: {
    "new-task": (task) => {
      if (task.content === "") return false;
      return true;
    },
  },
  computed: {
      numberOfCharsleft() {
      return this.maxNumberOfChars - this.content.length;
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
      v-focus="{color: 'pink'}"
    />
    <p class="mt-2 text-center text-muted"><i>Noch vorhandene Zeichen {{ numberOfCharsleft }}</i></p>
    <div class="d-grid my-2">
      <button class="btn btn-danger" @[mode]="submitTask">Eintragen</button>
    </div>
    <!-- Nicht die Beste Lösung -->
    <teleport to="#settings">
      <select class="form-select" v-model="mode">
        <option value="click">Click</option>
        <option value="dblclick">Doppel-Click</option>
      </select>
    </teleport>
  </div>
</template>

<style></style>
