import { FC, useState } from "react";
import s from "./todos-view.module.scss";
import { Link } from "react-router-dom";
import { AppRoutesConstant } from "../../../utils/constants/app-routes.constant";
import { useTodos } from "../../../hooks/useTodos";
import { Loader } from "../../common/loader";
import { ITodo } from "../../../services/todo/todo.interface";
import clsx from "clsx";
import { useQueryClient } from "@tanstack/react-query";
import { QueryKeysConstant } from "../../../utils/constants/query-keys.constant";
import { Error } from "../../common/error";

export const TodosView: FC = () => {
  const [todosCount, setTodosCount] = useState<string>("7");

  const { isLoading, error, data, refetch } = useTodos(
    isNaN(parseInt(todosCount)) ? 0 : parseInt(todosCount)
  );

  const queryClient = useQueryClient();

  const handleTodosCount = (): void => {
    refetch();
  };

  return (
    <>
      {error ? <Error error={error} /> : <></>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <button className={s.create}>Create Todo</button>
          <div className={s.actions}>
            <button
              className={s.refetch}
              onClick={() =>
                queryClient.invalidateQueries([QueryKeysConstant.TODOS])
              }
            >
              Refetch
            </button>
            <label className={s.count}>
              Todos count:
              <input
                onChange={(event) =>
                  setTodosCount(parseInt(event.target.value).toString())
                }
                type="number"
                min="0"
                placeholder="Count of todos"
                value={todosCount}
              />
            </label>
            <button className={s.changeCount} onClick={handleTodosCount}>
              Change todos count
            </button>
          </div>
          <h1 className={s.title}>
            Todos: <span>(count - {data?.length})</span>
          </h1>
          {data?.length ? (
            data.map((todo: ITodo) => (
              <Link
                to={`${AppRoutesConstant.TODOS}/${todo.id}`}
                key={todo.id}
                className={s.item}
              >
                <b>{todo.id}</b>: {todo.title} -{" "}
                <span className={!todo.completed ? s.false : ""}>
                  {todo.completed.toString()}
                </span>
              </Link>
            ))
          ) : (
            <h1 className={clsx(s.title, s.title__default)}>No data...</h1>
          )}
        </>
      )}
    </>
  );
};
