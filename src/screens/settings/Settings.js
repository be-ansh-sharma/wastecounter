import General from 'components/general/General';
import React from 'react';
import { ScrollView } from 'react-native';

const Settings = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      <General />
    </ScrollView>
  );
};

export default Settings;
