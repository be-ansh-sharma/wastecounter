import React, { useState } from 'react';
import { View, Linking } from 'react-native';
import { List, Text } from 'react-native-paper';
import styles from './General.style';
import DarkMode from 'components/darkmode/DarkMode';
import DialogWorker from 'components/dialog/DialogWorker';
import { useDispatch, useSelector } from 'react-redux';
import Pressable from 'components/pressable/Pressable';
import Switch from 'components/switch/Switch';
import Icon from 'components/Icons/Icon';
import { COLOR } from 'global/styles';
import dayjs from 'dayjs';
import { updatePersonlization } from 'store/action/game';
import { useNavigation } from '@react-navigation/native';

const General = props => {
  const [dialog, setDialog] = useState(false);
  const dispatch = useDispatch();
  const { birthday, personalizedAds } = useSelector(state => state.game);
  const navigation = useNavigation();

  const openDialog = name => setDialog(name);

  const closeDialogHandler = () => setDialog(false);
  const adChangeHandler = value => dispatch(updatePersonlization(value));

  const feedbackHandler = () => {
    Linking.openURL(
      'mailto:epoch.feedback@gmail.com?subject=Waste Counter App Feedback',
    ).catch(err => console.error('An error occurred', err));
  };

  const donationHandler = () => {
    Linking.openURL('https://www.buymeacoffee.com/be.ansh').catch(err =>
      console.error('An error occurred', err),
    );
  };

  const aboutHandler = () => {
    navigation.navigate('Modal', {
      type: 'about',
      title: 'About',
    });
  };

  const rateUsHandler = () => {
    Linking.openURL(
      'https://play.google.com/store/apps/details?id=com.epoch.wastecounter',
    ).catch(err => console.error('An error occurred', err));
  };

  return (
    <View style={styles.container}>
      <List.Section>
        <List.Subheader style={styles.subHeader}>General</List.Subheader>
        <List.Item title="Dark Mode" right={() => <DarkMode />} />
        <Pressable onPress={() => openDialog('birthday')}>
          <List.Item
            title="Birthday"
            right={() => (
              <Text>{dayjs(birthday).format('YY/MM/DD h:mm A')}</Text>
            )}
          />
        </Pressable>
        <List.Item
          title="Show Personalized Ads"
          right={() => (
            <Switch
              switchChangeHandler={adChangeHandler}
              value={personalizedAds}
            />
          )}
        />
        <Pressable onPress={feedbackHandler} android_ripple>
          <List.Item
            title="Feedback"
            right={() => (
              <Icon
                name="mail-outline"
                size={20}
                color={COLOR.primary}
                style={{ alignSelf: 'center' }}
                disabled
              />
            )}
          />
        </Pressable>
        <Pressable onPress={donationHandler} android_ripple>
          <List.Item
            title="Buy me a Pizza"
            right={() => (
              <Icon
                name="pizza-outline"
                size={20}
                color={COLOR.primary}
                disabled
                style={{ alignSelf: 'center' }}
              />
            )}
          />
        </Pressable>
        <Pressable
          onPress={() => openDialog('RemoveAdsTemporary')}
          android_ripple>
          <List.Item title="Remove Ads for next 4 hours" />
        </Pressable>
        <Pressable onPress={rateUsHandler} android_ripple>
          <List.Item title="Rate Us!" />
        </Pressable>
        <Pressable onPress={aboutHandler} android_ripple>
          <List.Item title="About" />
        </Pressable>
      </List.Section>
      {!!dialog && (
        <DialogWorker Name={dialog} closeDialogHandler={closeDialogHandler} />
      )}
    </View>
  );
};

export default General;
