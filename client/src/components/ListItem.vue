<template>
	<div 
		class="list-item"
		v-bind:class="[ {'list-item_active_on' : isActive}, getType() ? 'student' : 'group' ]"
	>
		<div class="item-values-list">
			<span 
				class="item-value"
				v-for="value in item.getValues()"
				v-bind:key='value.key'
			>{{ value }}</span>
			<ItemMenu 
				v-on:delete-item='deleteItem'
				v-on:change-item='changeItem'
				v-on:active-item='activeItem'
				v-on:disable-item='disableItem'
			/>
		</div>
		<div class="underline"></div>
	</div>
</template>

<script>
import ItemMenu from '../components/ItemMenu';
import Student from '../entities/Student';

export default {
	name: 'ListItem',
	props: [ "item", "index" ],
	components: { ItemMenu },
	data() {
		return {
			isActive: false
		}
	},
	methods: {
		getType() {
			return this.item instanceof Student;
		},
		deleteItem() {
			this.$emit("delete-item", this.item);
		},
		changeItem() {
			this.$emit("change-item", this.index);
		},
		activeItem() {
			this.isActive = !this.isActive;
		},
		disableItem() {
			setTimeout(() => this.isActive = false, 200);
		}
	}
}
</script>

<style lang="less">
	.list-item {
		&:last-child {
			.underline {
				display: none;
			}
		}

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
				//color: rgb(0, 0, 0);
				display: inline-flex;
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

		&_active {
			
			&_on {
				.item-menu {
					display: inline-block;
				}
			}
		}
	}
	.student {
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
			margin-right: 36px;
		}

		.item-menu__menu {
			position: absolute;
			left: -121px;
		}
	}
														
	.group {
		.item-value:not(:nth-child(1)) {
			justify-content: center;
			align-items: center;
			width: 135px;
		}
		
		.item-value:nth-child(1) {
			width: 135px;
			color: #517ddb;
		}
	
		.item-value:nth-child(2) {
			margin-left: 104px;
		}
	
		.item-value:nth-child(3) {
			margin-left: 155px;
		}
	
		.item-value:nth-child(4) {
			margin-left: 119px;
		}

		.item-value:nth-child(5) {
			margin-left: 89px;
			margin-right: 88px;
		}		

		.item-menu__menu {
			position: absolute;
			left: -121px;
		}
	}
</style>