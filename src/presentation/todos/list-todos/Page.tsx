import { View } from "react-native"
import { useTheme } from "@shopify/restyle";
import useViewModel from "./ViewModel";
import FloatingActionButton from "../../components/FloatingActionButton";
import IconAdd from "../../icons/IconAdd";
import TodoList from "./components/TodoList";

const ListTodosPage = () => {
    const theme = useTheme();
    const { todos, onTodoPress, onNewTodoPress } = useViewModel();

    const icon = <IconAdd height={theme.iconVariants.m} width={theme.iconVariants.m} />

    return <View style={theme.containerVariants.page}>
        <TodoList todos={todos} onListItemPress={onTodoPress} />
        <FloatingActionButton icon={icon} onPress={onNewTodoPress} />
    </View>
}

export default ListTodosPage;