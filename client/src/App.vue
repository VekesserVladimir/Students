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
				v-bind:itemsList="currentPage == 'students' ? getStudentsList : groupsList"
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
				currentPage: ''
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
				this.groupsList.forEach(group => {
					if(group.specialty == student.group) group.listOfStudents.push(student);
				})
			},
			changeStudent(student) {
				this.groupsList.forEach(group => {
					group.listOfStudents.forEach((item, index) => {
						if(item.id == student.id) {
							group.listOfStudents.splice(index, 1, student);
						}
					})
				})
			},
			deleteStudent(student) {
				let groupIndex = this.groupsList.findIndex(group => group.specialty == student.group);
				let studentIndex = this.groupsList[groupIndex].listOfStudents.findIndex(elem => elem.id == student.id);
				this.groupsList[groupIndex].listOfStudents.splice(studentIndex, 1);
			},
			deleteGroup(group) {
				this.groupsList.splice(this.groupsList.findIndex(elem => elem.id == group.id), 1);
			},
			addGroup(group) {
				this.groupsList.push(group);
				console.log(this.groupsList)
				console.log(this.groupsList[this.groupsList.length - 1]);
			},
			changeGroup(group) {
				let index = this.groupsList.findIndex(elem => elem.id == group.id);
				this.groupsList.splice(index, 1, group);
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