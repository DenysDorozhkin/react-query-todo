import axios from "axios";
import { ITodo } from "./todo.interface";

class TodoService {
  private URL = "https://jsonplaceholder.typicode.com/todos";

  async getAll(limit: number) {
    return axios.get<ITodo[]>(`${this.URL}/?_start=0&_limit=${limit}`);
  }

  async getById(todoId: string) {
    return axios.get<ITodo>(`${this.URL}/${todoId}`);
  }
}

export default new TodoService();
