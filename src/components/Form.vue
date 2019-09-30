<template>
	<div class="dark-background" v-show="isActive">
		<form class="form" action='' method="POST" @submit='validate'>
			<span class="form__title">{{ this.mode == 'create' ? "Добавить студента" : "Редактирование" }}</span>
			<div class="form__row">
				<div class="form__row-name">Имя</div>
				<input 
					type="text" 
					class='form__input_text' 
					v-model='fullName'
					v-bind:class="{ 'form__error' : errors.fullName }"
				>
			</div>
			<div class="form__row">
				<div class="form__row-name">Группа</div>
				<select 
					class="dropdown" 
					v-model='group'
					v-bind:class="{ 'dropdown__error' : errors.group }"
				>    
        			<option v-for='group in groups' v-bind:key="group.id">{{ group }}</option>
    			</select>
			</div>
			<div class="form__row">
				<div class="form__row-name">Форма обучения</div>
				<select 
					class="dropdown" 
					v-model='formOfEducation'
					v-bind:class="{ 'dropdown__error' : errors.formOfEducation }"
				>    
        			<option>очная</option>
					<option>заочная</option>
    			</select>
			</div>
			<div class="form__row">
				<div class="form__row-name">Дата рождения</div>
				<DatePicker
					input-class="form__input_date"
					format='dd-MMMM-yyyy'
					:language="ru"
					v-model='dateOfBirth'
				></DatePicker>
			</div>
			<div class="form__row">
				<div class="form__row-name">Средний балл</div>
				<input 
					type="text" 
					class='form__input_text' 
					v-model='avgMark'
					v-bind:class="{ 'form__error' : errors.avgMark }"
				>
			</div>
			<div class="form__row">
				<div class="form__row-name">Задолжности</div>
				<select 
					class="dropdown" 
					v-model='isDebtor'
					v-bind:class="{ 'dropdown__error' : errors.isDebtor }"
				>
        			<option>отсутствуют</option>
					<option>присутствуют</option>
    			</select>
			</div>
			<div class="form__buttons-wrapper">
				<button class="form__button" v-on:click.prevent='validate'>{{ this.mode == "create" ? "Добавить" : "Сохранить" }}</button>
				<button class="form__button" v-on:click.prevent='closeForm'>Отменить</button>
			</div>
		</form>
	</div>
</template>

<script>
import DatePicker from 'vuejs-datepicker';
import ru from 'vuejs-datepicker/dist/locale/translations/ru'
import { faSortDown, faSortUp, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import Student from "../entities/Student"

export default {
	name: 'Form',
	components: {
		DatePicker
	},
	props: [ "groups" ],
	data() {
		return {
			index: undefined,
			item: undefined,
			isActive: false,
			ru: ru,
			mode: "",
			fullName: "",
			group: "",
			formOfEducation: "очная",
			dateOfBirth: "",
			avgMark: "",
			isDebtor: "отсутствуют",
			errors: {
				fullName: false,
				group: false,
				formOfEducation: false,
				dateOfBirth: false,
				avgMark: false,
				isDebtor: false
			}
		}
	},
	methods: {
		active(mode, item, index) {
			this.isActive = true;
			this.mode = mode;
			this.index = index;
			if(this.mode == 'change') {
				this.fullName = item.fullName;
				this.group = item.group;
				this.formOfEducation = item.formOfEducation;
				this.dateOfBirth = item.dateOfBirth;
				this.avgMark = item.avgMark;
				this.isDebtor = item.isDebtor == false ? "отсутствуют" : "присутствуют";
			}
		},
		closeForm() {
			this.isActive = false;
		},
		validate() {
			let flag = false;

			if(!this.fullName) {
				this.errors.fullName = true;
				flag = true;
			}
			if(!this.group) {
				this.errors.group = true;
				flag = true;
			}
			if(!this.formOfEducation) {
				this.errors.formOfEducation = true;
				flag = true;
			}
			if(!this.dateOfBirth) {
				this.errors.dateOfBirth = true;
				flag = true;
			}
			if(!this.avgMark) {
				this.errors.avgMark = true;
				flag = true;
			}
			if(!this.isDebtor) {
				this.errors.isDebtor = true;
				flag = true;
			}

			if(!flag) {
				let student = new Student(this.fullName, 
										  this.group, 
										  this.formOfEducation, 
										  this.dateOfBirth, 
										  this.avgMark, 
										  this.isDebtor == "отсутствуют" ? false : true);
				this.isActive = false;
				this.fullName = "";
				this.group = "";
				this.formOfEducation = "очная";
				this.dateOfBirth = "";
				this.avgMark = "";
				this.isDebtor = "отсутствуют";
				if(this.mode == "create") {
					this.$emit("addStudent", student);
				} else this.$emit("changeStudent", student, this.index);
			}
		}
	}
}
</script>

<style lang="less">
	.form {
		width: 428px;
		background-color: #FEFCFE;
		padding: 29px 34px 31px 34px;
		display: flex;
		flex-direction: column;
		border-radius: 5px;
		color: #1D1D1D;

		&__buttons-wrapper {
			display: flex;
			justify-content: space-between;
			margin-top: 30px;
		}

		&__button {
			height: 35px;
			border: none;
			width: 140px;
			border-radius: 5px;
			font-weight: 500;
			font-size: 16px;
			line-height: 20px;
			padding: 2px 0 0 0;
			cursor: pointer;

			&:nth-child(1) {
				color: #FEFCFE;
				background-color: #4975F5;
			}

			&:nth-child(2) {
				background: #FEFCFE;
				box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
				color: #1D1D1D;		
			}
		}

		&_dropdown {
			box-shadow: none;
		}

		&__input {

			&_text, &_date {
				font-size: 16px;
				width: 100%;
				height: 40px;
				border-radius: 5px;
				border: 1px solid #DBDDE4;
				padding: 0 0 0 14px;
			}
		}

		&__error {
			border-color: #F62020;
		}

		&__title {
			font-weight: 600;
			font-size: 20px;
			line-height: 24px;
			text-align: center;
			margin-bottom: 29px;
		}

		&__row {
			margin-bottom: 12px;

			&-name {
				display: block;
				font-weight: 600;
				font-size: 14px;
				line-height: 17px;
				margin-bottom: 6px;
			}
		}
	}
</style>