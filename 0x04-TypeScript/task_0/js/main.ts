
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: "Nora",
    lastName: "Karar",
    age: 26,
    location: "Luxembourg",
};

const student2: Student = {
    firstName: "Hessa",
    lastName: "Salim",
    age: 27,
    location: "Miami",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement('table');
studentsList.forEach(student => {
    const row = table.insertRow();
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.location;
});
document.body.appendChild(table);
