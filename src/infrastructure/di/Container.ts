import { DIContainer } from "rsdi";
import RealmRepository from "../repository/RealmRepository";
import GetTodosUsecase from "../../domain/usecases/GetTodosUsecase";
import CreateTodoUsecase from "../../domain/usecases/CreateTodoUsecase";

function configureDI() {
    const container = new DIContainer()
        .add("todoRepository", () => new RealmRepository())
        .add("getTodosUsecase", () => new GetTodosUsecase(container.todoRepository))
        .add("createTodoUsecase", () => new CreateTodoUsecase(container.todoRepository))

    return container;
}

export const Container = configureDI();

