export default function createIteratorObject(report) {
  let allEmployees = [];
  for (const department of Object.values(report.allEmployees)) {
    allEmployees = allEmployees.concat(department);
  }

  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < allEmployees.length) {
            return { value: allEmployees[index++], done: false };
          }
          return { done: true };
        },
      };
    },
  };
}
