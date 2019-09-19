<template>
	<div id="app">
		<div class="header">
			<div class="nav-panel">
				<router-link 
					to='/students'  
					class="button button_secondary" 
					v-bind:class='{ button_secondary_active : currentPage == "students" }'
					v-on:click.native='changePage("students")'
				>Список студентов</router-link>
				<router-link 
					to='/groups' 
					class="button button_secondary" 
					v-bind:class='{ button_secondary_active : currentPage == "groups" }'
					v-on:click.native='changePage("groups")'
				>Список групп</router-link>
			</div>
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				currentPage: ''
			}
		},
		beforeMount() {
			switch(window.location.pathname) {
				case "/students": {
					this.currentPage = 'students';
					break;
				}
				case "/groups": {
					this.currentPage = 'groups';
					break;
				}
			}
		},
		methods: {
			changePage(value) {
				this.currentPage = value;
			}
		}
	}
</script>

<style lang="less" scoped>
	.header {
		height: 243px;
		width: 100%;
		background-color: #23233E;
		padding-top: 22px;
			.nav-panel {
				width: 1440px;
				margin: 0 auto;
				padding-left: 34px;
		
				.button:nth-child(2) {
					margin-left: 44px;
				}
		}
	}

	.content {
		width: 1373px;
		background-color: #FEFCFE;
		margin: 0 auto;
		transform: translateY(-148px);
		border-radius: 5px;
		box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25), -2px 2px 4px rgba(0, 0, 0, 0.25);
	}
</style>
