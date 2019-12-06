<template>
	<div class="dark-background" v-show="isActive">
		<form class="form" action='' method="POST" @submit='validate'>
			<span class="form__title">{{ this.mode == 'create' ? "Добавить группу" : "Редактирование" }}</span>
			<div class="form__row">
				<div class="form__row-name">Имя</div>
				<input 
					type="text" 
					class='form__input_text' 
					v-model='specialty'
					v-bind:class="{ 'form__error' : errors.specialty }"
				>
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
			<div class="form__buttons-wrapper">
				<button class="form__button" v-on:click.prevent='validate'>{{ this.mode == "create" ? "Добавить" : "Сохранить" }}</button>
				<button class="form__button" v-on:click.prevent='closeForm'>Отменить</button>
			</div>
		</form>
	</div>
</template>

<script>
import Group from '../entities/Group';

export default {
	name: 'Form',
	data() {
		return {
			item: undefined,
			isActive: false,
			mode: "",
			id: "",
			specialty: "",
			formOfEducation: "очная",
			errors: {
				specialty: false,
				formOfEducation: false
			}
		}
	},
	methods: {
		active(mode, item) {
			this.isActive = true;
			this.mode = mode;
			this.item = item;
			if(this.mode == 'change') {
				this.id = item.id;
				this.specialty = item.specialty;
				this.formOfEducation = item.listOfStudents[0].formOfEducation;
			}
		},
		closeForm() {
			this.isActive = false;
		},
		validate() {
			let flag = false;

			if(!this.specialty) {
				this.errors.specialty = true;
				flag = true;
			}
			if(!this.formOfEducation) {
				this.errors.formOfEducation = true;
				flag = true;
			}

			if(!flag) {
				let group;
				if(this.mode == 'change') {
						group = new Group(	this.id,
										this.specialty, 
										this.item.typeOfStudy,
										this.item.course,
										this.item.listOfStudents.map(student => {
												student.formOfEducation = this.formOfEducation;
											return student;
										}));
					} else {
						group = new Group(	0,
											this.specialty, 
											this.formOfEducation,
											this.specialty.slice(-2, 1),
											[]
										)
				}
				this.isActive = false;
				this.specialty = "";
				this.formOfEducation = "очная";
				if(this.mode == "create") 
					this.$emit("addGroup", group);
				else 
					this.$emit("changeGroup", group);
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