import React, {useState} from 'react';

import {ModalContext} from '../contexts/modal';
import {Modal} from '../components/modal/modal';

export function ModalWrapper({children}) {
  const [modalChildren, setChildren] = useState(null);

  const open = (_children) => setChildren(_children);
  const close = () => setChildren(null);

  return (
    <ModalContext.Provider value={{open, close}}>
      {children}
      <Modal visible={!!modalChildren} close={close}>
        {modalChildren}
      </Modal>
    </ModalContext.Provider>
  );
}