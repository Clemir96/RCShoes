import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaInicial from './TelaInicial.js';
import Login from './Login';
import Produtos from './Produtos';
import Produto1 from './Produto1';
import Produto2 from './Produto2';
import Produto3 from './Produto3';
import Produto4 from './Produto4';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TelaInicial" component={TelaInicial} />
        <Stack.Screen name="Produtos" component={Produtos} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Produto1" component={Produto1} />
        <Stack.Screen name="Produto2" component={Produto2} />
        <Stack.Screen name="Produto3" component={Produto3} />
        <Stack.Screen name="Produto4" component={Produto4} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;