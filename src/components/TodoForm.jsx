import { memo } from "react";
import { Input, Button, Title } from "../components/export";

const TodoForm = ({submitHandle, todo, updateTodo}) => {
  return (
    <div className="flex items-center py-12 px-4 sm:px-6 lg:px-20">
      <div className=" max-w-md w-full space-y-8">
        <Title title={"Todo Ekle"} />
        <form className="mt-8 space-y-6" onSubmit={submitHandle}>
          <div className="rounded-md shadow-sm -space-y-px">
            <Input
              value={todo}
              onChange={updateTodo}
              title={"Todo"}
              id={"todoList"}
              name={"TodoList"}
              type={"text"}
              autoComplete={"text"}
              placeholder={"Todo Giriniz"}
            />
          </div>
          <Button type="submit" title="Todo Ekle" />
        </form>
      </div>
    </div>
  );
};

// Use Memo
export default memo(TodoForm);
