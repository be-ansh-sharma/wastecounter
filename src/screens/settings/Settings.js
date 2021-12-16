import SmartBanner from 'components/Banners/SmartBanner';
import General from 'components/general/General';
import React from 'react';
import { ScrollView } from 'react-native';

const Settings = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}>
        <General />
      </ScrollView>
      <SmartBanner />
    </>
  );
};

export default Settings;
