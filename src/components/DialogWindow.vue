<template>
	<div class="dialog-background" v-show="isActive">
		<div class="dialog-window">
			<font-awesome-icon 
				icon='trash-alt'
				class='dialog-window__icon'
			/>
			<span class="dialog-window__message">
				Вы уверены, что хотите удалить {{ mode == 'student' ? 'студента' : 'группу' }} 
				<span class='target-name'>{{ name }}</span>?
			</span>
			<div class="dialog-window__wrapper">
				<button class="dialog-window__button" v-on:click='confirm'>Да</button>
				<button class="dialog-window__button" v-on:click='reject'>Нет</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "DialogWindow",
	data() {
		return {
			isActive: false,
			name: "",
			mode: "",
			index: ""
		}
	},
	methods: {
		ask(name, mode, index) {
			this.isActive = true;
			this.name = name;
			this.mode = mode;
			this.index = index;
		},
		confirm() {
			this.$emit('answer', true, this.index);
			this.isActive = false;
		},
		reject() {
			this.isActive = false;
		}
	}
}
</script>

<style lang="less" scoped>
	.dialog-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #333333b7;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;

		.dialog-window {
			width: 450px;
			background-color: #fff;
			margin-bottom: 130px;
			border-radius: 5px;
			display: flex;
			flex-direction: column;
			align-items: center;

			&__icon {
				margin-top: 30px;
				font-size: 50px;
				color: #ff7c7c;
			}

			&__message {
				margin-top: 20px;
				font-weight: 500;
				padding: 0 20px;
				text-align: center;
				line-height: 22px;

				.target-name {
					font-weight: 600;
				}
			}

			&__wrapper {
				width: 230px;
				display: flex;
				justify-content: space-between;
				margin-top: 27px;
				margin-bottom: 25px;
			}
			
			&__button {
				width: 100px;
				height: 35px;
				border: none;
				font-weight: 600;
				border-radius: 5px;
				cursor: pointer;
				outline: none;

				&:nth-child(1) {
					background-color: #fff;
					color: #ff7c7c;
					box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
				}

				&:nth-child(2) {
					background-color: #ff7c7c;
					color: #fff;
				}
			}
		}
	}
</style>