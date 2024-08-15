namespace Subjects {
    export interface Teacher {
      experienceTeachingReact?: number;
    }
  
    export class React extends Subject {
      getRequirements() {
        return 'Here is the list of requirements for React';
      }
      getAvailableTeacher() {
        return this.teacher && this.teacher.experienceTeachingReact > 0 ? `Available Teacher: ${this.teacher.firstName}` : 'No available teacher';
      }
    }
}
