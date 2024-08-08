export class HolbertonClass {
  constructor(year, location) {
    this.year = year;
    this.location = location;
  }
}

export class Student {
  constructor(firstName, lastName, classYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.classYear = classYear;
  }

  displayStudent() {
    return `${this.firstName} ${this.lastName} is a student of ${this.classYear.year} at ${this.classYear.location}`;
  }
}
