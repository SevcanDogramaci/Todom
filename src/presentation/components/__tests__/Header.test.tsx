import { describe, expect, test } from "@jest/globals";
import { render } from "../../__tests__/ComponentTestUtils";
import Header from "../Header";

describe('Header', () => {
    test('renders', () => {
        const headerText = "test header text";

        const { getByText } = render(<Header title={headerText} />);
        
        expect(getByText(headerText)).toBeTruthy();
    });
})