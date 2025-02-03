import { View } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { useTheme } from "@shopify/restyle";
import Todo from "../../../domain/models/Todo";
import Text from "../../components/Text";
import { getTagByStatus } from "../../components/Tag";
import Layout from "../../components/Layout";

type TodoDetailRouteProp = RouteProp<{ params: { todo: Todo } }, 'params'>;

const ListTodoPage = () => {
    const route = useRoute<TodoDetailRouteProp>();
    const { todo } = route.params;
    const tag = getTagByStatus(todo.status);
    const theme = useTheme();

    return <Layout>
        <View style={theme.headerVariants.todo.body}>
            <Text variant="noteItalic" style={theme.headerVariants.todo.date}>
                {todo.createdAt.toDateString()}
            </Text>
            {tag}
        </View>

        <Text variant="body">{todo.detail}</Text>
    </Layout>;
};

export default ListTodoPage;