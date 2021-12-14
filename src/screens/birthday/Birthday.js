import React from 'react';
import { ScrollView } from 'react-native';
import BirthdayField from 'components/birthday/BirthdayField';

const Birthday = () => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={{ flexGrow: 1 }}
    showsHorizontalScrollIndicator={false}>
      <BirthdayField />
    </ScrollView>
  )
};

export default Birthday;
