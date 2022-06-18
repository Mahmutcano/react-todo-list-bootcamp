function reducer(state, action) {
  // eslint-disable-next-line default-case
  switch (action.type) {
    // Burda Todoları Set Ediyoruz.
    case "UPDATE_TODO":
      return {
        ...state,
        todo: action.value,
      };
    // Burda Todoları Ekliyoruz ve Input todo: "" yaparak boşaltıyoruz.
    case "ADD_TODO":
      return {
        ...state,
        todo: "",
        todos: [...state.todos, action.todo],
      };

    case "UPDATE_COMPLETED":
      return {
        ...state,
        completed: action.value,
      };

      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: [
            ...state.todos.map((todo, index) => {
              if (action.index === index) {
                todo.completed = !todo.completed
              }
              return todo
            })
          ]
        }

    case "DELETE_TODO":
      return {
        ...state,
        todos: [...state.todos.filter((todo, index) => index !== action.index)],
      };
  }
}

export default reducer;
