import { createNativeStackNavigator, NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import Todo from '../../domain/models/Todo';

export type HomeStackNavigatorParamList = {
    ListTodos: undefined,
    CreateTodo: undefined,
    ListTodo: { todo: Todo }
}
const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

export const ListTodosScreen = 'ListTodos'
export const ListTodoScreen = 'ListTodo'
export const CreateTodoScreen = 'CreateTodo'

export type DefaultScreenProps = NativeStackNavigationProp<HomeStackNavigatorParamList>;
export type ListTodoScreenProps = NativeStackScreenProps<HomeStackNavigatorParamList, 'ListTodo'>;

export default Stack;



