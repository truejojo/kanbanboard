<script>
import StatusCard from "./components/StatusCard.vue";
export default {
  name: "App",
  components: {
    StatusCard,
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Neue Aufgaben",
          newTask: true,
        },
        {
          id: 2,
          title: "In Bearbeitung",
          newTask: false,
        },
        {
          id: 3,
          title: "Erledigt",
          newTask: false,
        },
      ],
      tasks: [
        {
          id: 1,
          content: "Dashboard überarbeiten.",
          status: 0,
        },
        {
          id: 2,
          content: "Anwendung auf Vue.js umstellen.",
          status: 0,
        },
        {
          id: 3,
          content: "Lorem ipsum dolor sit amet.",
          status: 1,
        },
        {
          id: 4,
          content: "Lorem ipsum dolor.",
          status: 2,
        },
        {
          id: 5,
          content: "Lorem ipsum sit amet.",
          status: 0,
        },
        {
          id: 6,
          content: "Lorem, ipsum.",
          status: 2,
        },
      ],
    };
  },
  computed: {
    newTasks() {
      return this.tasks.filter((task) => task.status === 0);
    },
    inProgressTasks() {
      return this.tasks.filter((task) => task.status === 1);
    },
    completedTasks() {
      return this.tasks.filter((task) => task.status === 2);
    },
  },
  methods: {
    getTasks(index) {
      switch (index) {
        case 0:
          return this.newTasks;
        case 1:
          return this.inProgressTasks;
        case 2:
          return this.completedTasks;
        default:
          return [];
      }
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-4" v-for="(card, index) in cards" :key="card.id">
        <StatusCard :card="card" :tasks="getTasks(index)" />
      </div>
    </div>
  </div>
</template>

<style>
</style>
