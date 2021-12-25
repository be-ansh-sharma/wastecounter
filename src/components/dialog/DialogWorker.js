import React from 'react';
import Birthday from 'components/dialog/general/birthday/Birthday';
import RemoveAdsTemp from './ads/RemoveAdsTemp';
import { property } from 'global/config';

const DialogWorker = ({ Name, closeDialogHandler, params }) => {
  if (!Name) {
    return null;
  }

  let title;
  let body;

  switch (Name) {
    case 'birthday':
      Name = Birthday;
      break;
    case 'RemoveAdsTemporary':
      Name = RemoveAdsTemp;
      title = property.removeAdsTempTitle;
      body = property.removeAdsTempBody;
      break;
  }

  return (
    <Name
      params={params}
      closeDialogHandler={closeDialogHandler}
      title={title}
      body={body}
    />
  );
};

export default DialogWorker;
