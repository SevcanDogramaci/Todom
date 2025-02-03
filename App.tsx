import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import theme from './src/infrastructure/theme/Theme';
import ListTodosPage from './src/presentation/todos/list-todos/Page';
import Header from './src/presentation/components/Header';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  
  DefaultTheme,
  useNavigation,
} from '@react-navigation/native';
import ListTodoPage from './src/presentation/todo/list-todo/Page';
import CreateTodoPage from './src/presentation/todo/create-todo/Page';

const Stack = createNativeStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.mainBackground,
    primary: theme.colors.textPrimary
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator initialRouteName="ListTodos">
            <Stack.Screen name="ListTodos" component={ListTodosPage} options={{ headerTitle: () => <Header title="Todom" />, headerShadowVisible: false }} />
            <Stack.Screen name="ListTodo" component={ListTodoPage} options={{ headerTitle: () => <Header title="Todom" />, headerShadowVisible: false }} />
            <Stack.Screen name="CreateTodo" component={CreateTodoPage} options={{ headerTitle: () => <Header title="New Todom" />, headerShadowVisible: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
