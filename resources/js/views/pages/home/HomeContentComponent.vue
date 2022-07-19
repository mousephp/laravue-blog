<template>
	<div>
		<app-home-header></app-home-header>
		<app-home-tpack></app-home-tpack>
		<app-home-featured></app-home-featured>
	</div>
</template>

<script>
	import HomeHeader from './TheHomeHeader.vue';
	import HomeTpack from './TheHomeTpack.vue';
	import HomeFeatured from './TheHomeFeatured.vue';
	export default {
		components: {
			appHomeHeader: HomeHeader,
			appHomeTpack: HomeTpack,
			appHomeFeatured: HomeFeatured
		}
	}
</script>