import { describe, expect, test } from "@jest/globals";
import { render } from "../../__tests__/ComponentTestUtils";
import Tag, { TagType } from "../Tag";

describe('Tag', () => {
    const tagText = 'test tag text';

    test('renders', () => {
        const tag = <Tag text={tagText} type={TagType.PRIMARY} />;
        const {getByText} = render(tag);

        expect(getByText(tagText)).toBeTruthy();
    });

    test('renders with border', () => {
        const tag = <Tag text={tagText} type={TagType.PRIMARY} bordered/>;
        const {getByText} = render(tag);

        expect(getByText(tagText)).toBeTruthy();
    });
})