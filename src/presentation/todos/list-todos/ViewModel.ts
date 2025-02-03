import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../../infrastructure/di/Container";
import Todo from "../../../domain/models/Todo";
import PubSub, { NewTodoCreatedEvent } from "../../../infrastructure/event/Event";
import { CreateTodoScreen, DefaultScreenProps, ListTodoScreen } from "../../../infrastructure/navigation/Navigation";

const ListTodosViewModel = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const navigation = useNavigation<DefaultScreenProps>();

    useEffect(() => {
        onListTodos();

        const newTodoCreatedTopicToken = PubSub.subscribe(NewTodoCreatedEvent, onListTodos);
        return () => {
            PubSub.unsubscribe(newTodoCreatedTopicToken);
        }
    }, []);

    const onListTodos = () => {
        const todos = Container.getTodosUsecase.execute();
        setTodos(todos);
    }

    const onTodoPress = (todo: Todo) => {
        navigation.navigate(ListTodoScreen, { todo: todo });
    }

    const onNewTodoPress = () => {
        navigation.navigate(CreateTodoScreen);
    }

    return { todos, onTodoPress, onNewTodoPress };
}

export default ListTodosViewModel;