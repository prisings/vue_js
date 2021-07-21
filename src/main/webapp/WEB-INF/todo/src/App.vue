<template>
  <div id="app" class="container">
    <h1 class="text-center">ToDo App Practice</h1>
    <compleTodo  />
    <addTodo />
    <hr />
    <TodoList/>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import addTodo from "@/components/addTodo.vue";
import compleTodo from "@/components/compleTodo.vue";
export default {
  components: {
    TodoList,
    addTodo,
    compleTodo,
  },
  data() {
    return {
      todotext: "",
    };
  },
  methods: {
  },
};
</script>


<style>
</style>
