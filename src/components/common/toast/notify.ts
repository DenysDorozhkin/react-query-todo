import { toast } from "react-toastify";
import { ToastEnum } from "./toast-type.enum";

export const notify = (message: string, type: ToastEnum) =>
  toast[type](message);
