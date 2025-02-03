import Todo from "../models/Todo";
import TodoRepository from "../repository/TodoRepository";

class CreateTodoUsecase {
    private repository: TodoRepository;

    constructor(repository: TodoRepository) {
        this.repository = repository;
    }

    execute(todo: Todo): Boolean {
        return this.repository.createTodo(todo);
    }
}

export default CreateTodoUsecase;