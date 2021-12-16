import React from 'react';
import { ScrollView } from 'react-native';
import Waste from 'components/waste/Waste';
import SmartBanner from 'components/Banners/SmartBanner';

const Home = () => {
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        showsHorizontalScrollIndicator={false}>
        <Waste />
      </ScrollView>
      <SmartBanner />
    </>
  );
};

export default Home;
