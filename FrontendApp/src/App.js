import React from 'react';
import { StyleSheet, SafeAreaView, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AnalyticsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Analytics</Text>
    </SafeAreaView>
  );
}

function GamesScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Games</Text>
    </SafeAreaView>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go To Signup"
        onPress={() => navigation.navigate('Signup')}
      />
    </SafeAreaView>
  );
}

function Intro0Screen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Intro0</Text>
    </SafeAreaView>
  );
}

function Intro1Screen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Intro1</Text>
    </SafeAreaView>
  );
}

function Intro2Screen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Intro2</Text>
    </SafeAreaView>
  );
}

function LoadingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>LOADING</Text>
    </SafeAreaView>
  );
}

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Login</Text>
      <Button title="Go back to first screen" onPress={() => navigation.popToTop()} />
    </SafeAreaView>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Settings</Text>
    </SafeAreaView>
  );
}

function SignupScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Signup</Text>
      <Button title="Go to login" onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen 
          name='Analytics' 
          component={AnalyticsScreen} 
          options={{ title: 'Analytics' }}
        />
        <Stack.Screen 
          name='Games' 
          component={GamesScreen} 
          options={{ title: 'Games' }}
        />
        <Stack.Screen 
          name='Home' 
          component={HomeScreen} 
          options={{ title: 'Home' }}
        />
        <Stack.Screen 
          name='Intro0' 
          component={Intro0Screen} 
          options={{ title: 'Intro0' }}
        />
        <Stack.Screen 
          name='Intro1' 
          component={Intro1Screen} 
          options={{ title: 'Intro1' }}
        />
        <Stack.Screen 
          name='Intro2' 
          component={Intro2Screen} 
          options={{ title: 'Intro2' }}
        />
        <Stack.Screen 
          name='Loading' 
          component={LoadingScreen} 
          options={{ title: 'LOADING' }}
        />
        <Stack.Screen 
          name='Login'
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name='Settings' 
          component={SettingsScreen} 
          options={{ title: 'Settings' }}
        />
        <Stack.Screen 
          name='Signup'
          component={SignupScreen}
          options={{ title: 'Signup' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center', 
      justifyContent: 'center',
  }
});