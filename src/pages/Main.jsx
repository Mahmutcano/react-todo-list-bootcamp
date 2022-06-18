import { memo, useReducer } from "react";
import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import reducer from "../reducer/reducer";
import SearchForm from "../components/SearchForm";

const Main = () => {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: "",
    completed: false,
    filterCompleted: false,
  });

  // Context User
  const { user } = useUser();

  // User Login Sayfasına Yönlendirme
  if (!user) {
    return <Navigate to="/login" />;
  }

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      todo: state.todo,
      userId: user.id,
    });
  };

  const updateTodo = (e) => {
    dispatch({
      type: "UPDATE_TODO",
      value: e.target.value,
    });
  };

  const deleteTodo = (index) => {
    alert("Eminsin");
    dispatch({
      type: "DELETE_TODO",
      index,
    });
  };

  const updateCompleted = (e) => {
    dispatch({
      type: "UPDATE_COMPLETED",
      value: e.target.checked,
    });
    alert("Tammalandı");
  };

  const toggleTodo = (index) => {
    dispatch({
      type: "TOGGLE_TODO",
      index,
    });
  };

  return (
    <div>
      <Header />
      <div className="grid sm:flex justify-center">
        <div className="grid sm:grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center">
          <div className="text-lg font-bold text-center p-5 rounded-lg">
            {/* Todo Input */}
            <TodoForm
              todo={state.todo}
              submitHandle={submitHandle}
              updateTodo={updateTodo}
              updateCompleted={updateCompleted}
            />
          </div>
          <div className="text-lg font-bold text-center p-5 rounded-lg">
            {/* List */}
            <TodoList todos={state.todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo}/>
          </div>
          <div className="text-lg font-bold text-center p-5 rounded-lg">
            {/* Takvim */}
            <SearchForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Main);
