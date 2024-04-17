interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let student1: Student = {
  firstName: "Ahmed",
  lastName: "Ehab",
  age: 20,
  location: "Cairo",
};

let student2: Student = {
  firstName: "Mazen",
  lastName: "Ramadan",
  age: 13,
  location: "Cairo",
};

let studentsList: Student[] = [student1, student2];

let table = document.createElement("table");

document.body.appendChild(table);
studentsList.forEach((student) => {
  let row = document.createElement("tr");
  table.appendChild(row);
  let firstName = document.createElement("td");
  let lastName = document.createElement("td");
  let age = document.createElement("td");
  let location = document.createElement("td");
  row.appendChild(firstName);
  row.appendChild(lastName);
  row.appendChild(age);
  row.appendChild(location);
  firstName.innerHTML = student.firstName;
  lastName.innerHTML = student.lastName;
  age.innerHTML = student.age.toString();
  location.innerHTML = student.location;
});
