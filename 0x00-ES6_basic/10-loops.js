export default function appendToEachArrayValue(array, appendString) {
  for (var ele of array) {
    array[indexOf(ele)] = appendString + ele;
  }

  return array;
}
