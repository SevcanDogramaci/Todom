import { describe, expect, test } from "@jest/globals";
import { mock } from 'jest-mock-extended';
import TodoRepository from "../../repository/TodoRepository";
import Todo from "../../models/Todo";
import Status from "../../models/Status";
import GetTodosUsecase from "../GetTodosUsecase";

describe('Get Todos Usecase', () => {
    const mockTodoRepository = mock<TodoRepository>();

    test('given todos then it should return todos', () => {
        const usecase = new GetTodosUsecase(mockTodoRepository);
        const mockTodos = [
            new Todo('test todo detail 1', Status.PENDING),
            new Todo('test todo detail 2', Status.COMPLETED)
        ];
        mockTodoRepository.getTodos.mockReturnValue(mockTodos);

        const todos = usecase.execute();

        expect(todos).toHaveLength(2);
        expect(mockTodoRepository.getTodos).toBeCalled();
    });

    test('given repository fails then it should return empty todos', () => {
        const usecase = new GetTodosUsecase(mockTodoRepository);
        mockTodoRepository.getTodos.mockImplementation(() => { throw new Error("an error occurred") })

        const todos = usecase.execute();

        expect(todos).toHaveLength(0);
        expect(mockTodoRepository.getTodos).toBeCalled();
    });
});