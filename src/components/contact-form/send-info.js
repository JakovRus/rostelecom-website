export function sendInfo(info) {
  return fetch('/email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(info),
  }).catch(showErrorMessage);
}

function showErrorMessage() {
  alert('Что-то пошло не так, попробуйте снова чуть позже.')
}