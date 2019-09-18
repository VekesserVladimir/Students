<template>
	<div class='students-list'>
		<div class='students-list__row'>
			<span class="students-list__title">Список студентов</span>
			<select class="dropdown students-list__dropdown">    
        		<option v-for='group in groups' v-bind:key="group.id">{{ group }}</option>
    		</select>
			<button class="button button_primary">Добавить студента</button>
		</div>
		<TableHeader v-bind:buttons="buttons"/>
		<div class="underline"></div>
	</div>
</template>

<script>
	import TableHeader from '../components/TableHeader'
	export default {
		name: 'StudentsList',
		components: {
			TableHeader
		},
		data() {
			return {
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
						formOfEducation: 'очная',
						age: 20,
						avgPoint: 4.5,
						isDebtor: false
					},
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
						formOfEducation: 'очная',
						age: 20,
						avgPoint: 4.5,
						isDebtor: false
					},
					{
						fullName: "Иванов Иван Иванович",
						group: "бИФСТ31",
						formOfEducation: 'очная',
						age: 20,
						avgPoint: 4.5,
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
				]
			}
		},
		computed: {
			groups() {
				let tmp = [...new Set(this.studentsList.map(item => item.group))].sort();
				tmp.unshift('Все группы');
				return tmp;
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
	}
</style>