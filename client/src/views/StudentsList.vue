<template>
	<div class='students-list'>
		<DialogWindow 
			ref='dialogWindow' 
			v-on:answer='deleteStudent'
		/>
		<Form 
			ref='form'
			v-bind:groups='groups'
			v-on:addStudent='addStudent'
			v-on:changeStudent='changeStudent'
		/>
		<div class='students-list__row'>
			<span class="students-list__title">Список студентов</span>
			<select class="dropdown students-list__dropdown" v-model='group'>    
        		<option v-for='group in allGroups' v-bind:key="group.id">{{ group }}</option>
    		</select>
			<button
				class="button button_primary"
				v-on:click='activeForm'
			>
				Добавить студента
			</button>
		</div>
		<div class="table-header students-list__table-header">
			<ColumnButton 
				v-for='(button, index) in buttons'
				v-bind:button="button"
				v-bind:index='index'
				v-bind:key='button.id'
				v-on:changeSort='changeSort'
			/>
		</div>
		<div class="underline"></div>
		<ListItem 
			v-for='(student, index) in getStudentsList' 
			v-bind:key='student.id' 
			v-bind:item="student.getValues()"
			v-bind:index='index'
			v-on:delete-item='askPermission'
			v-on:change-item='activeForm'
		/>
	</div>
</template>

<script>
	import ColumnButton from '../components/ColumnButton';
	import ListItem from '../components/ListItem';
	import DialogWindow from '../components/DialogWindow';
	import Form from '../components/Form';

	export default {
		name: 'StudentsList',
		components: {
			ColumnButton,
			ListItem,
			DialogWindow,
			Form
		},
		props: [ "studentsList", "list" ],
		data() {
			return {
				group: "Все группы",
				buttons: [
					{
						name: 'ФИО',
						isActive: true,
						direction: "descending"
					},
					{
						name: 'Группа',
						isActive: false,
						direction: "descending"
					},
					{
						name: 'Форма обучения',
						isActive: false,
						direction: "descending"
					},
					{
						name: 'Возраст',
						isActive: false,
						direction: "descending"
					},
					{
						name: 'Средний балл',
						isActive: false,
						direction: "descending"
					},
					{
						name: 'Задолжности',
						isActive: false,
						direction: "descending"
					}
				],
				currentSortButton: 0
			}
		},
		methods: {
			changeSort(index, direction) {
				this.buttons[index].isActive = true;
				this.buttons[index].direction = direction;
				if(index != this.currentSortButton) {
					this.buttons[this.currentSortButton].isActive = false;
					this.currentSortButton = index;
				}
			},
			askPermission(index) {
				this.$refs.dialogWindow.ask(this.studentsList[index].fullName, "student", index);
			},
			deleteStudent(index) {
				this.studentsList.splice(index, 1);
			},
			activeForm(index) {
				if(typeof index == "number") {
					this.$refs.form.active("change", this.studentsList[index], index);
				} else
					this.$refs.form.active("create");
			},
			addStudent(student) {
				this.$emit("addStudent", student);
			},
			changeStudent(student) {
				this.$emit("changeStudent", student);
			}
		},
		computed: {
			groups() {
				return [...new Set(this.studentsList.map(item => item.group))].sort();
			},
			allGroups() {
				let tmp = [...new Set(this.studentsList.map(item => item.group))].sort();
				tmp.unshift('Все группы');
				return tmp;
			},
			getStudentsList() {
				let propertyName = Object.keys(this.studentsList[0])[this.currentSortButton];
				let tmpList;

				if(this.buttons[this.currentSortButton].direction == "descending")
					tmpList = this.studentsList.sort((a, b) => a[propertyName] > b[propertyName] ? 1 : -1);
				else 
					tmpList = this.studentsList.sort((a, b) => a[propertyName] > b[propertyName] ? -1 : 1);
					
				if(this.group == 'Все группы')
					return tmpList;
				else 
					return tmpList.filter(student => student.group == this.group);
			}
		}
	}
</script>

<style lang="less" scoped>
	.students-list {
		padding-top: 32px;

		&__row {
			display: flex;
			align-items: center;
			padding-left: 45px;
		}

		&__title {
			font-size: 36px;
			font-weight: 600;
			line-height: 44px;
			color: #1D1D1D;
		}

		&__dropdown {
			margin: 2px 434px 0 50px;
		}
		.students-list__table-header {
			button:nth-child(2) {
				margin-left: 295px;
			}
			button:nth-child(3) {
				margin-left: 84px;
			}
			button:nth-child(4) {
				margin-left: 50px;
			}
			button:nth-child(5) {
				margin-left: 45px;
			}
			button:nth-child(6) {
				margin-left: 47px;
			}
		}

		.table-header {
			margin-top: 40px;
			padding-left: 45px;
		}
	}
</style>