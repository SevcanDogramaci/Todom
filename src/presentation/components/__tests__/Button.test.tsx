import React from 'react';
import { fireEvent, render } from '../../__tests__/ComponentTestUtils';
import { describe, expect, test, jest } from "@jest/globals";
import Button from '../Button';

describe('Button', () => {
    const buttonText = 'Test button text';

    test('renders', () => {
        const mockFunction = jest.fn();

        const { getByText } = render(<Button text={buttonText} onPress={mockFunction} />);
        expect(getByText(buttonText)).toBeTruthy();
    });

    test('calls onPress callback', () => {
        const mockFunction = jest.fn();

        const { getByText } = render(<Button text={buttonText} onPress={mockFunction} />);
        const button = getByText(buttonText);

        fireEvent.press(button);
        expect(mockFunction).toBeCalledTimes(1);
    });

    test('not calls onPress callback when disabled', () => {
        const mockFunction = jest.fn();
        const { getByText } = render(<Button text={buttonText} onPress={mockFunction} disabled />);
        const button = getByText(buttonText);

        fireEvent.press(button);
        expect(mockFunction).not.toBeCalled();
    });
});