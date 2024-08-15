namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
    }
  
    export class Java extends Subject {
      getRequirements() {
        return 'Here is the list of requirements for Java';
      }
      getAvailableTeacher() {
        return this.teacher && this.teacher.experienceTeachingJava > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
      }
    }
}
