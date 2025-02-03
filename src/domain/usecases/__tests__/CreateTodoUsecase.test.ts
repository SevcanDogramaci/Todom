import { describe, expect, test } from "@jest/globals";
import { mock } from 'jest-mock-extended';
import TodoRepository from "../../repository/TodoRepository";
import CreateTodoUsecase from "../CreateTodoUsecase";
import Todo from "../../models/Todo";
import Status from "../../models/Status";

describe('Create Todo Usecase', () => {
    const mockTodoRepository = mock<TodoRepository>();
    const todo = new Todo('test todo detail', Status.PENDING);

    test('given todo then it should create a todo', () => {
        const usecase = new CreateTodoUsecase(mockTodoRepository);
        mockTodoRepository.createTodo.mockReturnValue(true);

        const isCompleted = usecase.execute(todo);

        expect(isCompleted).toBeTruthy();
        expect(mockTodoRepository.createTodo).toHaveBeenCalledWith(todo);
    });

    test('given repository fails then it should return false', () => {
        const usecase = new CreateTodoUsecase(mockTodoRepository);
        mockTodoRepository.createTodo.mockReturnValue(false);

        const isCompleted = usecase.execute(todo);

        expect(isCompleted).toBeFalsy();
        expect(mockTodoRepository.createTodo).toHaveBeenCalledWith(todo);
    });
});