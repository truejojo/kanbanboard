export default {
  mounted() {
    this.writeLogEntry("Component ist nun vollständig geladen.")
  },
  methods: {
    writeLogEntry(text) {
      console.log(text);
    }
  }
}