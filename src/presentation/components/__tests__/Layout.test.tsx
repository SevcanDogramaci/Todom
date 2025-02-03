import { describe, expect, test } from "@jest/globals";
import { render } from "../../__tests__/ComponentTestUtils";
import Layout from "../Layout";
import Text from "../Text";

describe('Layout', () => {
    test('renders children', () => {
        const testText = 'Test text';
        const child = <Text>{testText}</Text>;
        const {getByText} = render(<Layout>{child}</Layout>);

        expect(getByText(testText)).toBeTruthy();
    });
});