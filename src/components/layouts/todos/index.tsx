import { FC, ReactNode } from "react";
import clsx from "clsx";
import s from "./todos-layout.module.scss";
import { Toast } from "../../common/toast";

type PropsType = {
  children: ReactNode;
  center: boolean;
};

export const TodosLayout: FC<PropsType> = ({ children, center }) => {
  return (
    <div
      className={
        center
          ? clsx(s.main, s.main__center, "_container")
          : clsx(s.main, "_container")
      }
    >
      {children}
      <Toast />
    </div>
  );
};
