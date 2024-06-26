<template>
	<button class="btn">
		<slot></slot>
	</button>
</template>

<script>
export default {
  name:'my-button'
};
</script>

<style>
.btn {
	align-self: flex-end;
	padding: 10px 15px;
	background: none;
	color: teal;
	border: 1px solid teal;
	border-radius: 10px;
	&:hover {
		background-color: rgba(0, 128, 128, 0.436);
	}
}
</style>
