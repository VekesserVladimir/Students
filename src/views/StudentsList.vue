<template>
	<div class='students-list'>
		<div class='students-list__row'>
			<span class="students-list__title">Список студентов</span>
			<select class="dropdown students-list__dropdown" v-model='group'>    
        		<option v-for='group in groups' v-bind:key="group.id">{{ group }}</option>
    		</select>
			<button class="button button_primary">Добавить студента</button>
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
		<ListItem v-for='student in getStudentsList' v-bind:key='student.id' v-bind:item="student"/>
	</div>
</template>

<script>
	import ColumnButton from '../components/ColumnButton'
	import ListItem from '../components/ListItem'

	export default {
		name: 'StudentsList',
		components: {
			ColumnButton,
			ListItem
		},
		data() {
			return {
				group: "Все группы",
				studentsList: [
					{
						fullName: "Иванов Иван Иванович",
						group: "бПИНЖ31",
						formOfEducation: 'очная',
						age: 20,
						avgPoint: 4.5,
						isDebtor: false
					},
					{
						fullName: "Иванов Иван Иванович",
						group: "бПИНЖ41",
						formOfEducation: 'заочная',
						age: 19,
						avgPoint: 4.2,
						isDebtor: false
					},
					{
						fullName: "Иванов Иван Иванович",
						group: "бПИНЖ31",
						formOfEducation: 'очная',
						age: 21,
						avgPoint: 4.5,
						isDebtor: false
					},
					{
						fullName: "Иванов Иван Иванович",
						group: "бПИНЖ41",
						formOfEducation: 'очная',
						age: 20,
						avgPoint: 4.7,
						isDebtor: true
					},
					{
						fullName: "Иванов Иван Иванович",
						group: "бИФСТ31",
						formOfEducation: 'очная',
						age: 20,
						avgPoint: 4.1,
						isDebtor: false
					}
				],
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
			}
		},
		computed: {
			groups() {
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
			margin: 0 434px 0 50px;
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
			margin-top: 34px;
			padding-left: 45px;
		}
	}
</style>