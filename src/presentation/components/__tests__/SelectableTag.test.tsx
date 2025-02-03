import { describe, expect, jest, test } from "@jest/globals";
import { fireEvent, render } from "../../__tests__/ComponentTestUtils";
import SelectableTag from "../SelectableTag";
import { TagType } from "../Tag";

describe('Selectable Tag', () => {
    const selectableTagText = 'test selectable tag text';

    test('renders when not selected', () => {
        const mockFunction = jest.fn();
        const tag = <SelectableTag onPress={mockFunction} text={selectableTagText} type={TagType.PRIMARY} />;
        const { getByText } = render(tag);

        expect(getByText(selectableTagText)).toBeTruthy();
    });

    test('renders when selected', () => {
        const mockFunction = jest.fn();
        const tag = <SelectableTag onPress={mockFunction} text={selectableTagText} type={TagType.PRIMARY} selected />;
        const { getByText } = render(tag);

        expect(getByText(selectableTagText)).toBeTruthy();
    });

    test('calls onPress callback', () => {
        const mockFunction = jest.fn();
        const tag = <SelectableTag onPress={mockFunction} text={selectableTagText} type={TagType.PRIMARY} />;
        const { getByText } = render(tag);

        fireEvent.press(getByText(selectableTagText));
        expect(mockFunction).toBeCalledTimes(1);
    });
})