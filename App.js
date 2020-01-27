import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login'
export default function App() {
  return (
 
      <Login/>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:20,
    paddingHorizontal:20
  },
});
