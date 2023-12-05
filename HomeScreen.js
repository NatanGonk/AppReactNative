import React from 'react';
import { View, Text, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Seu Nome</Text>
      <Image
        source={require('../assets/NatanGoncalves.jpg')}
        style={{ width: 200, height: 200, marginTop: 20 }}
      />
    </View>
  );
};

export default HomeScreen;
