import PubSub from 'pubsub-js';

export const NewTodoCreatedEvent = "new-todo-created";
export const NewTodoFailedEvent = "new-todo-failed";

export default PubSub;