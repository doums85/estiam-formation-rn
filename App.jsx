import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  StyleSheet,
  Text,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import {
  GameOverScreen,
  GameScreen,
  RootScreen,
  StartGameScreen,
} from './screens';
import { RootProvider } from './context';
import { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const background = require('./assets/background.jpeg');

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans: require('./assets/OpenSans-Regular.ttf'),
    PressStart: require('./assets/PressStart2P-Regular.ttf'),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, 1200);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <LinearGradient
        style={styles.root}
        colors={['#F5F7FA', '#B8C6DB']}
        onLayout={onLayoutRootView}>
        <ImageBackground
          source={background}
          style={styles.root}
          imageStyle={styles.background}>
          <RootProvider>
            <Stack.Navigator
              initialRouteName="Start"
              screenOptions={{
                contentStyle: {
                  backgroundColor: 'transparent',
                },
                headerShown: false,
              }}>
              <Stack.Screen
                name="Start"
                component={StartGameScreen}
              />

              <Stack.Screen
                name="Game"
                component={GameScreen}
              />
              <Stack.Screen
                name="GameOver"
                component={GameOverScreen}
              />
            </Stack.Navigator>
          </RootProvider>
          <StatusBar style="auto" />
        </ImageBackground>
      </LinearGradient>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    opacity: 0.15,
  },
});
