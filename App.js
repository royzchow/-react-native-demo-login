import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/nav';
import { firebaseAuthServiceInit } from "./src/service/AuthService";

const App = () => {

  useEffect(() => {
    firebaseAuthServiceInit();
  }, [])

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;