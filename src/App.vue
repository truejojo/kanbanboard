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
          status: 0,
          title: "Neue Aufgaben",
          titleClasses: "bg-danger",
          newTask: true,
        },
        {
          status: 1,
          title: "In Bearbeitung",
          titleClasses: "bg-primary",
          newTask: false,
        },
        {
          status: 2,
          title: "Erledigt",
          titleClasses: "bg-success",
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
  methods: {
    getTasks(status) {
      return this.tasks.filter(task => task.status === status)
    },
  },
};
</script>

<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-4" v-for="card in cards" :key="card.status">
        <StatusCard :card="card" :tasks="getTasks(card.status)" />
      </div>
    </div>
  </div>
</template>

<style>
</style>
