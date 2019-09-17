export default class Group {
	constructor(specialty, typeOfStudy, course, listOfStudents) {
		this.specialty = specialty;
		this.typeOfStudy = typeOfStudy;
		this.course = course;
		this.listOfStudents = listOfStudents;
	}
	addStudent(student) {
		this.listOfStudents.push(student);
	}
	deleteStudent(student) {
		this.listOfStudents.splice(this.listOfStudents.indexOf(student), 1);
	}
}