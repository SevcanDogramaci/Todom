import 'react-native-get-random-values';
import { v4 as uuid } from 'uuid';
import Status from "./Status";

class Todo {
    id: string;
    detail: string;
    createdAt: Date;
    status: Status;

    constructor(detail: string, status: Status, id: string = uuid(), createdAt?: Date) {
        var date = new Date();
        if (createdAt) {
            date = new Date(createdAt);
        }

        this.id = id;
        this.detail = detail;
        this.createdAt = date;
        this.status = status;
    }
}

export default Todo;