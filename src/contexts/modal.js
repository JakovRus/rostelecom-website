import React from 'react';

export const ModalContext = React.createContext({
  open: () => {},
  close: () => {},
});