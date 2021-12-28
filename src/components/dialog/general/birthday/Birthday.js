import React, { useState } from 'react';
import { Dialog, Button, Portal } from 'react-native-paper';
import { View } from 'react-native';
import { COLOR } from 'global/styles';
import BirthdayField from 'components/birthday/BirthdayField';
import { useDispatch, useSelector } from 'react-redux';
import { setBirthday } from 'store/action/game';

const Birthday = ({ closeDialogHandler }) => {
  const birthdayDate = useSelector(state => state.game.birthday);
  const [updatedDate, setUpdatedDate] = useState(birthdayDate);
  const dispatch = useDispatch();

  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    dispatch(setBirthday(updatedDate));
    closeDialogHandler();
  };

  const callback = date => setUpdatedDate(date);

  return (
    <View>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title style={{ color: COLOR.primary }}>BIRTHDAY</Dialog.Title>
          <Dialog.Content>
            <BirthdayField inEditMode callback={callback} />
          </Dialog.Content>
          <Dialog.Actions>
            <Button color={COLOR.faded} onPress={() => hideDialog(false)}>
              Cancel
            </Button>
            <Button onPress={hideDialog}>Update!</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
};

export default Birthday;
