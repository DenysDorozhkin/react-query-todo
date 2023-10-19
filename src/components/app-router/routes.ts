import { AppRoutesConstant } from "../../utils/constants/app-routes.constant";
import { TodosPage } from "../pages/todos";
import { TodoPage } from "../pages/todos/todo";

export const publicRoutes = [
  {
    path: AppRoutesConstant.TODOS,
    Component: TodosPage,
  },
  {
    path: `${AppRoutesConstant.TODOS}/:id`,
    Component: TodoPage,
  },
];

// export const authRoutes = [
//   {
//     path: AppRoutes.TODOS,
//     Component: TodosPage,
//   },
// ];
