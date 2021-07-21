<template>
  <input
    v-model="todotext"
    type="text"
    class="w-100 p-2"
    placeholder="Type ToDo"
    @keyup.enter="addToDo"
  />
</template>

<script>
export default {
  data() {
    return {
      todotext: "",
    };
  },
  methods: {
    addToDo(e) {
      this.$store.dispatch("addTodo", e.target.value);
      this.todotext = "";
    },
  },
};
</script>

<style>
</style>