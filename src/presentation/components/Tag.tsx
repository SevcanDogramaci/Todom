import { useTheme } from "@shopify/restyle";
import { View } from "react-native"
import Text from "./Text";
import Status from "../../domain/models/Status";

export enum TagType {
    PRIMARY,
    INFO,
    SUCCESS
}

export interface TagProps {
    text: string
    type: TagType
    bordered?: boolean
}

const Tag = (props: TagProps) => {
    const theme = useTheme();
    const style = getTagThemeByType(props.type);
    const {borderWidth, borderColor} = theme.tagVariants.bordered;

    return <View style={style} borderWidth={props.bordered && borderWidth} borderColor={borderColor}>
        <Text variant="tag">{props.text}</Text>
    </View>
}

const getTagThemeByType = (type: TagType) => {
    const theme = useTheme();
    var style = theme.tagVariants.defaults

    switch (type) {
        case TagType.SUCCESS:
            style = theme.tagVariants.success
            break
        case TagType.INFO:
            style = theme.tagVariants.info
            break
    }

    return style
}

export const getTagByStatus = (status: Status) => {
    var type = TagType.INFO

    switch (status) {
        case Status.PENDING:
            type = TagType.PRIMARY
            break
        case Status.COMPLETED:
            type = TagType.SUCCESS
            break
    }
    return <Tag text={status.valueOf()} type={type} />
}

export default Tag;