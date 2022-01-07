import { getBirthdayData } from 'global/helpers/utils';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { useSelector } from 'react-redux';
import styles from './Waste.style';

const Waste = () => {
  const birthday = useSelector(state => state.game.birthday);
  const [data, setData] = useState(getBirthdayData(birthday));

  useEffect(() => {
    let interval = setInterval(() => {
      setData({
        ...getBirthdayData(birthday)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [birthday]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>You Have Wasted</Text>
      <View style={styles.card}>
        <Text style={styles.item}>{data?.seconds}</Text>
        <Text style={styles.item}>Seconds</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.item}>{data?.minute}</Text>
        <Text style={styles.item}>Minutes</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.item}>{data?.hour}</Text>
        <Text style={styles.item}>Hours</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.item}>{data?.day}</Text>
        <Text style={styles.item}>Days</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.item}>{data?.week}</Text>
        <Text style={styles.item}>Weeks</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.item}>{data?.month}</Text>
        <Text style={styles.item}>Months</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.item}>{data?.years}</Text>
        <Text style={styles.item}>Years</Text>
      </View>
    </View>
  );
};

export default Waste;
