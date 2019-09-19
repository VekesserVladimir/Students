<template>
	<div class='item-menu'>
		<button class="item-menu__button" 
			v-bind:class='{ "item-menu__button_active" : isActive }'
			v-on:click='isActive = !isActive'
			v-on:mouseleave='isActive = false'
		>
			<div class="item-menu__dot"></div>
			<div class="item-menu__dot"></div>
			<div class="item-menu__dot"></div>
		</button>
		<div class="item-menu__menu">
			<button class="item-menu__menu-button">Изменить</button>
			<button class="item-menu__menu-button">Удалить</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "ItemMenu",
	data() {
		return {
			isActive: false
		}
	}
}
</script>

<style lang="less" scoped>
	.item-menu {
		display: none;
		position: relative;

		&__menu {
			width: 140px;
			height: 96px;
			background-color: #fff;
			border-radius: 5px;
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
			position: absolute;
			left: -85px;
			top: 19px;
			z-index: 2;

			&-button {
				cursor: pointer;
				border: none;
				padding: 0 0 0 10px;
				width: 100%;
				height: 50%;
				text-align: left;
				background-color: transparent;
				font-size: 14px;
				font-weight: 500;

				&:hover {
					background-color: #ECECF4;
				}
			}
		}

		&__dot {
			width: 4px;
			height: 4px;
			background-color: #487bf9;
			border-radius: 5px;
			transition: background-color 0.1s ease-in-out, height 0.1s ease-in-out, transform 0.2s ease-in-out;

			&:nth-child(2) {
				margin: 0 3px;
			}
		}

		&__button {
			width: 38px;
			height: 38px;
			border-radius: 50%;
			background-color: #FEFCFE;
			border: none;
			box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
			margin-left: 36px;
			display: flex;
			justify-content: center;
			padding: 0;
			cursor: pointer;
			outline: none;
			transition: background-color 0.1s ease-in-out;
			z-index: 5;

			&_active {
				background-color: #487bf9;

				.item-menu__dot:nth-child(1) {
					transform: rotate(45deg) translate(5px, -5px);
					height: 20px;
					background-color: #fff;
				}

				.item-menu__dot:nth-child(2) {
					opacity: 0;
				}

				.item-menu__dot:nth-child(3) {
					transform: rotate(-45deg) translate(-5px, -5px);
					height: 20px;
					background-color: #fff;
				}
			}
		}
		.item-menu__dot:nth-child(2) {
			transition: opacity 0.1s ease 0.1s;
		}
	}
</style>