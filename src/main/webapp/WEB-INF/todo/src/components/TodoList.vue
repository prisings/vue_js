<template>
  <div>
    <Todo
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
      @toggle-checkbox="togglecheckbox"
      @clickDelete="dClick"
    />
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
export default {
  components: {
    Todo,
  },
  methods: {
    togglecheckbox(value) {
      this.$emit("toggle-checkbox", value);
    },
    dClick(todoId) {
      this.$emit("clickDelete", todoId);
    },
  },
  computed:{
      todos(){
           return this.$store.state.todos;
      }
  }
};
</script>

<style>
</style>