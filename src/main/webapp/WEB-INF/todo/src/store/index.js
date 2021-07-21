import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        todos: [
            { id: 1, text: "someThing sold", checked: false },
            { id: 2, text: "someThing buy", checked: false },
        ]
    },
    mutations: {
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false,
            });
        },
        TOGGLE_TODO(state, { id, checked }) {
            const index = state.todos.findIndex((todo) => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex((todo) => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        }
    },
    actions: {
        addTodo({ commit }, value) {
            setTimeout(function () {
                commit('ADD_TODO', value);
            }, 2000);
        }
    },
    getters: {

    }
})