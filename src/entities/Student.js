export default class Student {
	constructor(fullName, group, formOfEducation, dateOfBirth, avgMark, isDebtor) {
		this.fullName = fullName;
		this.avgMark = avgMark;
		this.formOfEducation = formOfEducation;
		this.dateOfBirth = dateOfBirth;
		this.isDebtor = isDebtor;
		this.group = group;
	}
	getAge() {
		return Math.floor((new Date() - this.dateOfBirth) / (1000 * 60 * 60 * 24) / 31 / 12);
	}
	getValues() {
		return [this.fullName, this.group, this.formOfEducation, this.getAge(), this.avgMark, this.isDebtor ? "присутствует" : "отсутсвует"]
	}
}