import { View } from "react-native";
import Todo from "../../../domain/models/Todo";
import { RouteProp, useRoute } from "@react-navigation/native";
import Text from "../../components/Text";
import { getTagByStatus } from "../../components/Tag";
import { useTheme } from "@shopify/restyle";

type TodoDetailRouteProp = RouteProp<{ params: { todo: Todo } }, 'params'>;

const ListTodoPage = () => {
    const route = useRoute<TodoDetailRouteProp>();
    const { todo } = route.params;
    const tag = getTagByStatus(todo.status);
    const theme = useTheme();

    return <View style={theme.containerVariants.page}>
        <View style={theme.containerVariants.todoHeader}>
            <Text variant="noteItalic" style={{flex: 2}}>{todo.createdAt.toDateString()}</Text>
            {tag}
        </View>

        <Text variant="body">{todo.detail}</Text>
    </View>;
};

export default ListTodoPage;