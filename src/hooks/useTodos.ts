import { useQuery } from "@tanstack/react-query";
import todoService from "../services/todo/todo.service";
import { ToastEnum } from "../components/common/toast/toast-type.enum";
import { errorCatch } from "../services/api/api.helper";
import { notify } from "../components/common/toast/notify";
import { QueryKeysConstant } from "../utils/constants/query-keys.constant";

export const useTodos = (limit: number) => {
  return useQuery([QueryKeysConstant.TODOS], () => todoService.getAll(limit), {
    select: ({ data }) => data,
    retry: 1,
    onSuccess() {
      notify("Todos successfully fetched", ToastEnum.SUCCESS);
    },
    onError(err) {
      const errorMessage = errorCatch(err);
      if (errorMessage) {
        notify(errorCatch(err), ToastEnum.ERROR);
      } else {
        notify("Something went wrong...", ToastEnum.ERROR);
      }
    },
  });
};

export const useTodo = (todoId: string) => {
  return useQuery(
    [QueryKeysConstant.TODOS, todoId],
    () => todoService.getById(todoId),
    {
      select: ({ data }) => data,
      retry: 1,
      enabled: !!todoId,
      onSuccess() {
        notify("Todo successfully fetched", ToastEnum.SUCCESS);
      },
      onError(err) {
        const errorMessage = errorCatch(err);
        if (errorMessage) {
          notify(errorCatch(err), ToastEnum.ERROR);
        } else {
          notify("Something went wrong...", ToastEnum.ERROR);
        }
      },
    }
  );
};
