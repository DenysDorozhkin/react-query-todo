import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FC } from "react";
// import { publicRoutes, authRoutes } from "./routes";
import { publicRoutes } from "./routes";
import { TodosPage } from "../pages/todos";

export const AppRouter: FC = () => {
  // const isAuth = true;

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map(({ path, Component }) => {
          return <Route key={path} path={path} element={<Component />} />;
        })}
        {/* {isAuth &&
          authRoutes.map(({ path, Component }) => {
            return <Route key={path} path={path} element={<Component />} />;
          })} */}
        <Route path="*" element={<TodosPage />} />
      </Routes>
    </BrowserRouter>
  );
};
