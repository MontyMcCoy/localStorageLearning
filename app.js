// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const campusInput = studentForm["campus"];
const subjectInput = studentForm["subject"];
const dateInput = studentForm["date"];

/* 
{
  campus: '',
  subject: '',
  date: number,
}
*/

const students = JSON.parse(localStorsubject.getItem("students")) || [];

const addStudent = (campus, subject, date) => {
  students.push({
    campus,
    subject,
    date,
  });

  localStorsubject.setItem("students", JSON.stringify(students));

  return { campus, subject, date };
};

const createStudentElement = ({ campus, subject, date }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentcampus = document.createElement("p");
  const studentsubject = document.createElement("p");
  const studentdate = document.createElement("p");

  // Fill the content
  studentcampus.innerText = "Student campus: " + campus;
  studentsubject.innerText = "Student subject: " + subject;
  studentdate.innerText = "Student date: " + date;

  // Add to the DOM
  studentDiv.append(studentcampus, studentsubject, studentdate);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    campusInput.value,
    subjectInput.value,
    dateInput.value
  );

  createStudentElement(newStudent);

  campusInput.value = "";
  subjectInput.value = "";
  dateInput.value = "";
};