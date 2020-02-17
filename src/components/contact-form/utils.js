export const VALID_PHONE_LENGTH = 11;

export function validatePhone(phone) {
  const rawInput = phone.replace(/[ \+()_-]/g, '');

  return rawInput.length === VALID_PHONE_LENGTH;
}

export function validateName(name) {
  return !!name;
}