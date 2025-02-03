import Todo from "../models/Todo";
import TodoRepository from "../repository/TodoRepository";

class GetTodosUsecase {
    private repository: TodoRepository;

    constructor(repository: TodoRepository) {
        this.repository = repository;
    }

    execute() {
        var todos: Todo[] = [];

        try {
            todos = this.repository.getTodos();
        } catch (error) {
            console.log("[GetTodosUsecase] Error: ", error);
        }

        return todos;
    }
}

export default GetTodosUsecase;