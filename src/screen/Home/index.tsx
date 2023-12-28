import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
      }}>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: 'blue',
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate('Gumtracker')}>
        <Text style={{color: 'white'}}>To Gumtracker</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
