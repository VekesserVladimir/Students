<template>
	<div class='groups-list'>
		<DialogWindow 
			ref='dialogWindow' 
			v-on:answer='deleteGroup'
		/>
		<GroupForm 
			ref='form'
			v-on:addGroup='addGroup'
			v-on:changeGroup='changeGroup'
		/>
		<div class='groups-list__row'>
			<span class="groups-list__title">Список групп</span>
			<button
				class="button button_primary groups-list__button"
				v-on:click='activeForm'
			>
				Добавить группу
			</button>
		</div>
		<div class="table-header groups-list__table-header">
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
			v-bind:item="group"
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
	import GroupForm from '../components/GroupForm';

	export default {
		name: 'GroupsList',
		components: {
			ColumnButton,
			ListItem,
			DialogWindow,
			GroupForm
		},
		props: [ "itemsList" ],
		data() {
			return {
				buttons: [
					{
						name: 'Направление',
						isActive: true,
						direction: true
					},
					{
						name: 'Количество студентов',
						isActive: false,
						direction: true
					},
					{
						name: 'Количество должников',
						isActive: false,
						direction: true
					},
					{
						name: 'Средний балл',
						isActive: false,
						direction: true
					},
					{
						name: 'Форма обучения',
						isActive: false,
						direction: true
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
			askPermission(group) {
				this.$refs.dialogWindow.ask(group, "group");
			},
			deleteGroup(group) {
				this.$emit("delete-group", group);
			},
			activeForm(index) {
				if(typeof index == "number") {
					this.$refs.form.active("change", this.itemsList[index]);
				} else
					this.$refs.form.active("create");
			},
			addGroup(group) {
				this.$emit("add-group", group);
			},
			changeGroup(group) {
				this.$emit("change-group", group);
			}
		},
		computed: {
			getGroupsList() {
				let propertyName = this.itemsList[this.currentSortButton + 1].getValues();
				let tmpList;

				if(this.buttons[this.currentSortButton].direction)
					return this.itemsList.sort((a, b) => a[propertyName] > b[propertyName] ? 1 : -1);
				else 
					return this.itemsList.sort((a, b) => a[propertyName] > b[propertyName] ? -1 : 1);
					
			}
		}
	}
</script>

<style lang="less" scoped>
	.groups-list {
		padding-top: 32px;

		&__button {
			margin-left: 766px;
		}

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
		.groups-list__table-header {
			button:nth-child(2) {
				margin-left: 65px;
			}
			button:nth-child(3) {
				margin-left: 65px;
			}
			button:nth-child(4) {
				margin-left: 65px;
			}
			button:nth-child(5) {
				margin-left: 65px;
			}
		}

		.table-header {
			margin-top: 40px;
			padding-left: 45px;
		}
	}
</style>