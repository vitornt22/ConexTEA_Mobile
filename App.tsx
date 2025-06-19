import './gesture-handler';
import './global.css';
import {LogBox} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {InitialStackNavigation} from './src/presentation/navigation/InitialStackNavigation';

// Informations  react-native-collapsible-tab-view

export default function App() {
  LogBox.ignoreAllLogs(false); // Mostra todos warnings e erros

  return (
    <PaperProvider>
      <SafeAreaView className="flex-1 bg-white">
        <NavigationContainer>
          <InitialStackNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </PaperProvider>
  );
}
