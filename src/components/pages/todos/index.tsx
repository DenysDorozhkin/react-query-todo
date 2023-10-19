import { FC } from "react";
import { TodosLayout } from "../../layouts/todos";
import { TodosView } from "../../views/todos";

export const TodosPage: FC = () => {
  return (
    <TodosLayout center={false}>
      <TodosView />
    </TodosLayout>
  );
};
