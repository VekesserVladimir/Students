<template>
	<div class='students-list'>
		<DialogWindow 
			ref='dialogWindow' 
			v-on:answer='deleteStudent'
		/>
		<Form 
			ref='form'
			v-on:addStudent='addStudent'
			v-on:changeStudent='changeStudent'
		/>
		<div class='students-list__row'>
			<span class="students-list__title">Список групп</span>
			<button
				class="button button_primary students-list__button"
				v-on:click='activeForm'
			>
				Добавить группу
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
			v-for='(group, index) in getGroupsList' 
			v-bind:key='group.id' 
			v-bind:item="group.getValues()"
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
		data() {
			return {
				buttons: [
					{
						name: 'Направление',
						isActive: true,
						direction: "descending"
					},
					{
						name: "Кол-во студентов",
						isActive: false,
						direction: "descending"
					},
					{
						name: "Кол-во должников",
						isActive: false,
						direction: "descending"
					},
					{
						name: "Средний балл",
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
				this.studentsList.push(student);
			},
			changeStudent(student, index) {
				this.studentsList.splice(index, 1, student);
			}
		},
		computed: {
			getGroupsList() {
				let propertyName = Object.keys(this.groupsList[0])[this.currentSortButton];

				if(this.buttons[this.currentSortButton].direction == "descending") 
					return this.groupsList.sort((a, b) => a[propertyName] > b[propertyName] ? 1 : -1);
				else 
					return this.groupsList.sort((a, b) => a[propertyName] > b[propertyName] ? -1 : 1);
			}
		}
	}
</script>

<style lang="less" scoped>
	.students-list {
		padding-top: 32px;

		&__button {
			margin-left: auto;
		}

		&__row {
			display: flex;
			align-items: center;
			padding: 0 73px 0 45px
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