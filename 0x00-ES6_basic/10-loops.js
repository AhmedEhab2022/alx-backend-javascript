export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const ele of array) {
    array2.push(appendString + ele);
  }

  return array2;
}
