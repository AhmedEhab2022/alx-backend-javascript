export default function appendToEachArrayValue(array, appendString) {
  let array2 = [];
  for (let ele of array) {
    array2.push(appendString + ele);
  }

  return array2;
}
