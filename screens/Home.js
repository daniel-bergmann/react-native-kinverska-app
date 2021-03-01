import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
// components
import HskPicker from '../components/HskPicker';
// data
import { data1, data2, data3, data4 } from '../components/data/HskPickerData';

export const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <HskPicker data={data1} />
        <HskPicker data={data2} />
        <HskPicker data={data3} />
        <HskPicker data={data4} />
        <StatusBar style='auto' />
      </ScrollView>
    </View>
  );
};

export default Home;
