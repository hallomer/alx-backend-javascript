export default function createIteratorObject(report) {
  const { allEmployees } = report;
  let employeesList = [];

  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      employeesList = employeesList.concat(allEmployees[department]);
    }
  }

  return employeesList[Symbol.iterator]();
}
