import React from 'react';
import Birthday from 'components/dialog/general/birthday/Birthday';

const DialogWorker = ({ Name, closeDialogHandler, params }) => {
  if (!Name) {
    return null;
  }

  switch (Name) {
    case 'birthday':
      Name = Birthday;
      break;
  }

  return <Name params={params} closeDialogHandler={closeDialogHandler} />;
};

export default DialogWorker;
