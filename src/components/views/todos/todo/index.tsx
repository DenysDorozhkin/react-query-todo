import { FC } from "react";
import s from "../todos-view.module.scss";
import { Link, useParams } from "react-router-dom";
import { useTodo } from "../../../../hooks/useTodos";
import { Loader } from "../../../common/loader";
import clsx from "clsx";
import { AppRoutesConstant } from "../../../../utils/constants/app-routes.constant";
import { BiArrowBack } from "react-icons/bi";
import { Error } from "../../../common/error";

export const TodoView: FC = () => {
  const { id } = useParams();

  const { isLoading, error, data } = useTodo(id as string);

  return (
    <div className={error ? clsx(s.todo, s.todo__error) : s.todo}>
      {error ? <Error error={error} /> : <></>}
      {isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <b>{data.id}</b>: <h1>{data.title}</h1> -
          <span className={!data.completed ? s.false : ""}>
            {data.completed.toString()}
          </span>
        </>
      ) : (
        <h1 className={clsx(s.title, s.title__noColor)}>No data...</h1>
      )}
      <Link to={AppRoutesConstant.TODOS} className={s.back}>
        <BiArrowBack />
      </Link>
    </div>
  );
};
