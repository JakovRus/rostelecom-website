import {useEffect} from 'react';
import {Delayer} from './delayer';

export const VALID_PHONE_LENGTH = 11;

const nameDelayer = new Delayer();
const phoneDelayer = new Delayer();

export function isPhoneInvalid(phone) {
  const rawInput = phone.replace(/[ +()_-]/g, '');

  return rawInput.length !== VALID_PHONE_LENGTH;
}

export function isNameInvalid(name) {
  return !name;
}

export function useValidation(name, phone, invalidState, setInvalid, dirtyState) {
  const validateName = () => {
    const nameInvalid = isNameInvalid(name);
    setInvalid(Object.assign({}, invalidState, {name: nameInvalid}));
  };

  const validatePhone = () => {
    const phoneInvalid = isPhoneInvalid(phone);
    setInvalid(Object.assign({}, invalidState, {phone: phoneInvalid}));
  };

  useEffect(() => {
    if (!dirtyState.name) {
      return;
    }

    nameDelayer.call(validateName);
  }, [name]);

  useEffect(() => {
    if (!dirtyState.phone) {
      return;
    }

    phoneDelayer.call(validatePhone);
  }, [phone]);

  return invalidState.name || invalidState.phone;
}

export function validate(
  name,
  phone,
  setInvalid,
  dirtyState,
  setDirty
) {
  const nameInvalid = isNameInvalid(name);
  const phoneInvalid = isPhoneInvalid(phone);

  setInvalid({
    name: nameInvalid,
    phone: phoneInvalid,
  });

  setDirty({name: true, phone: true});

  return nameInvalid || phoneInvalid;
}