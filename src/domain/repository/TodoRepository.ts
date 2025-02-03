import Todo from "../models/Todo";

interface TodoRepository {
    getTodos(): Todo[];
    createTodo(todo: Todo): Boolean;
}

export default TodoRepository;