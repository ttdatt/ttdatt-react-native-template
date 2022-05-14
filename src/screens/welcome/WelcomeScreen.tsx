import React from 'react';
import { ScreenNames } from 'navigation/screenNames';
import { useAppNavigation } from 'navigation/types';
import { Button, Text, View } from 'react-native';

export const WelcomeScreen = () => {
  const navigation = useAppNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Text>Welcome screen</Text>
      <Button title='Go to Tab' onPress={() => navigation.navigate(ScreenNames.MainTab)} />
    </View>
  );
};
