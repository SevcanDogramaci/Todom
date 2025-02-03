import { describe, expect, test } from "@jest/globals";
import { render } from "../../../../__tests__/ComponentTestUtils";
import TodoCard from "../TodoCard";
import Todo from "../../../../../domain/models/Todo";
import Status from "../../../../../domain/models/Status";

describe('Todo Card', () => {
    const todo = new Todo('test todo detail', Status.COMPLETED)
    
    test('renders', () => {
        const todoCard = <TodoCard todo={todo.detail} status={todo.status} createdDate={todo.createdAt} />;
        const { getByText } = render(todoCard);

        expect(getByText(todo.detail)).toBeTruthy();
    });
});