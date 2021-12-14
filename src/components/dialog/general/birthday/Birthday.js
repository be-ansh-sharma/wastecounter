import React from 'react';
import { Dialog, Button, Portal } from 'react-native-paper';
import { View } from 'react-native';
import { COLOR } from 'global/styles';
import BirthdayField from 'components/birthday/BirthdayField';

const Birthday = ({ closeDialogHandler }) => {
  const hideDialog = cancel => {
    if (!cancel) {
      return closeDialogHandler();
    }
    closeDialogHandler();
  };

  return (
    <View>
      <Portal>
        <Dialog visible={true} onDismiss={hideDialog} dismissable={false}>
          <Dialog.Title style={{ color: COLOR.primary }}>BIRTHDAY</Dialog.Title>
          <Dialog.Content>
            <BirthdayField inEditMode />
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
