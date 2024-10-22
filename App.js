// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AlbumsScreen from './screens/AlbumsScreen';
import PhotosScreen from './screens/PhotosScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Albums" 
          component={AlbumsScreen} 
          options={{ title: 'Álbuns' }} 
        />
        <Stack.Screen 
          name="Photos" 
          component={PhotosScreen} 
          options={{ title: 'Fotos' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

