<template>
	<div class="navbar">
		<div @click="$router.push('/')">Vue 3</div>
		<div class="nav__btns">
			<my-button @click="$router.push('/posts')">Posts</my-button>
			<my-button @click="$router.push('/about')">About</my-button>
		</div>
	</div>
</template>

<script>
export default {};
</script>
<style>
.navbar {
	height: 50px;
	background-color: lightgray;
	box-shadow: 2px 2px 4px gray;
	display: flex;
	align-items: center;
	padding: 0 15px;
}
.nav__btns {
	margin-left: auto;
	display: flex;
	gap: 20px;
}
</style>
