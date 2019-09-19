<template>
	<div class="list-item">
		<div class="item-values-list">
			<span class="item-value">{{ item.fullName }}</span>
			<span class="item-value">{{ item.group }}</span>
			<span class="item-value">{{ item.formOfEducation }}</span>
			<span class="item-value">{{ item.age }}</span>
			<span class="item-value">{{ item.avgPoint }}</span>
			<span class="item-value">{{ item.isDebtor ? "присутствуют" : "отсутствуют" }}</span>
		</div>
		<div class="underline"></div>
	</div>
</template>

<script>
export default {
	name: 'ListItem',
	props: [ "item" ],
	data() {
		return {

		}
	}
}
</script>

<style lang="less" scoped>
	.list-item {
		padding-top: 21px;

		.item-values-list {
			padding-left: 61px;

			.item-value {
				font-size: 20px;
				line-height: 24px;
				font-weight: 600;
				color: #5E5E5E;
				display: inline-flex;
			}

			.item-value:not(:nth-child(1)) {
				justify-content: center;
				align-items: center;
				width: 135px;
			}
	
			.item-value:nth-child(1) {
				width: 301px;
				color: #556CA4;
			}

			.item-value:nth-child(2) {
				margin-left: 18px;
			}

			.item-value:nth-child(3) {
				margin-left: 68px;
			}

			.item-value:nth-child(4) {
				margin-left: 43px;
			}

			.item-value:nth-child(5) {
				margin-left: 23px;
			}
			
			.item-value:nth-child(6) {
				margin-left: 53px;
			}
		}

		.underline {
			margin-top: 23px;
		}

		&:hover {
			background-color: #ECECF4;
		}
	}
</style>