// Проверка длины строки
const checkLength = (string, maxLength) => {
  return string.length <= maxLength
}

// Проверка на полиндромность
function palindrom (string) {
	return string.split('').reverse().join('').replaceAll(' ', '').toLowerCase() === string.replaceAll(' ', '').toLowerCase()
}

// Проверка isNumber
function isNumber (string) {
  let checkString = '';
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i] >= 0) {
      checkString += string[i];
    }
  }
 return checkString || NaN;
}
