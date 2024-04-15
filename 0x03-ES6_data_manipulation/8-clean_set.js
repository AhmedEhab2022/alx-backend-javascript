export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  let str = '';
  set.forEach((string) => {
    if (string && string.startsWith(startString)) {
      str += `${string.slice(startString.length)}-`;
    }
  });
  return str.slice(0, -1);
}
