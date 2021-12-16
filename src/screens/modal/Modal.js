import React from 'react';
import About from 'components/about/About';
import Attribution from 'components/attribution/Attribution';

const Modal = ({ route }) => {
  const { type } = route?.params;
  let Component;
  switch (type) {
    case 'about':
      Component = About;
      break;
    case 'attribution':
      Component = Attribution;
      break;
  }

  if (!Component) {
    return null;
  }

  return <Component />;
};

export default Modal;
