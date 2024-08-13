export default function getStudentsIdsSum(students) {
  return students.reduce((sum, students) => sum + students.id, 0);
}
