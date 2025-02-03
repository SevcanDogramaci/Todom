import Realm from 'realm';
import TodoEntity from './entitites/TodoEntity';

const realm = new Realm({ schema: [TodoEntity], schemaVersion: 1 });

export default realm;