export default class Group {
	constructor(id, specialty, typeOfStudy, course, listOfStudents) {
		this.id = id;
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
	getValues() {
		return [ this.specialty, 
				 this.listOfStudents.length, 
				 this.listOfStudents.filter(elem => elem.isDebtor).length, 
				 (this.listOfStudents.reduce((sum, curr) => sum + curr.avgMark, 0) / this.listOfStudents.length * 1000).toFixed(0) / 1000,
				 this.listOfStudents[0].formOfEducation
				];
	}
}