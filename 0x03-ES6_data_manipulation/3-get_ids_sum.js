export default function getStudentIdsSum(students) {
  return students.reduce((idsSum, students) => idsSum + students.id, 0);
}
