export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const react: Subjects.React = new Subjects.React();
export const java: Subjects.Java = new Subjects.Java();
export const cTeacher: Subjects.Teacher = {
    firstName: "Guillaume",
    lastName: "Salva",
    experienceTeachingC: 10,
};

console.log(cpp.getRequirements(), cpp.getAvailableTeacher());
console.log(react.getRequirements(), react.getAvailableTeacher());
console.log(java.getRequirements(), java.getAvailableTeacher());
