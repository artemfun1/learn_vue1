<template>
	<form class="form" v-on:submit.prevent>
		<h4>Создание поста</h4>
		<input
			v-model="post.title"
			class="input"
			type="text"
			placeholder="Название"
		/>
		<input
			v-model="post.body"
			class="input"
			type="text"
			placeholder="Описание"
		/>
		<my-button @click="createPost"
		style="margin-top: 15px;"> Добавить </my-button>
	</form>
</template>

<script>


export default {
	data() {
		return {
			post: {
				title: "",
				body: "",
			},
		};
	},
	methods: {
		createPost() {
			this.post.id = new Date();
			this.$emit("create", this.post);
			this.post = {
				title: "",
				body: "",
			};
		},
	},
};
</script>

<style scoped>
.input {
	width: 100%;
	border: 1px solid teal;
	padding: 10px;
	margin-top: 10px;
}
.form {
	display: flex;
	flex-direction: column;
}
</style>
