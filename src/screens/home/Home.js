import React from 'react';
import { ScrollView } from 'react-native';
import Waste from 'components/waste/Waste';

const Home = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}>
      <Waste />
    </ScrollView>
  );
};

export default Home;
