import { FlatList, View } from "react-native";
import { useTheme } from "@shopify/restyle";
import Todo from "../../../../domain/models/Todo";
import Text from "../../../components/Text";
import TodoCard from "./TodoCard";

interface TodoListProps {
    todos: Todo[];
    onListItemPress: (todo: Todo) => void;
}

const TodoList = (props: TodoListProps) => {
    const theme = useTheme();

    const renderItem = ({ item }: { item: Todo }) => (
        <TodoCard
            key={item.id}
            todo={item.detail}
            status={item.status}
            createdDate={item.createdAt}
            onPress={() => props.onListItemPress(item)} />
    );

    const itemSeparator = <View style={theme.containerVariants.cardSeparator} />

    if (props.todos.length == 0) return <Text style={theme.containerVariants.centered} variant="body">No todos yet</Text>;

    return <FlatList
        nestedScrollEnabled
        data={props.todos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => itemSeparator} />
};

export default TodoList;