import { FC } from "react";
import { TodosLayout } from "../../../layouts/todos";
import { TodoView } from "../../../views/todos/todo";

export const TodoPage: FC = () => {
  return (
    <TodosLayout center={true}>
      <TodoView />
    </TodosLayout>
  );
};
