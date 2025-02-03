import React from "react"
import { useTheme } from "@shopify/restyle"
import { TouchableOpacity, View } from "react-native"
import Status from "../../../../domain/models/Status"
import Text from "../../../components/Text"
import { getTagByStatus } from "../../../components/Tag"

interface TodoCardProps {
    todo: string
    status: Status
    createdDate: Date
    onPress?: () => void
}

const TodoCard = (props: TodoCardProps) => {
    const theme = useTheme();
    const tag = getTagByStatus(props.status);

    return <TouchableOpacity style={theme.containerVariants.card} onPress={props.onPress}>
        <View style={{ flex: 1.75, marginRight: 10 }}>
            <Text variant="body" style={{ flexWrap: 'wrap' }} numberOfLines={1}>{props.todo}</Text>
            <Text variant="note" >{props.createdDate.toDateString()}</Text>
        </View>
        {tag}
    </TouchableOpacity>
}

export default TodoCard;