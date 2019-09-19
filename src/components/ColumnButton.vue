<template>
	<button 
		class="column-title" 
		v-bind:class='{ "column-title_active" : button.isActive }'
		v-on:click='changeSort'
	>
		<font-awesome-icon  
			class="title-arrow" 
			icon='sort-down'
			v-visible='button.isActive'
			v-if='button.direction == "descending"'
		/>
		<font-awesome-icon  
			class="title-arrow" 
			icon='sort-up'
			v-visible='button.isActive'
			v-else
		/>
		<span class="column-name">{{ button.name }}</span>
	</button>
</template>

<script>
export default {
	name: 'ColumnButton',
	props: [ "button", "index" ],
	data() {
		return {

		}
	},
	methods: {
		changeSort() {
			let direction;
			if(this.button.isActive) {
				this.button.direction == 'descending' ? direction = 'ascending' : direction = 'descending';
			} else {
				direction = 'descending';
			}
			this.$emit("changeSort", this.index, direction);
		}
	}
}
</script>

<style lang="less" scoped>
	.column-title {
		border: none;
		padding: 0;
		background-color: transparent;
		cursor: pointer;
		color: #9795B1;
		font-size: 18px;
		font-weight: 600;
		outline: none;

		&_active {
			color: #1D1D1D;
		}

		.title-arrow {
			margin-right: 5px;
			padding-bottom: 5px;
		}
	}
</style>