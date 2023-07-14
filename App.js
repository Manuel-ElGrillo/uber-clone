// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context'; //For icons...
import { store } from './store';
import Home from './screens/Home';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Home />
      </SafeAreaProvider>
    </Provider> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
