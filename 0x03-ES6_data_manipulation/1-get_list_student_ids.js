export default function getListStudentIds(objctsArray) {
  if (!Array.isArray(objctsArray)) {
    return [];
  }
  return objctsArray.map((obj) => obj.id);
}
