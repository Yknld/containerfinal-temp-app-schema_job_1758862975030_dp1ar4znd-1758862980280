import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleButtonPress = () => {
    setButtonPressed(!buttonPressed);
    Alert.alert(
      'Hello!', 
      buttonPressed ? 'Button was already pressed!' : 'Button pressed successfully!',
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.title}>Hello World!</Text>
      
      <Text style={styles.subtitle}>
        Welcome to your React Native Expo app
      </Text>
      
      <TouchableOpacity 
        style={[styles.button, buttonPressed && styles.buttonPressed]} 
        onPress={handleButtonPress}
      >
        <Text style={styles.buttonText}>
          {buttonPressed ? 'Pressed!' : 'Press Me'}
        </Text>
      </TouchableOpacity>
      
      {buttonPressed && (
        <Text style={styles.statusText}>
          Button has been pressed! 🎉
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 20,
  },
  buttonPressed: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  statusText: {
    fontSize: 16,
    color: '#34C759',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 10,
  },
});