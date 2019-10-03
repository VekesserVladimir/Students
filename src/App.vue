<template>
	<div id="app">
		<div class="header">
			<div class="nav-panel">
				<router-link 
					to='/students'  
					class="button button_secondary" 
					v-bind:class='{ button_secondary_active : currentPage == "students" }'
					v-on:click.native='changePage("students")'
				>Список студентов</router-link>
				<router-link 
					to='/groups' 
					class="button button_secondary" 
					v-bind:class='{ button_secondary_active : currentPage == "groups" }'
					v-on:click.native='changePage("groups")'
				>Список групп</router-link>
			</div>
		</div>
		<div class="content">
			<router-view 
				v-bind:studentsList="currentPage == 'students' ? getStudentsList : groupsList"
				v-on:addStudent='addStudent'
				v-on:changeStudent='changeStudent'
			></router-view>
		</div>
	</div>
</template>

<script>
	import Student from './entities/Student'
	import Group from './entities/Group'

	export default {
		name: 'App',
		data() {
			return {
				currentPage: '',
				groupsList: [
					new Group("бПИНЖ41", "бакалавриат", "4", [ 
						new Student("Иванов Иван Иванович", "бПИНЖ41", "очная", new Date(1999, 1, 2), 4.5, false),
						new Student("Иванов Иван Иванович", "бПИНЖ41", "очная", new Date(2000, 2, 7), 4.4, true),
						new Student("Иванов Иван Иванович", "бПИНЖ41", "заочная", new Date(2000, 3, 11), 4.1, false),
						new Student("Иванов Иван Иванович", "бПИНЖ41", "очная", new Date(1998, 5, 2), 4.5, false),

					 ]),
					new Group("бПИНЖ31", "бакалавриат", "3", [ 
						new Student("Иванов Иван Иванович", "бПИНЖ31", "очная", new Date(2000, 9, 1), 4.3, false),
						new Student("Иванов Иван Иванович", "бПИНЖ31", "очная", new Date(1999, 5, 12), 4.3, false),

					 ]),
					new Group("бПИНЖ21", "бакалавриат", "2", [ 
						new Student("Иванов Иван Иванович", "бПИНЖ21", "очная", new Date(2001, 2, 25), 4.2, false),
					 ]),
					new Group("бПИНЖ11", "бакалавриат", "1", [ 
						new Student("Иванов Иван Иванович", "бПИНЖ11", "очная", new Date(2001, 2, 25), 4.2, false),
					 ]),
					new Group("бИВЧТ41", "бакалавриат", "4", [ 
						new Student("Иванов Иван Иванович", "бИВЧТ41", "очная", new Date(2001, 2, 25), 4.2, false),
					 ]),
				]
			}
		},
		beforeMount() {
			switch(window.location.pathname) {
				case "/students": {
					this.currentPage = 'students';
					break;
				}
				case "/groups": {
					this.currentPage = 'groups';
					break;
				}
			}
		},
		methods: {
			changePage(value) {
				this.currentPage = value;
			},
			addStudent(student) {
				this.groupsList.forEach(item => {
					if(item.specialty == student.group) item.listOfStudents.push(student);
				})
			},
			changeStudent(student) {
				
			}
		},
		computed: {
			getStudentsList() {
				let list = [];
				this.groupsList.forEach(group => {
					group.listOfStudents.forEach(student => {
						list.push(student);
					})
				})
				return list;
			}
		}
	}
</script>

<style lang="less" scoped>
	.header {
		height: 243px;
		width: 100%;
		background-color: #23233E;
		padding-top: 22px;
			.nav-panel {
				width: 1440px;
				margin: 0 auto;
				padding-left: 34px;
		
				.button:nth-child(2) {
					margin-left: 44px;
				}
		}
	}

	.content {
		width: 1373px;
		background-color: #FEFCFE;
		margin: -148px auto 0 auto;
		// padding: 0 0 20px 0;
		border-radius: 5px;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), -2px 2px 4px rgba(0, 0, 0, 0.25);
	}
</style>