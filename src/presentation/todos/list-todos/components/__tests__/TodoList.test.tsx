import { describe, expect, jest, test } from "@jest/globals";
import { fireEvent, render } from "../../../../__tests__/ComponentTestUtils";
import TodoList from "../TodoList";
import Todo from "../../../../../domain/models/Todo";
import Status from "../../../../../domain/models/Status";

describe('Todo List', () => {
    const todos = [
        new Todo('test todo detail 1', Status.PENDING),
        new Todo('test todo detail 2', Status.COMPLETED)
    ]

    test('renders', () => {
        const mockFunction = jest.fn();
        const {getByText} = render(<TodoList todos={todos} onListItemPress={mockFunction } />)

        expect(getByText('test todo detail 1')).toBeTruthy();
    });

    test('renders with no todos', () => {
        const mockFunction = jest.fn();
        const {getByText} = render(<TodoList todos={[]} onListItemPress={mockFunction } />)

        expect(getByText('No todos yet')).toBeTruthy();
    });

    test('calls onPress callback when a todo is clicked', () => {
        const mockFunction = jest.fn();
        const {getByText} = render(<TodoList todos={todos} onListItemPress={mockFunction } />)

        fireEvent.press(getByText('test todo detail 1'));

        expect(mockFunction).toBeCalled();
    });

});