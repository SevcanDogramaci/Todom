import Realm, { BSON } from 'realm';

class TodoEntity extends Realm.Object {
    _id!: BSON.UUID;
    name!: string;
    status!: string;
    createdAt!: Date;

    static name = 'Todo';
    static schema = {
        name: TodoEntity.name,
        primaryKey: '_id',
        properties: {
            _id: 'uuid',
            name: 'string',
            status: 'string',
            createdAt: 'date',
        },
    };
}

export default TodoEntity;