import { memo } from "react";
import TodoItem from "./TodoItem";
import Button from "./Button";

const TodoList = ({ todos, deleteTodo }) => {
  return (
    // Todo
    <div className="grid shadow-lg border border-pink-500 rounded-lg">
      <h4 className="text-brand-pink">Todo Listesi</h4>
      <ul className="grid gap-1">
        {(todos.length > 0 &&
          todos.map((todo, index) => (
            <div key={index}>
              <TodoItem todo={todo} />
              <Button
                title={"Sil"}
                type={"submit"}
                onClick={() => deleteTodo(index)}
              />
            </div>
          ))) || <p>Henüz Todo Yok</p>}
      </ul>
    </div>
  );
};

export default memo(TodoList);
