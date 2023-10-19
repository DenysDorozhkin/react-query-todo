import { FC } from "react";
import s from "./loader.module.scss";

export const Loader: FC = () => {
  return (
    <div className={s.loader}>
      <div className={s.cubeFolding}>
        <span className={s.leaf1}></span>
        <span className={s.leaf2}></span>
        <span className={s.leaf3}></span>
        <span className={s.leaf4}></span>
      </div>
    </div>
  );
};
