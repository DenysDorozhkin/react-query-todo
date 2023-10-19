import { FC } from "react";
import { errorCatch } from "../../../services/api/api.helper";
import s from "./error.module.scss";

type PropsType = {
  error: unknown;
};

export const Error: FC<PropsType> = ({ error }) => {
  return (
    <div className={s.error}>
      {errorCatch(error) ? errorCatch(error) : "Something went wrong"}
    </div>
  );
};
