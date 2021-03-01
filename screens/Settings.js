import React from 'react';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

function Settings() {
  return (
    <>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ margin: 15, fontWeight: 'bold' }}>
          Currently under construction
        </Text>
        <Icon name='construct-outline' size={40} color='#333' />
      </View>
    </>
  );
}

export default Settings;
