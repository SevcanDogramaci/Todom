import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container } from "../../../infrastructure/di/Container";
import Todo from "../../../domain/models/Todo";
import Status from "../../../domain/models/Status";
import PubSub, { NewTodoCreatedEvent, NewTodoFailedEvent } from "../../../infrastructure/event/Event";

const CreateTodoViewModel = () => {
    const [detail, setDetail] = useState<string>("");
    const [status, setStatus] = useState<Status>(Status.PENDING);
    const navigation = useNavigation();

    const onCreateTodoPress = () => {
        const todo = new Todo(detail, status);
        const isTodoCreated = Container.todoRepository.createTodo(todo);

        if (isTodoCreated) {
            PubSub.publish(NewTodoCreatedEvent)
        } else {
            PubSub.publish(NewTodoFailedEvent)
        }
        navigation.goBack();
    }

    const onDetailChange = (detail: string) => setDetail(detail);

    const onStatusChange = (status: Status) => setStatus(status);

    const isTagSelected = (tagStatus: Status) => status === tagStatus;

    const isCreateTodoButtonActive = detail.trim().length == 0;

    return { detail, status, onCreateTodoPress, onDetailChange, onStatusChange, isTagSelected, isCreateTodoButtonActive };
}

export default CreateTodoViewModel;