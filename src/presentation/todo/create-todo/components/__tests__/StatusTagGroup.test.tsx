import { describe, expect, test } from "@jest/globals";
import { render } from "../../../../__tests__/ComponentTestUtils";
import StatusTagGroup from "../StatusTagGroup";
import Status from "../../../../../domain/models/Status";
import { NavigationContainer } from "@react-navigation/native";

describe('Status Tag Group', () => {
    test('renders', () => {
        const group = <NavigationContainer><StatusTagGroup /></NavigationContainer>
        const {getByText} = render(group);

        expect(getByText(Status.PENDING)).toBeTruthy();
        expect(getByText(Status.IN_PROGRESS)).toBeTruthy();
        expect(getByText(Status.COMPLETED)).toBeTruthy();
    });
});