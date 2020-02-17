import {useEffect} from 'react';
import {debounce} from "debounce";

export const VALID_PHONE_LENGTH = 11;
const DEBOUNCE_DURATION = 500;

export function validatePhone(phone) {
  const rawInput = phone.replace(/[ \+()_-]/g, '');

  return rawInput.length !== VALID_PHONE_LENGTH;
}

export function validateName(name) {
  return !name;
}

export function useValidation(name, phone, invalidState, setInvalid, dirtyState) {
  useEffect(() => {
    if (!dirtyState.name) {
      return;
    }

    const nameInvalid = validateName(name);

    setInvalid(Object.assign({}, invalidState, {name: nameInvalid}));
  }, [name]);

  useEffect(() => {
    if (!dirtyState.phone) {
      return;
    }

    const phoneInvalid = validatePhone(phone);
    setInvalid(Object.assign({}, invalidState, {phone: phoneInvalid}));
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
  const nameInvalid = validateName(name);
  const phoneInvalid = validatePhone(phone);

  setInvalid({
    name: nameInvalid,
    phone: phoneInvalid,
  });

  setDirty({name: true, phone: true});

  return nameInvalid || phoneInvalid;
}