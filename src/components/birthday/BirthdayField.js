import React, { useState } from 'react';
import styles from './BirthdayField.style';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import { COLOR } from 'global/styles';
import { useDispatch, useSelector } from 'react-redux';
import { setBirthday } from 'store/action/game';

const BirthdayField = ({ inEditMode, callback }) => {
  const birthdayDate = useSelector(state => state.game.birthday);
  const [date, setDate] = useState(
    new Date(birthdayDate || '1994-04-20T00:00:00.000Z'),
  );
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const onChange = (_, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(new Date(currentDate));
    if (callback) {
      callback(new Date(currentDate));
    }
  };

  const submitHandler = () => {
    dispatch(setBirthday(date));
  };

  return (
    <View
      style={
        !inEditMode
          ? { ...styles.container, height: '100%' }
          : { ...styles.container }
      }>
      {!inEditMode && <Text style={styles.heading}>Tell Us Your Birthday</Text>}
      <View style={styles.buttonWrapper}>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => showMode('date')}>
          Date
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => showMode('time')}>
          Time
        </Button>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          maximumDate={new Date()}
          minimumDate={new Date(1900, 0, 1)}
          onChange={onChange}
        />
      )}
      <View style={styles.infoWrapper}>
        {!inEditMode && <Text style={styles.text}>Your Birthday is on</Text>}
        <Text style={styles.bigText}>
          {dayjs(date).format('dddd, MMMM D, YYYY h:mm A	')}
        </Text>
      </View>
      {!inEditMode && (
        <View style={styles.buttonWrapper}>
          <Button
            onPress={submitHandler}
            color={COLOR.accent}
            mode="contained"
            style={styles.submit}>
            Waste Me!
          </Button>
        </View>
      )}
    </View>
  );
};

export default BirthdayField;
