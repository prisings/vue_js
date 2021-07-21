<template>
  <div class="mb-2 d-flex">
    <div>
      <input type="checkbox" :checked="todo.checked" @change="togglecheckbox" />
    </div>
    <span
      class="ml-3 flex-grow-1"
      :class="todo.checked ? 'text-muted' : ''"
      :style="todo.checked ? 'text-decoration: line-through' : ''"
    >
      {{ todo.text }}
    </span>
    <button class="btn btn-danger btn-sm" @click="dClick">Delete</button>
  </div>
</template>

<script>
//export default 가 없으면 다른곳에서 import가 안된다.
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  methods: {
    togglecheckbox(e) {
      this.$store.commit("TOGGLE_TODO", {
        id: this.todo.id,
        checked: e.target.checked,
      });
    },
    dClick() {
      this.$store.commit("DELETE_TODO", this.todo.id);
    },
  },
};
</script>

