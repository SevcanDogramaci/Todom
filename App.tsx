import React from 'react';
import { ThemeProvider } from '@shopify/restyle';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Stack from './src/infrastructure/navigation/Navigation';
import theme from './src/infrastructure/theme/Theme';
import Header from './src/presentation/components/Header';
import ListTodoPage from './src/presentation/todo/list-todo/Page';
import ListTodosPage from './src/presentation/todos/list-todos/Page';
import CreateTodoPage from './src/presentation/todo/create-todo/Page';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.colors.mainBackground,
    primary: theme.colors.textPrimary
  },
};

const getDefaultScreenOptions = (title: string) => {
  return { headerTitle: () => <Header title={title} />, headerShadowVisible: false }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator initialRouteName="ListTodos">
            <Stack.Screen name="ListTodos" component={ListTodosPage} options={getDefaultScreenOptions("Todom")} />
            <Stack.Screen name="ListTodo" component={ListTodoPage} options={getDefaultScreenOptions("Todom")} />
            <Stack.Screen name="CreateTodo" component={CreateTodoPage} options={getDefaultScreenOptions("New Todom")} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
