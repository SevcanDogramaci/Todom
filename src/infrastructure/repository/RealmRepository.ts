import { BSON } from "realm";
import Todo from "../../domain/models/Todo";
import TodoRepository from "../../domain/repository/TodoRepository";
import realm from "./RealmConfig";
import TodoEntity from "./entitites/TodoEntity";

class RealmRepository implements TodoRepository {
    createTodo(todo: Todo): Boolean {
        try {
            realm.write(() => {
                realm.create(
                    TodoEntity.name,
                    {
                        _id: new BSON.UUID(todo.id),
                        name: todo.detail,
                        createdAt: todo.createdAt,
                        status: todo.status
                    }
                );
            });

            return true;
        } catch (error) {
            console.error("Failed to create todo:", error);
            return false;
        }
    }

    getTodos(): Todo[] {
        return realm.objects(TodoEntity.name)
            .map((todo: any) => {
                return new Todo(todo.name, todo.status, todo._id, todo.createdAt);
            });
    }
}

export default RealmRepository;