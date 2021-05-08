const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const upperAlhabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function getStringIndexMap(str) {
  return str
    .split('')
    .reduce((map, letter, index) => map.set(letter, index), new Map());
}

const lowerMap = getStringIndexMap(lowerAlphabet);
const upperMap = getStringIndexMap(upperAlhabet);

function getCorrectedShift(shift, alhabetLength = 26) {
  return shift >= 0
    ? shift % alhabetLength
    : (alhabetLength + shift) % alhabetLength;
}

function getShiftedLetter(letter, shift) {
  const isInUppercase = letter === letter.toUpperCase();
  const mapToUse = isInUppercase ? upperMap : lowerMap;
  const initialIndex = mapToUse.get(letter);
  if (initialIndex === undefined) return letter;
  const newIndex = getCorrectedShift(initialIndex + shift);
  return isInUppercase ? upperAlhabet[newIndex] : lowerAlphabet[newIndex];
}

function getShiftedString(text, shift) {
  return text.split('').map(letter=>getShiftedLetter(letter, shift)).join('');
}

module.exports={
    getShiftedString
}