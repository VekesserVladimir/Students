<template>
	<button class="item-menu" 
		v-bind:class='{ "item-menu_active" : isActive }'
		v-on:click='isActive = !isActive'
		v-on:mouseleave='isActive = false'
	>
		<div class="item-menu__dot"></div>
		<div class="item-menu__dot"></div>
		<div class="item-menu__dot"></div>
	</button>
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
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background-color: #FEFCFE;
		border: none;
		box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
		margin-left: 36px;
		display: none;
		justify-content: center;
		padding: 0;
		cursor: pointer;
		outline: none;
		transition: background-color 0.1s ease-in-out;

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

		.item-menu__dot:nth-child(2) {
			transition: opacity 0.1s ease 0.1s;
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
	}
</style>