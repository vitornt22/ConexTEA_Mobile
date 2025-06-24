import './gesture-handler';
import './global.css';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {InitialStackNavigation} from './src/presentation/navigation/InitialStackNavigation';
import RNBootSplash from 'react-native-bootsplash';
import {
  AppProvider,
  useAppContext,
} from './src/presentation/contexts/AppContext';

// Informations  react-native-collapsible-tab-view

export default function App() {
  useEffect(() => {
    // aqui posso pegar do localStorage ou qualquer outra coisa
    // Quando o app estiver pronto, esconda o splash
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <AppProvider>
      <PaperProvider>
        <SafeAreaView className="flex-1 bg-white">
          <NavigationContainer>
            <InitialStackNavigation />
          </NavigationContainer>
        </SafeAreaView>
      </PaperProvider>
    </AppProvider>
  );
}
