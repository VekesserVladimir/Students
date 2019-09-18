<template>
	<div class="table-header students-list__table-header">
			<button 
				class="column-title" 
				v-for='button in buttons' 
				v-bind:class='{ "column-title_active" : button.isActive }'
				v-bind:key='button.id'
			>
				<font-awesome-icon  
					class="title-arrow" 
					icon='sort-down'
					v-visible='button.isActive'
				/>
				<span class="column-name">{{ button.name }}</span>
			</button>
		</div>		
</template>

<script>
export default {
	name: 'TableHeader',
	props: [ "buttons" ],
	data() {
		return {

		}
	}
}
</script>

<style lang="less" scoped>
	.students-list__table-header {
		button:nth-child(2) {
			margin-left: 290px;
		}
		button:nth-child(3) {
			margin-left: 76px;
		}
		button:nth-child(4) {
			margin-left: 42px;
		}
		button:nth-child(5) {
			margin-left: 38px;
		}
		button:nth-child(6) {
			margin-left: 40px;
		}
	}

	.table-header {
		margin-top: 34px;
		padding-left: 45px;
	}

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