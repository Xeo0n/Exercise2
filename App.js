import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DirectoryList from './src/components/DirectoryList';
import MessageList from './src/components/MessageList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Directories">
        <Stack.Screen name="Directories" component={DirectoryList} />
        <Stack.Screen name="Messages" component={MessageList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

