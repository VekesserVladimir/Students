export default class Student {
	constructor(id, fullName, group, formOfEducation, dateOfBirth, avgMark, isDebtor) {
		this.id = id;
		this.fullName = fullName;
		this.group = group;
		this.formOfEducation = formOfEducation;
		this.dateOfBirth = dateOfBirth;
		this.avgMark = avgMark;
		this.isDebtor = isDebtor;
	}
	getAge() {
		return Math.floor((new Date() - this.dateOfBirth) / (1000 * 60 * 60 * 24) / 31 / 12);
	}
	getValues() {
		return [this.fullName, this.group, this.formOfEducation, this.getAge(), this.avgMark, this.isDebtor ? "присутствует" : "отсутсвует"]
	}
}