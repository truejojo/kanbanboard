<script>
export default {
  name: "Task",
  data() {
    return {
      isUpdate: false,
      newStatus: this.task.status,
    };
  },
  props: {
    task: {
      type: Object,
    },
    alertColor: {
      type: String,
      default: "secondary",
    },
  },
  methods: {
    toggleIsUpdate() {
      this.isUpdate = !this.isUpdate;
    },
    updateStatus() {
      this.task.status = parseInt(this.newStatus);
      this.toggleIsUpdate();
      console.log(this.task.status);
    },
  },
};
</script>

<template>
  <div
    v-if="!isUpdate"
    class="alert"
    :class="`alert-${alertColor}`"
    @click="toggleIsUpdate"
  >
    <h4>{{ task.content }}</h4>
  </div>
  <div v-else class="alert text-white" :class="`bg-${alertColor}`">
    <h4>Neuen Status</h4>
    <select class="form-select mt-2" v-model="newStatus">
      <option value="0">Neue Aufgabe</option>
      <option value="1">In Bearbeitung</option>
      <option value="2">Erledigt</option>
    </select>
    <div class="d-grid">
      <button class="btn btn-dark mt-4 text-uppercase" @click="updateStatus">
        <strong>Submit</strong>
      </button>
    </div>
  </div>
</template>

<style></style>
