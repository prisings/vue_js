<template>
  <div>completed Todo:{{ numberofcompletedTodo }}

  </div>
</template>

<script>
export default {

  computed: {
    todos(){
        return this.$store.state.todos;
    },
    numberofcompletedTodo() {
      return this.todos.filter((todo) => todo.checked).length;
    },
  },
};
</script>

<style>
</style>