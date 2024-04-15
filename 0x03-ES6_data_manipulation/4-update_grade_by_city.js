export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const grade = newGrades.filter((newGrade) => newGrade.studentId === student.id)[0];
    if (grade) {
      return { ...student, grade: grade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
