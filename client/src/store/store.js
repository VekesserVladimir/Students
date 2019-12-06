import Vue from "vue"
import Vuex from "vuex"
import Student from "../entities/Student"
import Group from "../entities/Group"

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		groupsList: [
			new Group(1, "бПИНЖ41", "бакалавриат", "4", [
				new Student(1, "Иванов Иван Иванович1", "бПИНЖ41", "очная", new Date(1999, 1, 2), 4.5, false),
				new Student(2, "Иванов Иван Иванович2", "бПИНЖ41", "очная", new Date(2000, 2, 7), 4.4, true),
				new Student(3, "Иванов Иван Иванович3", "бПИНЖ41", "очная", new Date(2000, 3, 11), 4.1, false),
				new Student(4, "Иванов Иван Иванович4", "бПИНЖ41", "очная", new Date(1998, 5, 2), 4.5, false),
			 ]),
			new Group(2, "бПИНЖ31", "бакалавриат", "3", [ 
				new Student(5, "Иванов Иван Иванович5", "бПИНЖ31", "очная", new Date(2000, 9, 1), 4.3, false),
				new Student(6, "Иванов Иван Иванович6", "бПИНЖ31", "очная", new Date(1999, 5, 12), 4.3, false),
			 ]),
			new Group(3, "бПИНЖ21", "бакалавриат", "2", [ 
				new Student(7, "Иванов Иван Иванович7", "бПИНЖ21", "очная", new Date(2001, 2, 25), 4.2, false),
			 ]),
			new Group(4, "бПИНЖ11", "бакалавриат", "1", [ 
				new Student(8, "Иванов Иван Иванович8", "бПИНЖ11", "очная", new Date(2001, 2, 25), 4.2, false),
			 ]),
			new Group(5, "бИВЧТ41", "бакалавриат", "4", [ 
				new Student(9, "Иванов Иван Иванович9", "бИВЧТ41", "очная", new Date(2001, 2, 25), 4.2, true),
			 ])
		]
	},
	getters: {

	},
	mutations: {

	},
	actions: {

	}
})