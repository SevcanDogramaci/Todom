import React from 'react';
import { fireEvent, render } from '../../__tests__/ComponentTestUtils';
import { describe, expect, test, jest } from "@jest/globals";
import FloatingActionButton from '../FloatingActionButton';
import IconAdd from '../../icons/IconAdd';

describe('Floating Action Button', () => {

    test('renders', () => {
        const icon = <IconAdd />
        const mockFunction = jest.fn();

        const { getByTestId } = render(<FloatingActionButton icon={icon} onPress={mockFunction} />);
        expect(getByTestId('fab-id')).toBeTruthy();
    });

    test('calls onPress callback', () => {
        const icon = <IconAdd />
        const mockFunction = jest.fn();

        const { getByTestId } = render(<FloatingActionButton icon={icon} onPress={mockFunction} />);
        const button = getByTestId('fab-id');

        fireEvent.press(button);
        expect(mockFunction).toBeCalledTimes(1);
    });
});