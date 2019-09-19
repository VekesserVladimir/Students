<template>
	<div class="list-item">
		<div class="item-values-list">
			<span class="item-value">{{ item.fullName }}</span>
			<span class="item-value">{{ item.group }}</span>
			<span class="item-value">{{ item.formOfEducation }}</span>
			<span class="item-value">{{ item.age }}</span>
			<span class="item-value">{{ item.avgPoint }}</span>
			<span class="item-value">{{ item.isDebtor ? "присутствуют" : "отсутствуют" }}</span>
			<ItemMenu/>
		</div>
		<div class="underline"></div>
	</div>
</template>

<script>
import ItemMenu from '../components/ItemMenu'

export default {
	name: 'ListItem',
	props: [ "item" ],
	components: { ItemMenu },
	data() {
		return {

		}
	}
}
</script>

<style lang="less" scoped>
	.list-item {

		.item-values-list {
			height: 73px;
			padding-left: 61px;
			display: flex;
			align-items: center;

			.item-value {
				font-size: 19px;
				line-height: 24px;
				font-weight: 500;
				color: rgb(71, 71, 71);
				display: inline-flex;
			}

			.item-value:not(:nth-child(1)) {
				justify-content: center;
				align-items: center;
				width: 135px;
			}
	
			.item-value:nth-child(1) {
				width: 301px;
				color: #517ddb;
			}

			.item-value:nth-child(2) {
				margin-left: 19px;
			}

			.item-value:nth-child(3) {
				margin-left: 71px;
			}

			.item-value:nth-child(4) {
				margin-left: 46px;
			}

			.item-value:nth-child(5) {
				margin-left: 27px;
			}
			
			.item-value:nth-child(6) {
				margin-left: 55px;
			}
		}

		.underline {
			margin-top: 0px;
		}

		&:hover {
			background-color: #ECECF4;
			
			.item-menu {
				display: inline-block;
			}
		}
	}
</style>